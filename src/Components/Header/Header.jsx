import { useContext } from "react";
import { SearchContext } from "../../Contexts/SearchContext";
import { Envelope, Notification, ThreeDotBar } from "../Icons/HeaderIcons";

export default function Header() {
  const { searchTerm, setSearchTerm } = useContext(SearchContext);

  return (
    <header className="flex items-center justify-between bg-gray-800 p-4">
      <button className="lg:hidden">
        <ThreeDotBar />
      </button>
      <div className="mx-4 flex-1">
        <input
          type="text"
          placeholder="Search here"
          className="w-full max-w-xl rounded-full bg-gray-700 px-4 py-2 text-white focus:outline-none"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      <div className="flex items-center">
        <button className="relative mr-4">
          <Notification />
          <span className="absolute right-0 top-0 h-2 w-2 rounded-full bg-red-500"></span>
        </button>
        <button className="relative mr-4">
          <Envelope />
          <span className="absolute right-0 top-0 h-2 w-2 rounded-full bg-red-500"></span>
        </button>
      </div>
    </header>
  );
}
