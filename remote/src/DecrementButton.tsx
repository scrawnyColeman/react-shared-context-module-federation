import React from "react";
import { useCounter } from "host/context";

const DecrementButton = () => {
  // remote app is doing the decrement on the host's count
  const { decrement } = useCounter();

  return <button onClick={decrement}>Decrement</button>;
};

export default DecrementButton;
