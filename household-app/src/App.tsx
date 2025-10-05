import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Report from "./pages/Report";
import NoneMatch from "./pages/NoMatch";
import { AppLayout } from "./components/layout/AppLayout";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<AppLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/report" element={<Report />} />
          <Route path="*" element={<NoneMatch />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
