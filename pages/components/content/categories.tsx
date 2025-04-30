"use client";

import React, { useEffect, useState } from "react";
import { supabase } from "../../../lib/supabaseClient";
import Spinner from "../ui/spinner";

interface PumpFunCategoriesProps {
  selectedCategory: string | null; // Selected category to filter data
}

const PumpFunCategories: React.FC<PumpFunCategoriesProps> = ({ selectedCategory }) => {
  const [loading, setLoading] = useState(true);
  const [categories, setCategories] = useState<Array<{ domain: string; amount: number; bonded_percent: number; ath_usd: number; topNames: string[] }>>([]);
  useEffect(() => {
    const fetchData = async () => {
      const { data, error } = await supabase
        .from("Categories")
        .select("name, bonded_percent, ath_usd, top_1_name, top_1_mint, top_2_name, top_2_mint, top_3_name, top_3_mint, top_4_name, top_4_mint, top_5_name, top_5_mint");

      console.log("Fetched categories:", data);

      if (error) {
        console.error("Error fetching data:", error);
        setLoading(false);
        return;
      }

      const formattedData = data?.map((item) => ({
        domain: item.name,
        bonded_percent: item.bonded_percent,
        amount: item.ath_usd, // Assuming 'ath' is the amount
        ath_usd: item.ath_usd, // Explicitly include ath_usd
        // topNames: [item.top_1_name, item.top_2_name, item.top_3_name, item.top_4_name, item.top_5_name],
        // topMints: [item.top_1_mint, item.top_2_mint, item.top_3_mint, item.top_4_mint, item.top_5_mint], // Include top_mint
        topNames: [item.top_1_name, item.top_2_name],
        topMints: [item.top_1_mint, item.top_2_mint], // Include top_mint
      }));

      setCategories(formattedData || []);
      setLoading(false);
    };

    fetchData();
  }, []);

  const formatCompactNumber = (value: number): string => {
    if (value === 0) return "0";
  
    const formatter = Intl.NumberFormat("en", { notation: "compact" });
    const formatted = formatter.format(value);
  
    // Extract the number and suffix (K, M, B, etc.)
    const match = formatted.match(/^([\d.]+)([KMBT]?)$/);
    if (!match) return formatted;
  
    const [, numStr, suffix] = match;
    const num = parseFloat(numStr);
  
    // Round to max 3 digits (e.g., 1.23K → 1.2K, 123K → 123K)
    let roundedNum: string;
    if (num >= 100) {
      roundedNum = Math.round(num).toString();
    } else if (num >= 10) {
      roundedNum = num.toFixed(1);
    } else {
      roundedNum = num.toFixed(2);
    }
  
    // Remove trailing .0 (e.g., 1.0K → 1K)
    roundedNum = roundedNum.replace(/\.0+$/, "");
  
    return `${roundedNum}${suffix}`;
  };

  const filteredCategories = selectedCategory
    ? categories.filter((category) => category.domain.toLowerCase() === selectedCategory.toLowerCase())
    : categories;

  return (
    <main className="flex flex-col items-center justify-center bg-[#15161b] w-full">
      {loading ? (
        <Spinner />
      ) : (
        <div className="pb-4 w-full max-w-4xl mx-auto">
          <div className="bg-[#86efac] rounded-t-xl px-6 py-2 border-b-[1px] border-[#15161b]">
            <h2 className="text-sm font-bold text-black text-center lowercase">
              {selectedCategory === null ? "Bonded Domains Leaderboard" : `Bonded category Leaderboard`}
            </h2>
          </div>
          <ul
            className="max-h-80 overflow-y-auto
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
            <li className="text-xs grid grid-cols-8 justify-between items-center p-3 py-2 text-black font-semibold bg-[#86efac]">
              <span className="col-span-2 text-left"></span>
              <span className="col-span-1 text-left">%</span>
              <span className="col-span-1 text-left">ATH</span>
              <div className="col-span-3 grid grid-cols-3 justify-items-center pl-2">
                <span className="text-left text-nowrap">leaders</span>
                {/* <span className="text-center">1st</span>
                <span className="text-center">2nd</span>
                <span className="text-center">3rd</span> */}
              </div>
            </li>

            {/* Data Rows */}
            {filteredCategories.slice(0, 8).map((category, index) => (
              <li
                key={index}
                className={`text-nowrap grid grid-cols-8 justify-between items-center p-3 py-2 text-white hover:bg-[#393e47] transition  ${
                  index !== 0 ? "border-t-[1px] border-[#86efac]" : ""
                } ${index % 2 === 0 ? "bg-[#1f232e]" : "bg-[#292d33]"}`}
              >
                <span className="text-xs col-span-2 text-white font-semibold truncate text-left">
                  {category.domain}
                </span>
                <span className="col-span-1 text-gray-300 text-left text-[12px]">
                  {category.bonded_percent}
                </span>
                <span className="col-span-1 text-gray-300 text-left text-[12px]">{new Intl.NumberFormat("en", { notation: "compact" }).format(category.ath_usd)}</span>
                <div className="col-span-3 flex justify-start items-left pl-2 space-x-2 text-[#86efac] uppercase text-[12px]">
                  {category.topNames.map((name, idx) => (
                    <a
                    key={idx}
                    href={`https://pump.fun/coin/${category.topMints[idx]}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    title="open in pump.fun"
                    className="text-center underline"
                    >
                    {name}
                    </a>
                  ))}
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
