import { TheaterFilter } from "../components/TheaterFilter";
import { generateDeals, getActiveDeals } from "./utils/dealGenerator";
import { sampleTheaters } from "./data/sampleTheaters";

export default function Home() {
  //Generate all possible deals
  const allDeals = generateDeals(sampleTheaters);

  //Filter to only show active deals (within visibility window)
  const activeDeals = getActiveDeals(allDeals);

  console.log("All generated deals:", allDeals);
  console.log("Active deals:", activeDeals);



  return (
    <main className="min-h-screen bg-gray-900 text-white p-8">
      <header className="text-center mb-12">
        <h1 className="text-4xl font-bold text-red-600">FlickFLip </h1>
        <p className="text-xl mt-2">Mystery movie tickets at 50% off!</p>
      </header>

      <section className="max-w-6xl mx-auto">
        

        {activeDeals.length === 0 ? (
          <div className="text-center text-gray-400 py-12">
            <p className="text-xl"> No deals available right now</p>
            <p className="text-sm mt-2">Check back later for new deals!</p>
          </div>
        ) : (
          <TheaterFilter activeDeals={activeDeals}/>
        )}
      </section>
    </main>
  );
}
