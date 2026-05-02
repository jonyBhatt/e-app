import useAuthStore from "@/store/useAuthStore";
import { Navigate, Outlet } from "react-router";

const ProtectedRoute = () => {
  // const isAuthenticated = !!localStorage.getItem("token"); // or your auth logic

  const isAuthenticated = useAuthStore((state) => state.isAuthenticated);
  return isAuthenticated ? <Outlet /> : <Navigate to="/login" replace />;
};

export default ProtectedRoute;
