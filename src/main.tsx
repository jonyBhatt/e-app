import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { BrowserRouter, Route, Routes } from "react-router";
import { Login } from "./pages/LoginPage.tsx";
import { PeopleSearchPage } from "./pages/PeopleSearch.tsx";
import MainLayout from "./layouts/MainLayout.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<App />} />
          <Route path="/login" element={<Login />} />
          <Route path="/search" element={<PeopleSearchPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
);
