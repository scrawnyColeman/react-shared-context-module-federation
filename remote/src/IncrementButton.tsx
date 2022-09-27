import React from "react";
import { useCounter } from "host/context";

const IncrementButton = () => {
  // remote app is doing the increment on the host's count
  const { increment } = useCounter();

  return <button onClick={increment}>Increment</button>;
};

export default IncrementButton;
