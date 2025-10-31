"use client";

import Image from "next/image";
import { Countdown } from "./Countdown";

type DealCardProps = {
  deal: {
    id: number;
    movieA: {
      title: string;
      poster: string;
      showtime: string;
    };
    movieB: {
      title: string;
      poster: string;
      showtime: string;
    };
    theater: string;
    originalPrice: number;
    discountPrice: number;
    seatsLeft: number;
    expiresAt: Date;
  };
};

export function DealCard({ deal }: DealCardProps) {
  const handleBuyClick = () => {
    const randomIndex = Math.floor(Math.random() * 2);
    const wonMovie = randomIndex === 0 ? deal.movieA : deal.movieB;

    alert(
      `🎉 Congratulations!\n\nYou got tickets to:\n${wonMovie.title}\n\n🎭 ${
        deal.theater
      }\n⏰ ${formatTime(wonMovie.showtime)}\n🎫 ${deal.seatsLeft} seats left`
    );
  };

  const formatTime = (time: string) => {
    const [hours, minutes] = time.split(":");
    const hour = parseInt(hours);
    const ampm = hour >= 12 ? "PM" : "AM";
    const displayHour = hour % 12 || 12;
    return `${displayHour}:${minutes} ${ampm}`;
  };

  return (
    <div className="bg-gray-800 rounded-lg p-6 shadow-lg hover:shadow-red-500/20 transition-shadow">
      <div className="flex items-center justify-center gap-4 p-4 bg-grau-900">
        <div className="text-center">
          <div className=" relative w-32 h-48 rounded overflow-hidden">
            <Image
              src={deal.movieA.poster}
              alt={deal.movieA.title}
              fill
              className="object-cover"
            />
          </div>
          <p className="text-xs text-gray-400">
            {formatTime(deal.movieA.showtime)}
          </p>
        </div>
        <div className="text-2xl font-bold text-red-500">OR</div>

        <div className="text-center">
          <div className=" relative w-32 h-48 rounded overflow-hidden">
            <Image
              src={deal.movieB.poster}
              alt={deal.movieB.title}
              fill
              className="object-cover"
            />
          </div>
          <p className="text-xs text-gray-400">
            {formatTime(deal.movieB.showtime)}
          </p>
        </div>
      </div>

      {/*Card Content */}

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
          {/* <p>⏰ {deal.showTime}</p> */}
          <p>🎫 {deal.seatsLeft} seats left</p>
        </div>

        {/*Countdown Timer */}

        <div className="mb-4">
          <Countdown expiresAt={String(deal.expiresAt)} />
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
