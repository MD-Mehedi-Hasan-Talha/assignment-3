import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Header from "./Components/Header/Header";
import Sidebar from "./Components/SideBar/Sidebar";
import TaskContent from "./Components/TaskContent/TaskContent";
import SearchProvider from "./Contexts/SearchContext";

export default function App() {
  return (
    <div className="bg-gray-900 text-white">
      <div className="flex h-screen">
        <Sidebar />
        <main className="flex-1 overflow-y-auto overflow-x-hidden">
          <SearchProvider>
            <Header />
            <TaskContent />
          </SearchProvider>
        </main>
        <ToastContainer />
      </div>
    </div>
  );
}
