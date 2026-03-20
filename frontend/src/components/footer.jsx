import MushroomLogo from "../assets/mushroom_logo.png";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-gray-50 px-6 py-10 mt-20">
      
      <div className="max-w-5xl mx-auto flex flex-col items-center gap-6 text-center">

        <div className="flex items-center gap-2">
          <img
            src={MushroomLogo}
            alt="Mushroom Logo"
            className="h-9 w-auto"
          />
          <span className="font-patua text-lg font-bold text-gray-900">
            Mushroom Classifier
          </span>
        </div>

        <ul className="flex items-center gap-6">
          <li>
            <Link
              to="/edible"
              className="font-patua text-sm text-gray-600 hover:text-red-500 transition"
            >
              Edible
            </Link>
          </li>
          <li>
            <Link
              to="/poisonous"
              className="font-patua text-sm text-gray-600 hover:text-red-500 transition"
            >
              Poisonous
            </Link>
          </li>
        </ul>

        <p className="font-patua text-sm text-gray-400">
          © {new Date().getFullYear()} Mushroom Classifier. All rights reserved.
        </p>

      </div>
    </footer>
  );
}

export default Footer;