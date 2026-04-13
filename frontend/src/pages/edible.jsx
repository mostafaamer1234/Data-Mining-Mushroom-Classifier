import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getEdible } from "../api";

const PER_PAGE = 12;

function formatMushroomTitle(mushroom) {
  return `${mushroom["cap-color"]} ${mushroom["cap-shape"]} ${mushroom["cap-surface"]} Mushroom`;
}

function getDescription(mushroom) {
  return `Odor: ${mushroom.odor}. Gill color: ${mushroom["gill-color"]}. Spore print: ${mushroom["spore-print-color"]}. Ring type: ${mushroom["ring-type"]}. Habitat: ${mushroom.habitat}.`;
}

function MushroomCard({ mushroom }) {
  const name = formatMushroomTitle(mushroom);

  return (
    <div className="bg-white rounded-2xl shadow-sm hover:shadow-md transition overflow-hidden flex flex-col">
      <div className="h-48 bg-gray-100 flex items-center justify-center overflow-hidden">
        <span className="text-5xl">🍄</span>
      </div>
      <div className="p-5 flex flex-col flex-1">
        <div className="flex items-start justify-between mb-1">
          <h3 className="font-patua text-lg font-semibold text-gray-900 leading-tight">
            {name}
          </h3>
          <span className="ml-2 mt-0.5 shrink-0 px-2 py-0.5 text-xs rounded-full bg-green-100 text-green-700 font-medium">
            Edible
          </span>
        </div>
        <p className="text-xs text-gray-400 italic mb-3">
          Representative dataset ID #{mushroom.example_id}
        </p>
        <div className="mb-3">
          <span className="inline-block px-2 py-0.5 text-xs rounded-md bg-green-50 text-green-700 font-medium border border-green-100 mr-2">
            {mushroom.occurrence_count} matching rows
          </span>
          <span className="inline-block px-2 py-0.5 text-xs rounded-md bg-stone-100 text-stone-700 font-medium border border-stone-200">
            {mushroom.bruises}
          </span>
        </div>
        <p className="text-sm text-gray-600 flex-1 mb-4">
          {getDescription(mushroom)}
        </p>
        <div className="flex flex-wrap gap-3 mt-auto text-xs text-gray-500">
          <span>{mushroom.habitat}</span>
          <span>{mushroom["spore-print-color"]} spores</span>
          <span>{mushroom.population}</span>
        </div>
      </div>
    </div>
  );
}

function EmptyState() {
  return (
    <div className="col-span-full flex flex-col items-center justify-center py-24 text-center">
      <span className="text-7xl mb-6">🍄</span>
      <h3 className="font-patua text-xl font-semibold text-gray-800 mb-2">
        No mushrooms loaded yet
      </h3>
      <p className="text-gray-500 text-sm max-w-xs">
        Edible mushroom data will appear here once the backend populates it.
      </p>
    </div>
  );
}

export default function EdibleMushrooms() {
  const [page, setPage] = useState(1);
  const [payload, setPayload] = useState({ data: [], total: 0, total_pages: 0 });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    let cancelled = false;

    async function loadEdible() {
      setLoading(true);
      setError("");

      try {
        const result = await getEdible(page, PER_PAGE, true);
        if (!cancelled) {
          setPayload(result);
        }
      } catch (err) {
        if (!cancelled) {
          setError(err.message);
        }
      } finally {
        if (!cancelled) {
          setLoading(false);
        }
      }
    }

    loadEdible();
    return () => {
      cancelled = true;
    };
  }, [page]);

  return (
    <div className="bg-white text-gray-900 min-h-screen flex flex-col">

      <section className="max-w-5xl mx-auto px-6 pt-20 pb-12 text-center">
        <span className="inline-block px-3 py-1 rounded-full bg-green-100 text-green-700 text-xs font-semibold uppercase tracking-widest mb-4">
          Safe to Eat
        </span>
        <h1 className="text-4xl md:text-5xl font-bold font-patua mb-4 leading-tight">
          Edible Mushrooms<span className="text-red-500">.</span>
        </h1>
        <p className="text-gray-600 text-lg max-w-2xl mx-auto">
          This page showcases edible mushrooms classified using data mining algorithms. Features such as cap-shape, gill-size, odor, and stalk characteristics are analyzed using Random Forests and Decision Trees to ensure accurate identification.
        </p>
      </section>

      <div className="bg-gray-50 border-y border-gray-100">
        <div className="max-w-5xl mx-auto px-6 py-4 flex flex-wrap gap-6 items-center justify-center md:justify-start text-sm text-gray-600">
          <span>
            <span className="font-semibold text-gray-900 font-patua">
              {payload.total}
            </span>{" "}
            unique edible profiles
          </span>
          <span className="hidden md:inline text-gray-300">|</span>
          <span>{payload.raw_total ?? 0} edible rows mined from the backend dataset</span>
          <span className="hidden md:inline text-gray-300">|</span>
          <Link to="/poisonous" className="text-red-500 hover:underline font-medium">
            View Poisonous →
          </Link>
        </div>
      </div>

      <main className="flex-1 max-w-5xl mx-auto px-6 py-12 w-full">
        {error && (
          <div className="mb-6 rounded-2xl border border-red-200 bg-red-50 px-5 py-4 text-sm text-red-700">
            {error}
          </div>
        )}

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
          {loading ? (
            <div className="col-span-full py-20 text-center text-gray-500">
              Loading edible mushrooms...
            </div>
          ) : payload.data.length > 0
            ? payload.data.map((m) => (
                <MushroomCard key={m.id} mushroom={m} />
              ))
            : <EmptyState />}
        </div>

        {payload.total_pages > 1 && (
          <div className="mt-10 flex items-center justify-center gap-4">
            <button
              type="button"
              onClick={() => setPage((current) => Math.max(1, current - 1))}
              disabled={page === 1 || loading}
              className="rounded-full border border-gray-300 px-5 py-2 text-sm text-gray-700 disabled:cursor-not-allowed disabled:opacity-50"
            >
              Previous
            </button>
            <span className="text-sm text-gray-600">
              Page {page} of {payload.total_pages}
            </span>
            <button
              type="button"
              onClick={() => setPage((current) => Math.min(payload.total_pages, current + 1))}
              disabled={page === payload.total_pages || loading}
              className="rounded-full bg-red-500 px-5 py-2 text-sm font-medium text-white disabled:cursor-not-allowed disabled:opacity-50"
            >
              Next
            </button>
          </div>
        )}
      </main>

      <section className="bg-gray-50 border-t border-gray-100 py-14 text-center">
        <h2 className="text-2xl font-bold font-patua mb-3">
          Unsure About a Mushroom?
        </h2>
        <p className="text-gray-600 mb-6 text-sm max-w-sm mx-auto">
          Use the Mushroom Classifier's data mining-based AI to verify mushrooms and make safe decisions.
        </p>
        <Link
          to="/"
          className="px-8 py-3 bg-red-500 text-white rounded-full font-medium shadow-md hover:bg-red-600 transition"
        >
          Try the Classifier
        </Link>
      </section>

    </div>
  );
}