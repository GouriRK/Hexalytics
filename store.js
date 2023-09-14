import { createStore } from "redux";

// Define the initial state with an empty array of data
const initialState = {
  tableData: [],
};

// Define a reducer function to update the state
const tableReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_ROW":
      return {
        ...state,
        tableData: [...state.tableData, action.payload],
      };
    default:
      return state;
  }
};

// Create the Redux store
const store = createStore(tableReducer);

export default store;
