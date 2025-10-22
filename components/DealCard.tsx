type DealCardProps = {
  movieA: string;
  movieB: string;
  price: number;
  originalPrice: number;
  theater: string;
  showTime: string;
};

export function DealCard({
  movieA,
  movieB,
  price,
  originalPrice,
  theater,
  showTime,
}: DealCardProps) {
  return (
    <div className="bg-gray-800 rounded-lg p-6 shadow-lg hover:shadow-red-500/20 transition-shadow">
      <h3 className="text-xl font-bold text-red-500 mb-3"> Mystery Deal</h3>
      <p className="text-gray-300 mb-4 text-center">
        {movieA} <span className="text-red-500 font-bold">OR</span> {movieB}
      </p>

      <div className="flex items-center justify-center gap-3 mb-3">
        <span className="text-gray-500 line-through">{originalPrice}</span>
        <span className=" text-3xl gont-bold text red-600"> ₹{price}</span>
      </div>
      <div className="text-sm text-gray-400 mb-4">
        <p>🎭 {theater}</p>
        <p>⏰ {showTime}</p>
      </div>

      <button className="w-full bg-red-600 text-white py-2 rounded-lg hover:bg-red-700 transition-colors">
        Buy Mystery Ticket
      </button>
    </div>
  );
}
