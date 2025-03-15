import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";  // Import Login component
import EmployeeProjectView from "./pages/EmployeeProjectView";  // Import EmployeeProjectView page

function App() {
  return (
    <Router>
      <Routes>
        {/* Default route (Login page) */}
        <Route path="/" element={<Login />} />  

        {/* Route for EmployeeProjectView page */}
        <Route path="/employee-projects" element={<EmployeeProjectView />} />  
      </Routes>
    </Router>
  );
}

export default App;
