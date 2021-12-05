import authProvider from "./authProvider";

import React, { useContext, createContext } from "react";



export const authContext = createContext(authProvider);

export function ProvideAuth({ children }) {
      return (
        <authContext.Provider value={authProvider}>
          {children}
        </authContext.Provider>
      );
    }

export function useAuth() {
      return useContext(authContext);
    }
  