import { useState } from "react";
import DataProvider from "../../Contexts/DataContext";
import { Add } from "../Icons/ContentIcons";
import AddTaskModal from "./AddTaskModal";
import TaskList from "./TaskList";

export default function TaskContent() {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [editData, setEditData] = useState(null);

  const handleCloseModal = () => {
    setEditData(null);
    setModalIsOpen(false);
  };

  const handleEditTask = (task) => {
    setEditData(task);
    setModalIsOpen(true);
  };

  return (
    <DataProvider>
      <div className="relative">
        {modalIsOpen && (
          <AddTaskModal onClose={handleCloseModal} editData={editData} />
        )}
        <div className="mx-auto max-w-7xl p-6">
          <div className="mb-6 flex items-center justify-between">
            <h2 className="text-2xl font-bold">Projectify</h2>
            <div className="flex space-x-2">
              <button
                className="flex items-center rounded-md bg-gray-700 px-4 py-2 text-white"
                onClick={() => setModalIsOpen(true)}
              >
                <Add />
                Add
              </button>
            </div>
          </div>

          <div className="-mx-2 mb-6 flex flex-wrap">
            {/* <!-- Todo --> */}
            <TaskList
              background="bg-indigo-600"
              color="text-indigo-500"
              heading="To-Do"
              onEdit={handleEditTask}
            />

            {/* <!-- On Progress --> */}
            <TaskList
              background="bg-yellow-500"
              color="text-yellow-500"
              heading="On Progress"
              onEdit={handleEditTask}
            />

            {/* <!-- Done --> */}
            <TaskList
              background="bg-teal-500"
              color="text-teal-500"
              heading="Done"
              onEdit={handleEditTask}
            />

            {/* <!-- Revised --> */}
            <TaskList
              background="bg-rose-500"
              color="text-rose-500"
              heading="Revise"
              onEdit={handleEditTask}
            />
          </div>
        </div>
      </div>
    </DataProvider>
  );
}
