import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Report from "./pages/Report";
import NoneMatch from "./pages/NoMatch";
import { AppLayout } from "./components/layout/AppLayout";
import { ThemeProvider } from "@mui/material/styles";
import { theme } from "./theme/theme";
import { CssBaseline } from "@mui/material";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
    <Router>
      <Routes>
        <Route path="/" element={<AppLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/report" element={<Report />} />
          <Route path="*" element={<NoneMatch />} />
        </Route>
      </Routes>
    </Router>
    </ThemeProvider>
  );
}

export default App;
