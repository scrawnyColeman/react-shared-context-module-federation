import React from "react";
import IncrementButton from "remote/IncrementButton";
import DecrementButton from "remote/DecrementButton";
// host must consume it's own remote to ensure both it and the remote are looking at the same context instance
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
