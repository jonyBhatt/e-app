import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { BrowserRouter, Route, Routes } from "react-router";
import { Login } from "./pages/LoginPage.tsx";
import { PeopleSearchPage } from "./pages/PeopleSearch.tsx";
import MainLayout from "./layouts/MainLayout.tsx";
import { SlipPage } from "./pages/SlipPage.tsx";
import { PWARequirement } from "./components/PWARequirement.tsx";
import ProtectedRoute from "./lib/ProtectedRoute.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <PWARequirement>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />

          <Route element={<ProtectedRoute />}>
            <Route element={<MainLayout />}>
              <Route path="/" element={<App />} />
              <Route path="/search" element={<PeopleSearchPage />} />
              <Route path="/slip" element={<SlipPage />} />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </PWARequirement>
  </StrictMode>,
);
