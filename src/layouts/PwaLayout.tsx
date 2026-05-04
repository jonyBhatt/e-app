import {PwaNavbar} from "@/components/pwa/PwaNavbar";
import { Outlet } from "react-router";

function PwaLayout() {
  return (
    <div className="flex flex-col min-h-svh">
      <main className="flex-1 bg-blue-700">
        <Outlet />
      </main>
      <PwaNavbar />

    </div>
  );
}
export default PwaLayout;
