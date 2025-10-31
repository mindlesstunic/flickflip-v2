import { DealCard } from "../components/DealCard";
import {generateDeals, getActiveDeals} from "./utils/dealGenerator"
//import { deals } from "../app/data/deals";
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
        <h2 className="text-2xl font-bold mb-6"> Available Mystery Deals</h2>

        {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {deals.map((deal) => (
            <DealCard key={deal.id} deal={deal} />
          ))}
        </div> */}
        {activeDeals.length===0 ? (
          <div className="text-center text-gray-400 py-12">
            <p className="text-xl"> No deals available right now</p>
            <p className="text-sm mt-2">Check back later for new deals!</p>
          </div>
        ): ( <div className="grid grid-cols-1 md:grid-cols-2 lg:grod-cols-3 gap-6" >
          {activeDeals.map((deal)=>(
            <DealCard key={deal.id} deal={deal}/>
          ))}
        </div> )}
      </section>
    </main>
  );
}
