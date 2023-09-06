import React from "react";
import "./App.css";
import { Visitor } from "./components";

const App: React.FC = () => {
  return (
    <div className="flex flex-col lg:flex-row w-full h-screen gap-2 overflow-hidden text-xl">
      <Visitor />
    </div>
  );
};

export default App;
