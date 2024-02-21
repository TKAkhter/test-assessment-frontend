import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import Logo from "../assets/logo.png";

const NavBar = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const handleLogout = () => {
    dispatch({
      type: "CLEAR_TOKEN",
    });
    history.push("/login");
  };

  return (
    <header className="container mx-auto flex justify-between items-center p-5">
      <div className="text-3xl font-bold">
        <img className="w-[150px]" src={Logo} alt="Banner" />
      </div>
      <nav className="flex gap-8">
        <a href="!#" className="text-lg hover:text-gray-300">
          Movies
        </a>
        <a href="!#" className="text-lg hover:text-gray-300">
          TV Shows
        </a>
        <a href="!#" className="text-lg hover:text-gray-300">
          Series
        </a>
        <a href="!#" className="text-lg hover:text-gray-300">
          More
        </a>
      </nav>
      <div className="flex gap-3">
        <button className="bg-gray-800 hover:bg-gray-700 text-white font-semibold py-2 px-4 border border-gray-700 rounded">
          EN
        </button>

        <button className="bg-red-600 text-white px-4 py-2 rounded" onClick={handleLogout}>
          Logout
        </button>
      </div>
    </header>
  );
};

export default NavBar;
