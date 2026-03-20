import { Link } from "react-router-dom";

const edibleMushrooms = [
  // { id, name, scientificName, habitat, season, description, imageUrl }
];

function MushroomCard({ mushroom }) {
  return (
    <div className="bg-white rounded-2xl shadow-sm hover:shadow-md transition overflow-hidden flex flex-col">
      <div className="h-48 bg-gray-100 flex items-center justify-center overflow-hidden">
        {mushroom.imageUrl ? (
          <img
            src={mushroom.imageUrl}
            alt={mushroom.name}
            className="w-full h-full object-cover"
          />
        ) : (
          <span className="text-5xl">🍄</span>
        )}
      </div>
      <div className="p-5 flex flex-col flex-1">
        <div className="flex items-start justify-between mb-1">
          <h3 className="font-patua text-lg font-semibold text-gray-900 leading-tight">
            {mushroom.name}
          </h3>
          <span className="ml-2 mt-0.5 shrink-0 px-2 py-0.5 text-xs rounded-full bg-green-100 text-green-700 font-medium">
            Edible
          </span>
        </div>
        {mushroom.scientificName && (
          <p className="text-xs text-gray-400 italic mb-3">
            {mushroom.scientificName}
          </p>
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
              {edibleMushrooms.length}
            </span>{" "}
            species listed
          </span>
          <span className="hidden md:inline text-gray-300">|</span>
          <span>Classified using Data Mining</span>
          <span className="hidden md:inline text-gray-300">|</span>
          <Link to="/poisonous" className="text-red-500 hover:underline font-medium">
            View Poisonous →
          </Link>
        </div>
      </div>

      <main className="flex-1 max-w-5xl mx-auto px-6 py-12 w-full">
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
          {edibleMushrooms.length > 0
            ? edibleMushrooms.map((m) => (
                <MushroomCard key={m.id} mushroom={m} />
              ))
            : <EmptyState />}
        </div>
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