import "./App.css";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import PostsManagement from "./pages/PostsManagement";
import { useEffect } from "react";
import SettingPage from "./pages/SettingPage.jsx";

function App() {
  const href = window.location.pathname;

  useEffect(() => {
    if (href === "/") {
      <Navigate to={"/dashboard"} />;
    }
  }, [href]);

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Dashboard />} />
          <Route exact path="dashboard/*" element={<Dashboard />} />
          <Route exact path="/post-management" element={<PostsManagement />} />
          <Route exact path="/setting" element={<SettingPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
