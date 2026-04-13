import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getPoisonous } from "../api";

const PER_PAGE = 12;

function formatMushroomTitle(mushroom) {
  return `${mushroom["cap-color"]} ${mushroom["cap-shape"]} ${mushroom["cap-surface"]} Mushroom`;
}

function getDescription(mushroom) {
  return `Odor: ${mushroom.odor}. Gill size: ${mushroom["gill-size"]}. Gill color: ${mushroom["gill-color"]}. Ring type: ${mushroom["ring-type"]}. Spore print: ${mushroom["spore-print-color"]}. Habitat: ${mushroom.habitat}.`;
}

function MushroomCard({ mushroom }) {
  const name = formatMushroomTitle(mushroom);

  return (
    <div className="bg-white rounded-2xl shadow-sm hover:shadow-md transition overflow-hidden flex flex-col border border-red-50">
      <div className="h-48 bg-gray-100 flex items-center justify-center overflow-hidden relative">
        <span className="text-5xl">☠️</span>

        <div className="absolute top-3 left-3">
          <span className="px-2 py-0.5 text-xs rounded-full bg-red-500 text-white font-semibold shadow">
            ⚠ Toxic
          </span>
        </div>
      </div>
      <div className="p-5 flex flex-col flex-1">
        <div className="flex items-start justify-between mb-1">
          <h3 className="font-patua text-lg font-semibold text-gray-900 leading-tight">
            {name}
          </h3>
        </div>
        <p className="text-xs text-gray-400 italic mb-3">
          Representative dataset ID #{mushroom.example_id}
        </p>
        <div className="mb-3">
          <span className="inline-block px-2 py-0.5 text-xs rounded-md bg-red-50 text-red-600 font-medium border border-red-100 mr-2">
            {mushroom.odor} odor profile
          </span>
          <span className="inline-block px-2 py-0.5 text-xs rounded-md bg-stone-100 text-stone-700 font-medium border border-stone-200">
            {mushroom.occurrence_count} matching rows
          </span>
        </div>
        <p className="text-sm text-gray-600 flex-1 mb-4">
          {getDescription(mushroom)}
        </p>
        <div className="flex flex-wrap gap-3 mt-auto text-xs text-gray-500">
          <span>{mushroom.bruises}</span>
          <span>{mushroom.habitat}</span>
          <span>{mushroom.population}</span>
        </div>
      </div>
    </div>
  );
}

function EmptyState() {
  return (
    <div className="col-span-full flex flex-col items-center justify-center py-24 text-center">
      <span className="text-7xl mb-6">☠️</span>
      <h3 className="font-patua text-xl font-semibold text-gray-800 mb-2">
        No mushrooms loaded yet
      </h3>
      <p className="text-gray-500 text-sm max-w-xs">
        Poisonous mushroom data will appear here once the backend populates it.
      </p>
    </div>
  );
}

export default function PoisonousMushrooms() {
  const [page, setPage] = useState(1);
  const [payload, setPayload] = useState({ data: [], total: 0, total_pages: 0 });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    let cancelled = false;

    async function loadPoisonous() {
      setLoading(true);
      setError("");

      try {
        const result = await getPoisonous(page, PER_PAGE, true);
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

    loadPoisonous();
    return () => {
      cancelled = true;
    };
  }, [page]);

  return (
    <div className="bg-white text-gray-900 min-h-screen flex flex-col">

      <section className="max-w-5xl mx-auto px-6 pt-20 pb-12 text-center">
        <span className="inline-block px-3 py-1 rounded-full bg-red-100 text-red-600 text-xs font-semibold uppercase tracking-widest mb-4">
          Danger
        </span>
        <h1 className="text-4xl md:text-5xl font-bold font-patua mb-4 leading-tight">
          Poisonous Mushrooms<span className="text-red-500">.</span>
        </h1>
        <p className="text-gray-600 text-lg max-w-2xl mx-auto">
          This page lists poisonous mushrooms identified using data mining techniques. Using features like cap-shape, gill-size, odor, and spore print color, our Random Forest and Decision Tree models predict toxicity to help users avoid dangerous mistakes.
        </p>
      </section>

      <div className="max-w-5xl mx-auto px-6 mb-2 w-full">
        <div className="flex items-start gap-3 bg-red-50 border border-red-200 rounded-2xl px-5 py-4">
          <span className="text-red-500 text-xl mt-0.5">⚠️</span>
          <p className="text-sm text-red-700">
            <span className="font-semibold">Never consume a mushroom</span> based solely on appearance. Misidentification can lead to serious health consequences.
          </p>
        </div>
      </div>

      <div className="bg-gray-50 border-y border-gray-100 mt-6">
        <div className="max-w-5xl mx-auto px-6 py-4 flex flex-wrap gap-6 items-center justify-center md:justify-start text-sm text-gray-600">
          <span>
            <span className="font-semibold text-gray-900 font-patua">
              {payload.total}
            </span>{" "}
            unique poisonous profiles
          </span>
          <span className="hidden md:inline text-gray-300">|</span>
          <span>{payload.raw_total ?? 0} poisonous rows mined from the backend dataset</span>
          <span className="hidden md:inline text-gray-300">|</span>
          <Link to="/edible" className="text-green-600 hover:underline font-medium">
            View Edible →
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
              Loading poisonous mushrooms...
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
          Found a Suspicious Mushroom?
        </h2>
        <p className="text-gray-600 mb-6 text-sm max-w-sm mx-auto">
          Upload an image to our Mushroom Classifier AI to receive a real-time classification based on data mining algorithms.
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