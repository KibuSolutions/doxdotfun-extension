"use client";

import React, { useEffect, useState } from "react";
import { supabase } from "../../../lib/supabaseClient";
import Spinner from "../ui/spinner";

interface PumpFunCategoriesProps {
  liteMode?: boolean;
}

const PumpFunCategories: React.FC<PumpFunCategoriesProps> = ({}) => {
  const [loading, setLoading] = useState(true);
  const [categories, setCategories] = useState<Array<{ domain: string; amount: number; bonded_percent: number }>>([]);

  useEffect(() => {
    const fetchData = async () => {
      const { data, error } = await supabase.rpc('get_domains_leaderboard');

      console.log("Fetched categories:", data);

      if (error) {
        console.error("Error fetching data:", error);
        setLoading(false);
        return;
      }

      setCategories(data || []);
      setLoading(false);
    };

    fetchData();
  }, []);

  return (
    <main className="flex flex-col items-center justify-center bg-[#15161b] w-full">
      {loading ? (
        <Spinner />
      ) : (
        <div className="pb-4 w-full max-w-4xl mx-auto">
          <div className="bg-[#86efac] rounded-t-xl px-6 py-2 border-b-[1px] border-[#15161b]">
            <h2 className="text-sm font-bold text-black text-center lowercase">
              Bonded Domains Leaderboard
            </h2>
          </div>
          <ul
            className="max-h-40 overflow-y-auto
              [&::-webkit-scrollbar]:w-2
              [&::-webkit-scrollbar]:h-2
              [&::-webkit-scrollbar-track]:rounded-full
              [&::-webkit-scrollbar-track]:bg-gray-100
              [&::-webkit-scrollbar-thumb]:rounded-full
              [&::-webkit-scrollbar-thumb]:bg-gray-300
              dark:[&::-webkit-scrollbar-track]:bg-neutral-700
              dark:[&::-webkit-scrollbar-track]:rounded-none
              dark:[&::-webkit-scrollbar-thumb]:bg-neutral-500
              bg-transparent rounded-bl-xl shadow-lg scrollbar-thin scrollbar-thumb-[#86efac] scrollbar-track-transparent
              [&::-webkit-scrollbar-corner]:bg-neutral-700
              [&::-webkit-scrollbar-corner]:rounded-none
              "
          >
            {/* Header Row */}
            <li className="text-xs grid grid-cols-8 justify-between items-center p-3 py-1 text-black font-semibold bg-[#86efac]">
              <span className="col-span-2 text-left"></span>
              <span className="col-span-1 text-left">%</span>
              <span className="col-span-1 text-left">ATH</span>
              <div className="col-span-3 grid grid-cols-3 justify-items-center pl-2">
                <span className="text-left text-nowrap">top 3</span>
                {/* <span className="text-center">1st</span>
                <span className="text-center">2nd</span>
                <span className="text-center">3rd</span> */}
              </div>
            </li>

            {/* Data Rows */}
            {categories.slice(0, 8).map((category, index) => (
              <li
                key={index}
                className={`grid grid-cols-8 justify-between items-center p-3 py-1 text-white ${
                  index !== 0 ? "border-t-[1px] border-[#86efac] w-full" : ""
                } ${index % 2 === 0 ? "bg-[#15161b]" : "bg-[#292d33]"}`}
              >
                <span className="text-xs col-span-2 text-white font-semibold truncate text-left">
                  {category.domain}
                </span>
                <span className="col-span-1 text-gray-300 text-left text-[12px]">
                  {category.bonded_percent}
                </span>
                <span className="col-span-1 text-gray-300 text-left text-[12px]">300M</span>
                <div className="col-span-3 flex justify-items-center pl-2 space-x-2 text-[#86efac] uppercase text-[12px]">
                  <span className="text-center">longname</span>
                  <span className="text-center">longname</span>
                  <span className="text-center">token</span>
                </div>
              </li>
            ))}
          </ul>
        </div>
      )}
    </main>
  );
};

export default PumpFunCategories;
