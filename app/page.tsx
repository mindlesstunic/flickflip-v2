import { DealCard } from "../components/DealCard";
import { deals } from "../app/data/deals";

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-900 text-white p-8">
      <header className="text-center mb-12">
        <h1 className="text-4xl font-bold text-red-600">FlickFLip </h1>
        <p className="text-xl mt-2">Mystery movie tickets at 50% off!</p>
      </header>

      <section className="max-w-6xl mx-auto">
        <h2 className="text-2xl font-bold mb-6"> Available Mystery Deals</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {deals.map((deal) => (
            <DealCard key={deal.id} deal={deal} />
          ))}
        </div>
      </section>
    </main>
  );
}
