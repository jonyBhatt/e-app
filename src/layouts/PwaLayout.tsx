import PwaNavbar from "@/components/pwa/PwaNavbar";
import { Outlet } from "react-router";

function PwaLayout() {
  return (
    <div className="flex flex-col min-h-svh">
      <PwaNavbar />
      <main className="flex-1">
        <Outlet />
      </main>
    </div>
  );
}
export default PwaLayout;
