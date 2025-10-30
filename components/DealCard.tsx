"use client";

import { Deal } from "../app/data/deals";
import Image from "next/image";

type DealCardProps = {
  deal: Deal;
};

export function DealCard({ deal }: DealCardProps) {
  const handleBuyClick = () => {
    const randomIndex = Math.floor(Math.random() * 2);
    const wonMovie = randomIndex === 0 ? deal.movieA : deal.movieB;

    alert(
      `🎉 Congratulations!\n\nYou got tickets to:\n${wonMovie.title}\n\n🎭 ${deal.theater}\n⏰ ${deal.showTime}\n🎫 ${deal.seatsLeft} seats left`
    );
  };

  return (
    <div className="bg-gray-800 rounded-lg p-6 shadow-lg hover:shadow-red-500/20 transition-shadow">
      <div className="flex items-center justify-center gap-4 p-4 bg-grau-900">
        <div className=" relative w-32 h-48 rounded overflow-hidden">
          <Image
            src={deal.movieA.poster}
            alt={deal.movieA.title}
            fill
            className="object-cover"
          />
        </div>
        <div className="text-2xl font-bold text-red-500">OR</div>
        <div className=" relative w-32 h-48 rounded overflow-hidden">
          <Image
            src={deal.movieB.poster}
            alt={deal.movieB.title}
            fill
            className="object-cover"
          />
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold text-red-500 mb-3"> Mystery Deal</h3>
        <p className="text-gray-300 mb-4 text-center">
          {deal.movieA.title} <span className="text-red-500 font-bold">OR</span>{" "}
          {deal.movieB.title}
        </p>

        <div className="flex items-center justify-center gap-3 mb-3">
          <span className="text-gray-500 line-through">
            {deal.originalPrice}
          </span>
          <span className=" text-3xl gont-bold text red-600">
            {/* {" "} */}₹{deal.discountPrice}
          </span>
        </div>
        <div className="text-sm text-gray-400 mb-4 space-y-1">
          <p>🎭 {deal.theater}</p>
          <p>⏰ {deal.showTime}</p>
          <p>🎫 {deal.seatsLeft} seats left</p>
        </div>

        <button
          onClick={handleBuyClick}
          className="w-full bg-red-600 text-white py-2 rounded-lg hover:bg-red-700 transition-colors font-semibold"
        >
          Buy Mystery Ticket
        </button>
      </div>
    </div>
  );
}
