"use client";

import React, { useEffect, useState } from "react";
import { supabase } from "../../../lib/supabaseClient";
import Spinner from "../ui/spinner";

interface PumpFunDashboardProps {
  liteMode?: boolean;
}

const PumpFunDashboard: React.FC<PumpFunDashboardProps> = ({ liteMode = false }) => {
  const [data, setData] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [newEntryId, setNewEntryId] = useState<number | null>(null);
  const [currentTime, setCurrentTime] = useState(Date.now()); // Track the current time
  const [nonUniqueIps, setNonUniqueIps] = useState(new Set<string>()); // Persistent set of duplicate IPs

  const updateNonUniqueIps = async (data: any[]) => {
    const ipCounts: Record<string, number> = {};

    // Count occurrences of each IP
    data.forEach((row) => {
      ipCounts[row.ip] = (ipCounts[row.ip] || 0) + 1;
    });

    // Find non-unique IPs
    const duplicates = new Set<string>(
      Object.keys(ipCounts).filter((ip) => ipCounts[ip] > 1)
    );

    setNonUniqueIps(duplicates);
  };
  
  useEffect(() => {
    const fetchData = async () => {
      let allData: any[] = [];
      let start = 0;
      let batchSize = 1000;
      
      while (true) {
          const { data, error } = await supabase
            .from("PumpFunIPs")
            .select("*")
            .gte("created_at", "2025-03-30T22:00:00") // Filter rows created on or after 2025-03-30 at 22:00
            .order("created_at", { ascending: false })
            .range(start, start + batchSize - 1); // Fetch 1000 rows at a time
  
          if (error) {
            console.error("Error fetching data:", error);
            break;
          }
  
          if (data.length === 0) break; // Stop if no more data
  
          // Filter out rows with empty or null IPs
          const filteredData = data.filter((row) => row.ip && row.ip.trim() !== "");
  
          allData = [...allData, ...filteredData]; // Merge filtered data
          start += batchSize;
        }

      setData(allData || []);
      updateNonUniqueIps(allData);
      setLoading(false);
    };

    fetchData();

    // Subscribe to real-time updates
    const subscription = supabase
      .channel("PumpFunIPs")
      .on(
        "postgres_changes",
        { event: "*", schema: "public", table: "PumpFunIPs" },
        (payload) => {
          console.log("Realtime event:", payload);

          setData((prevData) => {
            let updatedData = prevData;

            if (payload.eventType === "INSERT") {
              if (payload.new.ip && payload.new.ip.trim() !== "") {
                updatedData = [payload.new, ...prevData];
                // updatedData = [payload.new, ...prevData].slice(0, 5);
                setNewEntryId(payload.new.id); // Track the new entry ID
                setTimeout(() => setNewEntryId(null), 3000); // Remove the highlight after 3 seconds
              }
            } else if (payload.eventType === "UPDATE") {
              updatedData = prevData.map((item) =>
                item.id === payload.new.id ? payload.new : item
              );
            } else if (payload.eventType === "DELETE") {
              updatedData = prevData.filter((item) => item.id !== payload.old.id);
            }

            updateNonUniqueIps(updatedData);
            return updatedData;
          });
        }
      )
      .subscribe();

    return () => {
      supabase.removeChannel(subscription);
    };
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(Date.now());
    }, 1000);

    return () => clearInterval(interval); // Cleanup the interval on unmount
  }, []);

  // const displayedData = liteMode ? data.slice(0, 1) : data;
  const displayedData = liteMode ? data.slice(0, 3) : data.slice(0, 5);

  return (
    <main className="flex flex-col items-center justify-center bg-[#15161b] w-full">
      {loading ? (
        <Spinner />
      ) : (
        <div className="bg-[#1f232e] text-white rounded-xl shadow-lg w-full">
          <div className="bg-[#86efac] rounded-t-xl px-6 py-2">
            <h2 className="text-sm font-bold text-black">
            latest audits
            </h2>
          </div>
          {displayedData.map((item, index) => (
            <div
              key={index}
              className={`p-4 pb-3 text-xs ${index !== 0 ? "border-t-[1px] border-[#86efac]" : ""} ${
                newEntryId === item.id ? "animate-flash" : ""
              }`}
            >
              <div className="relative">
                <button
                  onClick={() => chrome.tabs.update({ url: `https://pump.fun/coin/${item.mint}` })}
                  className="absolute top-0 right-0 -mt-1 -ml-1 text-black rounded"
                  title="open in pump.fun"
                >
                  <img
                      src="https://pump.fun/_next/static/media/logo-pump.80ada4f8.svg"
                      alt="open pump.fun"
                      className="w-4 h-4"
                  />
                </button>
              </div>

              <div className="relative">
                <div className="absolute top-0 left-0 -mt-1 -mr-1 ">
                    <p className="text-[12px] text-gray-400 text-wrap whitespace-wrap">
                      {Math.floor((currentTime - new Date(item.created_at).getTime()) / 1000)}s
                    </p>
                    <p className="text-[12px] -mt-1 text-gray-400 text-wrap whitespace-wrap">
                      {'ago'}
                    </p>
                    </div>
                </div>
              <div className="">
                <p>
                  <strong>{item.symbol}</strong>{item.name && item.name !== "" ? `, ${item.name}` : ""}
                </p>
                <p className="">
                  <a
                    href={item.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    title="open website"
                    className="text-[#86efac] hover:underline break-words"
                  >
                      {item.website.length > 35 ? `${item.website.slice(0, 35)}...` : item.website}
                  </a>
                </p>
                <div className="pt-1">
                  <p>
                    <strong>IP:</strong>{" "}
                    <span
                    className={`${
                      nonUniqueIps.has(item.ip) ? "text-red-500 font-bold" : ""
                    } text-xs`}
                    >
                    {item.ip.length > 25 ? `${item.ip.slice(0, 21)}....` : item.ip}
                    </span>
                  </p>
                  {nonUniqueIps.has(item.ip) && (
                  <span className="text-white ml-2 text-xs">
                    (this IP is involved in {data.filter((row) => row.ip === item.ip).length} launches)
                  </span>
                  )}
                  <p className="">
                    <strong>developer:</strong>{" "}
                    <span
                      // title={item.developer}
                      className="cursor-pointer"
                      title="click to copy"
                      onClick={() => navigator.clipboard.writeText(item.developer)}
                    >
                      {item.developer.length > 10
                        ? `${item.developer.slice(0, 4)}...${item.developer.slice(-4)}`
                        : item.developer}
                    </span>
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </main>
  );
};

export default PumpFunDashboard;
