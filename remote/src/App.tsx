import React from "react";
import { createRoot } from "react-dom/client";
import IncrementButton from "./IncrementButton";
import DecrementButton from "./DecrementButton";

const App = () => (
  <div className="container">
    <h2>Remote</h2>
    <IncrementButton />
    <DecrementButton />
  </div>
);

createRoot(document.getElementById("app")).render(<App />);
