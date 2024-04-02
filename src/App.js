import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import ToDo from "./components/todo";
import "./styles/body.css";

function App() {
  return (
    <BrowserRouter>
      <div className="body">
        <Routes>
          <Route path="/" element={<ToDo></ToDo>}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
