import { CreativeFooter } from "@/components/shared/Footer";
import { Navbar } from "@/components/shared/Navbar";
import { Outlet } from "react-router";

export default function MainLayout() {
  return (
    <div className="flex flex-col min-h-dvh ">
      <Navbar />
      <main className="flex-1">
        <Outlet />
      </main>
      <CreativeFooter />
    </div>
  );
}
