import { useContext, useState } from "react";
import { Bounce, toast } from "react-toastify";
import { DataContext } from "../../Contexts/DataContext";
import { SearchContext } from "../../Contexts/SearchContext";
import { Sort } from "../Icons/ContentIcons";
import SingleTaskCard from "./SingleTaskCard";

export default function TaskList({ background, color, heading, onEdit }) {
  const { state, dispatch } = useContext(DataContext);
  const { searchTerm } = useContext(SearchContext);
  const [isSort, setIsSort] = useState(false);

  const handleDelete = (itemId) => {
    if (confirm("Are You Sure to Delete this item?")) {
      dispatch({ type: "DELETE_TASK", payload: { id: itemId } });
      toast.success("Successfully deleted the Task", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        transition: Bounce,
      });
    }
  };

  const handleToggleSort = () => {
    setIsSort(!isSort);
  };

  let searchFilteredItems = state.filter(
    (item) =>
      searchTerm.length === 0 ||
      item.taskName.toLowerCase().includes(searchTerm.toLowerCase())
  );

  let categoryFilteredItems = searchFilteredItems.filter(
    (item) => item.category.toLowerCase() === heading.toLowerCase()
  );

  let sortedItem = categoryFilteredItems
    .slice()
    .sort((a, b) =>
      isSort
        ? new Date(a.dueDate).getTime() - new Date(b.dueDate).getTime()
        : new Date(b.dueDate).getTime() - new Date(a.dueDate).getTime()
    );

  return (
    <div className="mb-4 w-full px-2 sm:w-1/2 md:w-1/4">
      <div className={`rounded-lg ${background} p-4`}>
        <div className="mb-2 flex items-center justify-between">
          <h3 className="text-lg font-semibold">
            {heading} ({categoryFilteredItems.length})
          </h3>
          <button onClick={handleToggleSort}>
            <Sort />
          </button>
        </div>

        {categoryFilteredItems.length === 0 ? (
          <p className="text-lg text-center mt-3">Task List is empty!</p>
        ) : (
          sortedItem.map((item) => (
            <SingleTaskCard
              key={item.id}
              color={color}
              heading={item.taskName}
              description={item.description}
              date={item.dueDate}
              onDelete={() => handleDelete(item.id)}
              onEdit={() => onEdit(item)}
            />
          ))
        )}
      </div>
    </div>
  );
}
