import React from "react";
import { createRoot } from "react-dom/client";
import CountCard from "./CountCard";

const App = () => (
  <div className="container">
    <h2>Host</h2>
    <CountCard />
  </div>
);

createRoot(document.getElementById("app")).render(<App />);
