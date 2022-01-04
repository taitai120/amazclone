import React, { createContext, useContext, useReducer } from "react";

// Data Layer
export const StateContext = createContext();

// Provider
export const StateProvider = ({ reducer, initialState, children }) => (
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>
);

// Get data from here
export const useStateValue = () => useContext(StateContext);
