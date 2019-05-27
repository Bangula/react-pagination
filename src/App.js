import React from "react";
import "./App.css";
import "react-table/react-table.css";

import Pagin from "./components/Pagin";
import TableTest from "./components/TableTest";

function App() {
  return (
    <div className="App">
      <Pagin />
      <TableTest />
    </div>
  );
}

export default App;
