/* eslint-disable react-refresh/only-export-components */
/* eslint-disable @typescript-eslint/no-empty-function */
import React, { createContext, useContext, useState } from "react";

interface CurrentUser {
  name: string;
  email: string;
  imageUrl: string;
}

interface StateContextValue {
  currentUser: CurrentUser;
  userToken: string | null;
  setCurrentUser: (user: CurrentUser) => void;
  setUserToken: (token: string | null) => void;
}

interface ContextProviderProps {
  children: React.ReactNode;
}

const initialState: StateContextValue = {
  currentUser: {
    name: "",
    email: "",
    imageUrl: "",
  },
  userToken: null,
  setCurrentUser: () => {},
  setUserToken: () => {},
};

const StateContext = createContext<StateContextValue>(initialState);

const ContextProvider = ({ children }: ContextProviderProps) => {
  const [currentUser, setCurrentUser] = useState<CurrentUser>({
    name: 'Tom Cook',
    email: 'tom@example.com',
    imageUrl: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  });
  const [userToken, setUserToken] = useState<string | null>('1234');

  return (
    <StateContext.Provider
      value={{
        currentUser,
        userToken,
        setCurrentUser,
        setUserToken,
      }}
    >
      {children}
    </StateContext.Provider>
  );
};

const useUserStateContext = () => useContext(StateContext);

export { StateContext, ContextProvider, useUserStateContext };
