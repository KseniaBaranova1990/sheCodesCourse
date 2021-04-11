import React from "react";
import "./App.css";
import School from "./School.js";

const studentsGrades = [
  { name: "Naama", grade: "90", id: 0 },
  { name: "David", grade: "80", id: 1 },
  { name: "Lior", grade: "95", id: 2 },
  { name: "Yaniv", grade: "100", id: 3 },
];

function App() {
  return <School school={studentsGrades} />;
}

export default App;
