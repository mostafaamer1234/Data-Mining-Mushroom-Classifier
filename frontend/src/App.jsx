import Navbar from "./components/navbar";
import Footer from "./components/footer";
import MushroomLogo from "./assets/mushroom_logo.png";
import { Routes, Route, Link } from "react-router-dom";
import Edible from "./pages/edible";
import Poisonous from "./pages/poisonous";
import ScrollToTop from "./components/scrolltotop";

function Home() {
  return (
    <div className="bg-white text-gray-900">

      <section className="max-w-5xl mx-auto px-6 pt-20 pb-16 text-center">
        <div className="flex justify-center mb-6">
          <img
            src={MushroomLogo}
            alt="Mushroom Logo"
            className="h-16 w-auto"
          />
        </div>

        <h1 className="text-4xl md:text-5xl font-bold font-patua mb-6 leading-tight">
          Mushroom Classifier: A Data Mining Project
          <span className="text-red-500">.</span>
        </h1>

        <p className="text-gray-600 text-lg max-w-2xl mx-auto mb-8">
          The Mushroom Classifier application predicts whether mushrooms are edible or poisonous using advanced Data Mining techniques such as Random Forest and Decision Trees. 
          Our dataset comes from UC Irvine’s Machine Learning Repository, containing physical features like cap-shape, cap-surface, odor, and more.
        </p>

        <div className="flex justify-center gap-4">
          <Link
            to="/edible"
            className="px-6 py-3 rounded-full bg-red-500 text-white font-medium shadow-md hover:bg-red-600 transition"
          >
            Explore Edible Mushrooms
          </Link>

          <Link
            to="/poisonous"
            className="px-6 py-3 rounded-full border border-gray-300 text-gray-700 font-medium hover:border-red-500 hover:text-red-500 transition"
          >
            Explore Poisonous Mushrooms
          </Link>
        </div>
      </section>

      <section className="bg-gray-50 py-16">
        <div className="max-w-5xl mx-auto px-6 grid md:grid-cols-3 gap-8 text-center">

          <div className="p-6 rounded-2xl bg-white shadow-sm hover:shadow-md transition">
            <h3 className="font-patua text-lg font-semibold mb-2">
              Data Mining Algorithms
            </h3>
            <p className="text-gray-600 text-sm">
              Our application uses Random Forests and Decision Trees to accurately classify mushrooms based on their physical features.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white shadow-sm hover:shadow-md transition">
            <h3 className="font-patua text-lg font-semibold mb-2">
              Real-World Impact
            </h3>
            <p className="text-gray-600 text-sm">
              Correctly identifying poisonous mushrooms is critical. Our system helps prevent dangerous mistakes and ensures safety.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white shadow-sm hover:shadow-md transition">
            <h3 className="font-patua text-lg font-semibold mb-2">
              Easy to Use
            </h3>
            <p className="text-gray-600 text-sm">
              Simply upload an image or input mushroom features, and get an instant classification using our backend API.
            </p>
          </div>

        </div>
      </section>

      <section className="py-20 text-center">
        <h2 className="text-3xl font-bold font-patua mb-4">
          Data Mining for Safer Decisions
        </h2>

        <p className="text-gray-600 mb-8">
          Mushroom Classifier guides users in identifying which mushrooms are safe to eat and which are toxic.
        </p>

        <Link
          to="/edible"
          className="px-8 py-3 bg-red-500 text-white rounded-full font-medium shadow-md hover:bg-red-600 transition"
        >
          Get Started
        </Link>
      </section>
    </div>
  );
}

function App() {
  return (
    <>
      <Navbar />

      <ScrollToTop /> 

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/edible" element={<Edible />} />
        <Route path="/poisonous" element={<Poisonous />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;