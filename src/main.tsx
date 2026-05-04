import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router";
import App from "./App.tsx";
import { PWARequirement } from "./components/PWARequirement.tsx";
import "./index.css";
import PwaLayout from "./layouts/PwaLayout.tsx";
import ProtectedRoute from "./lib/ProtectedRoute.tsx";
import { Login } from "./pages/LoginPage.tsx";
import { PeopleSearchPage } from "./pages/PeopleSearch.tsx";
import { SlipPage } from "./pages/SlipPage.tsx";
import { NotFound } from "./pages/NotFound.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <PWARequirement>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />

          <Route element={<ProtectedRoute />}>
            <Route element={<PwaLayout />}>
              <Route path="/" element={<App />} />
              <Route path="/search" element={<PeopleSearchPage />} />
              <Route path="/slip" element={<SlipPage />} />
            </Route>
          </Route>

          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </PWARequirement>
  </StrictMode>,
);
