import { Link } from "react-router-dom";

const poisonousMushrooms = [
  // { id, name, scientificName, habitat, season, description, toxinType, imageUrl }
];

function MushroomCard({ mushroom }) {
  return (
    <div className="bg-white rounded-2xl shadow-sm hover:shadow-md transition overflow-hidden flex flex-col border border-red-50">
      <div className="h-48 bg-gray-100 flex items-center justify-center overflow-hidden relative">
        {mushroom.imageUrl ? (
          <img
            src={mushroom.imageUrl}
            alt={mushroom.name}
            className="w-full h-full object-cover"
          />
        ) : (
          <span className="text-5xl">☠️</span>
        )}

        <div className="absolute top-3 left-3">
          <span className="px-2 py-0.5 text-xs rounded-full bg-red-500 text-white font-semibold shadow">
            ⚠ Toxic
          </span>
        </div>
      </div>
      <div className="p-5 flex flex-col flex-1">
        <div className="flex items-start justify-between mb-1">
          <h3 className="font-patua text-lg font-semibold text-gray-900 leading-tight">
            {mushroom.name}
          </h3>
        </div>
        {mushroom.scientificName && (
          <p className="text-xs text-gray-400 italic mb-3">
            {mushroom.scientificName}
          </p>
        )}
        {mushroom.toxinType && (
          <div className="mb-3">
            <span className="inline-block px-2 py-0.5 text-xs rounded-md bg-red-50 text-red-600 font-medium border border-red-100">
              {mushroom.toxinType}
            </span>
          </div>
        )}
        {mushroom.description && (
          <p className="text-sm text-gray-600 flex-1 mb-4">
            {mushroom.description}
          </p>
        )}
        <div className="flex gap-3 mt-auto text-xs text-gray-500">
          {mushroom.habitat && (
            <span className="flex items-center gap-1">
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a2 2 0 01-2.828 0l-4.243-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              {mushroom.habitat}
            </span>
          )}
          {mushroom.season && (
            <span className="flex items-center gap-1">
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              {mushroom.season}
            </span>
          )}
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
              {poisonousMushrooms.length}
            </span>{" "}
            species listed
          </span>
          <span className="hidden md:inline text-gray-300">|</span>
          <span>Classified using Data Mining</span>
          <span className="hidden md:inline text-gray-300">|</span>
          <Link to="/edible" className="text-green-600 hover:underline font-medium">
            View Edible →
          </Link>
        </div>
      </div>

      <main className="flex-1 max-w-5xl mx-auto px-6 py-12 w-full">
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
          {poisonousMushrooms.length > 0
            ? poisonousMushrooms.map((m) => (
                <MushroomCard key={m.id} mushroom={m} />
              ))
            : <EmptyState />}
        </div>
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