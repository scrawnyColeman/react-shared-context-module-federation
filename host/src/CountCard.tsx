import React from "react";
import IncrementButton from "remote/IncrementButton";
import DecrementButton from "remote/DecrementButton";
import { CountProvider, useCounter } from "host/context";

const CountCard = () => {
  // host app is consuming the count value but not making use of the increment function
  const { count } = useCounter();

  return (
    <div>
      <IncrementButton />
      <DecrementButton />
      Count: {count}
    </div>
  );
};

const WrappedCountCard = () => {
  return (
    <CountProvider>
      <CountCard />
    </CountProvider>
  );
};
export default WrappedCountCard;
