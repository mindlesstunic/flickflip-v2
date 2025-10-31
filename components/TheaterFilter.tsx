"use client";

import { useState } from "react";
import { DealCard } from "./DealCard";
import { Deal } from "@/app/utils/dealGenerator";

type TheaterFilterProps = {
  activeDeals: Deal[];
};

export function TheaterFilter({ activeDeals }: TheaterFilterProps) {
  const [selectedTheater, setSelectedTheater] = useState<string>("all");

  //Group deals by theater
  const dealsByTheater = activeDeals.reduce((grouped, deal) => {
    const theater = deal.theater;
    if (!grouped[theater]) {
      grouped[theater] = [];
    }
    grouped[theater].push(deal);
    return grouped;
  }, {} as Record<string, Deal[]>);

  const theaters = Object.keys(dealsByTheater);

  //Filter theaters based on selection

  const displayedTheaters =
    selectedTheater === "all"
      ? theaters
      : theaters.filter((t) => t === selectedTheater);

  return (
    <>
      {/*Filter Dropdown */}
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-2xl font-bold"> Available Mystery Deals</h2>

        {activeDeals.length > 0 && (
          <div className="flex items-center gap-3">
            <label htmlFor="theater-filter" className="text-sm text-gray-400">
              Filter by theater:
            </label>
            <select
              id="theater-filter"
              value={selectedTheater}
              onChange={(e) => setSelectedTheater(e.target.value)}
              className="bg-gray-800 text-white border border-gray-700 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-red-500"
            >
              <option value="all">All Theaters</option>
              {theaters.map((theater) => (
                <option key={theater} value={theater}>
                  {theater}
                </option>
              ))}
            </select>
          </div>
        )}
      </div>

      {/*Theater Sections */}
      <div className="space-y-12">
        {displayedTheaters.map((theater) => (
          <div key={theater}>
            <div className="mb-6">
              <h3 className="text-xl font-semibold text-red-500 border-b-2 border-red-500/30 pb-2">
                🎭 {theater}
              </h3>
              <p className="text-sm text-gray-400 mt-1">
                {dealsByTheater[theater].length} mystery{" "}
                {dealsByTheater[theater].length === 1 ? "deal" : "deals"}{" "}
                available
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {dealsByTheater[theater].map((deal) => (
                <DealCard key={deal.id} deal={deal} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
