"use client";

import React, { useEffect, useState } from "react";
import Spinner from "../ui/spinner";

interface PumpFunAuditProps {
  onCategoryChange: (category: string) => void; // Callback function to pass category
}

const PumpFunAudit: React.FC<PumpFunAuditProps> = ({ onCategoryChange }) => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState<any | null>(null);
  const [currentUrl, setCurrentUrl] = useState<string>("");

  // Extract token address from the URL
  const extractTokenAddress = (url: string): string | null => {
    const match = url.match(/https:\/\/pump\.fun\/coin\/(.+)/);
    return match ? match[1] : null;
  };

  const getCategory = (website: string): string => {
    if (website.includes("x.com")) return "x";
    if (
      website.includes("tiktok.com") ||
      website.includes("facebook.com") ||
      website.includes("reddit.com") ||
      website.includes("instagram.com") ||
      website.includes("linkedin.com") ||
      website.includes("twitter.com") ||
      website.includes("snapchat.com") ||
      website.includes("pinterest.com") ||
      website.includes("youtube.com") ||
      website.includes("threads.net")
    ) {
      return "social";
    }
    if (website.includes(".")) return "others";
    if (website === "") return "no site";
    return "site";
  };

  useEffect(() => {
    // Get the current URL of the active tab
    const fetchCurrentUrl = () => {
      chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
        if (tabs.length > 0 && tabs[0].url) {
          setCurrentUrl(tabs[0].url);
        } else {
          console.error("Unable to fetch the current URL.");
        }
      });
    };

    fetchCurrentUrl();
  }, []);

  useEffect(() => {
    const fetchTokenData = async () => {
      const tokenAddress = extractTokenAddress(currentUrl);
      if (!tokenAddress) {
        console.error("No token address found in the URL.");
        setLoading(false);
        return;
      }

      try {
        const response = await fetch(`https://kibu.solutions/doxdotfun/api/token/${tokenAddress}`);
        const result = await response.json();
        setData(result);
        const category = getCategory(result.website || "");
        onCategoryChange(category); // Pass the category to the parent
      } catch (error) {
        console.error("Error fetching token data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchTokenData();
  }, [currentUrl, onCategoryChange]);

  if (loading) {
    return <Spinner />;
  }

  if (!data) {
    return (
      <div className="text-white text-center">
        <p>no data available for this token.</p>
      </div>
    );
  }

  const category = getCategory(data.website || "");

  return (
    <main className="flex flex-col items-center justify-center bg-[#1f232e] w-full rounded-xl">
      <div className="bg-[#1f232e] text-white rounded-xl shadow-lg w-full">
        <div className="bg-[#86efac] rounded-t-xl px-6 py-2">
          <h2 className="text-sm font-bold text-black text-center lowercase">
            current token's audit
          </h2>
        </div>
        <div className="p-4 text-xs space-y-1 py-6">
            {category !== "no site" && (
            <p>
              <strong>website:</strong>{" "}
              <a
              href={data.website}
              target="_blank"
              rel="noopener noreferrer"
              title="open website"
              className="text-[#86efac]"
              >
              {data.website?.length > 25 ? `${data.website.slice(0, 25)}...` : data.website}
              </a>
            </p>
            )}
          <p>
            <strong>category:</strong> {category}
          </p>
          <p>
            <strong>developer:</strong>{" "}
            <span
              className="cursor-pointer"
              title="click to copy"
              onClick={() => navigator.clipboard.writeText(data.developer)}
            >
              {data.developer?.length > 10
                ? `${data.developer.slice(0, 4)}...${data.developer.slice(-4)}`
                : data.developer}
            </span>
          </p>
          <div className="flex flex-row space-x-2 justify-center items-center">
            {category !== "no site" && (
              <p>
                <strong>known IP:</strong> {data.known_ip ? "yes" : "no"}
              </p>
            )}
            <p>
              <strong>known developer:</strong> {data.developer_exists ? "yes" : "no"}
            </p>
          </div>
          <div className="">
            <button
              className="mt-2 px-4 py-2 bg-[#86efac] hover:bg-[#34c55e] text-black rounded-lg text-sm font-semibold"
              onClick={() =>
                window.open(
                  `https://kibu.solutions/doxdotfun/audit/${data.developer}`,
                  "_blank"
                )
              }
            >
              audit developer
            </button>
          </div>
        </div>
      </div>
    </main>
  );
};

export default PumpFunAudit;