import { createContext, useReducer } from "react";
// import { initialTask } from "../Data/InitialState";
import { dataReducer } from "../Reducer/DataReducer";

export const DataContext = createContext();

export default function DataProvider({ children }) {
  const [state, dispatch] = useReducer(dataReducer, []); // add 'initialtask()' for adding some initial tasks.

  return (
    <DataContext.Provider value={{ state, dispatch }}>
      {children}
    </DataContext.Provider>
  );
}
