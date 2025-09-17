import { Outlet } from "react-router-dom";
import { Navbar } from "./components/navbar";
import { useEffect, useState } from "react";
import { Sidebar } from "./components/sidebar";
import { useIsMobile } from "./hooks/use-mobile";

export default function App() {
  const isMobile = useIsMobile();
  const [openSidebar, setOpenSidebar] = useState<boolean>(false);

  useEffect(() => {
    if (isMobile) {
      setOpenSidebar(false);
    } else {
      setOpenSidebar(true);
    }
  }, [isMobile]);

  return (
    <div className="min-h-screen flex">
      <Sidebar open={openSidebar} onClose={() => setOpenSidebar(false)} />

      <div
        className={`flex-1 flex flex-col transition-all duration-300 ease-in-out ${
          openSidebar && !isMobile ? "ml-[300px]" : "ml-0"
        }`}
      >
        <Navbar onToggleSidebar={() => setOpenSidebar(!openSidebar)} />

        <main className="flex-1 p-4">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
