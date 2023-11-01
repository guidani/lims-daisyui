import CalendarIcon from "@/components/icons/CalendarIcon";
import EnvelopeIcon from "@/components/icons/EnvelopeIcon";
import HouseIcon from "@/components/icons/HouseIcon";
import QuestionIcon from "@/components/icons/QuestionIcon";
import ToolsIcon from "@/components/icons/ToolsIcon";
import Link from "next/link";

export default function NavbarWithDrawer() {
  return (
    <div className="drawer z-10">
      <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col">
        {/* Navbar */}
        <div className="w-full navbar bg-base-300">
          <div className="flex-none lg:hidden">
            <label
              htmlFor="my-drawer-3"
              aria-label="open sidebar"
              className="btn btn-square btn-ghost"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="inline-block w-6 h-6 stroke-current"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            </label>
          </div>
          <div className="flex-1 px-2 mx-2">
            <Link href={"/"}>LIMS</Link>
          </div>
          <div className="flex-none hidden lg:block">
            <ul className="menu menu-horizontal">
              {/* Navbar menu content here */}
              <li>
                <a href="#sobre-nos">Sobre nós</a>
              </li>
              <li>
                <a href="#projetos">Projetos</a>
              </li>
              <li>
                <a href="#eventos">Eventos</a>
              </li>
              <li>
                <a href="#footer">Fale conosco</a>
              </li>
            </ul>
          </div>
        </div>
        {/* Page content here */}
      </div>
      <div className="drawer-side">
        <label
          htmlFor="my-drawer-3"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <ul className="menu p-4 w-80 min-h-full bg-base-200">
          {/* Sidebar content here */}
          <li>
            <a href="/" className="text-2xl">
              <HouseIcon /> LIMS
            </a>
          </li>
          <li>
            <a href="/#sobre-nos" className="text-2xl">
              <QuestionIcon /> Sobre nós
            </a>
          </li>
          <li>
            <a href="projetos" className="text-2xl">
              <ToolsIcon /> Projetos
            </a>
          </li>
          <li>
            <a href="eventos" className="text-2xl">
              <CalendarIcon /> Eventos
            </a>
          </li>
          <li>
            <a href="#footer" className="text-2xl">
              <EnvelopeIcon /> Fale conosco
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
