import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { SideMenuItem } from "./SideMenuItem";
import routes from "../../Constants/routes";
import { Logo } from "../../Design/Logo";

export const SideMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <>
      {/* Always visible top bar with logo and hamburger */}
      <nav className="fixed top-0 left-0 z-50 w-full bg-[#182e6f] border-b border-gray-200">
        <div className="px-3 py-3 flex justify-between items-center">
          <div className="flex w-1/3 items-center">
            {/* Hamburger only on mobile */}
            <button
              onClick={toggleMenu}
              className="inline-flex items-center p-2 rounded-lg text-sm text-white hover:bg-[#242424] hover:cursor-pointer focus:outline-none sm:hidden"
            >
              <span className="sr-only">Open sidebar</span>
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z" />
              </svg>
            </button>
          </div>
          <div className="flex w-1/3 justify-center">
            <button
              onClick={() => navigate(routes.HOME)}
              className="flex opacity-80 mx-auto hover:cursor-pointer hover:opacity-100"
            >
              <Logo variant="normal" />
            </button>
          </div>
          <div className="flex w-1/3" />
        </div>
      </nav>

      {/* Sidebar for mobile only */}
      <aside
        className={`fixed top-0 left-0 z-40 w-[12em] rounded-lg h-full pt-30 transition-transform
          ${isOpen ? "translate-x-0" : "-translate-x-full"}
          bg-[#182e6f] border-r sm:hidden`}
      >
        <div className="h-full px-3 pb-4 overflow-y-auto">
          <ul className="space-y-2 font-medium">
            <SideMenuItem label="Home" toggle={toggleMenu} click={() => navigate(routes.HOME)} />
            <div className="border-b"></div>
            <SideMenuItem label="About" toggle={toggleMenu} click={() => navigate(routes.ABOUT)} />
            <div className="border-b"></div>
            <SideMenuItem label="Reviews" toggle={toggleMenu} click={() => navigate(routes.REVIEWS)} />
            <div className="border-b"></div>
            <SideMenuItem label="Contact" toggle={toggleMenu} click={() => navigate(routes.CONTACT)} />
            <div className="border-b"></div>
          </ul>
        </div>
      </aside>

      {/* Horizontal menu bar for desktop (sm and up) */}
      <div className="hidden sm:flex fixed left-0 w-full h-[8em] pt-15 z-40 bg-[#182e6f] border-b border-gray-200 justify-center"
           style={{ top: "56px" /* adjust if your nav is taller/shorter */ }}>
        <ul className="flex gap-8 py-2 font-medium">
          <SideMenuItem label="Home" click={() => navigate(routes.HOME)} />
          <SideMenuItem label="About" click={() => navigate(routes.ABOUT)} />
          <SideMenuItem label="Reviews" click={() => navigate(routes.REVIEWS)} />
          <SideMenuItem label="Contact" click={() => navigate(routes.CONTACT)} />
        </ul>
      </div>
    </>
  );
};