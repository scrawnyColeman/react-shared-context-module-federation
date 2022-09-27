import React from "react";

export const CountContext = React.createContext(
  {} as {
    count: number;
    increment: () => void;
    decrement: () => void;
  }
);

export const CountProvider = ({ children }: any) => {
  const [count, setCount] = React.useState<number>(0);

  const increment = React.useCallback(() => {
    setCount((prevState) => prevState + 1);
  }, []);

  const decrement = React.useCallback(() => {
    setCount((prevState) => prevState - 1);
  }, []);

  return (
    <CountContext.Provider value={{ count, increment, decrement }}>
      {children}
    </CountContext.Provider>
  );
};

export const useCounter = () => React.useContext(CountContext);
