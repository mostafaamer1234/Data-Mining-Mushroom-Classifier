import MushroomLogo from "../assets/mushroom_logo.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="w-full max-w-5xl mx-auto px-4">
      <div className="flex items-center justify-between bg-white border border-gray-200 px-5 py-2.5 rounded-full shadow-sm">
        
        <Link to="/">
          <img
            src={MushroomLogo}
            alt="Mushroom Logo"
            className="h-9 w-auto cursor-pointer"
          />
        </Link>

        <ul className="flex items-center gap-4">
          <li>
            <Link
              to="/edible"
              className="font-patua text-sm text-gray-600 px-4 py-2 rounded-full transition-colors hover:text-red-500 hover:shadow-[0_0_8px_#FF0000]"
            >
              Edible
            </Link>
          </li>
          <li>
            <Link
              to="/poisonous"
              className="font-patua text-sm text-gray-600 px-4 py-2 rounded-full transition-colors hover:text-red-500 hover:shadow-[0_0_8px_#FF0000]"
            >
              Poisonous
            </Link>
          </li>
        </ul>

      </div>
    </nav>
  );
};

export default Navbar;