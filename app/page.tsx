import { DealCard } from "../components/DealCard";
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
          <DealCard
            movieA="Dune: Part Two"
            movieB="Oppenheimer"
            price={250}
            originalPrice={500}
            theater="PVR Phoenix, Hyderabad"
            showTime="7:00 PM"
          />
          <DealCard
            movieA="Barbie"
            movieB="The Batman"
            price={225}
            originalPrice={450}
            theater="INOX GVK One"
            showTime="9:30 PM"
          />
          <DealCard
            movieA="Interstellar"
            movieB="Inception"
            price={200}
            originalPrice={400}
            theater="AMB Cinemas"
            showTime="6:45 PM"
          />
        </div>
      </section>
    </main>
  );
}
