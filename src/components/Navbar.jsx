import { useState } from "react";
import { navLinks } from "../data/navLinks";
import useScrollSpy from "../hooks/useScrollSpy";
import MobileMenu from "./MobileMenu";

const WHATSAPP_URL =
  "https://wa.me/5511999999999";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const active = useScrollSpy();

  const go = (id) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
    });

    setMenuOpen(false);
  };

  return (
    <>
      <nav className="fixed top-0 z-50 flex h-16 w-full items-center justify-between border-b border-red-500/20 bg-black/95 px-6 backdrop-blur-xl">
        <div
          onClick={() => go("hero")}
          className="title-font cursor-pointer text-3xl tracking-[4px]"
        >
          OXX <span className="text-red-600">PRIME</span>
        </div>

        <div className="hidden items-center gap-1 md:flex">
          {navLinks.map((item) => (
            <button
              key={item.id}
              onClick={() => go(item.id)}
              className={`rounded px-4 py-2 text-sm uppercase tracking-widest transition
              ${
                active === item.id
                  ? "bg-red-600/10 text-red-600"
                  : "text-zinc-400 hover:text-white"
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>

        <a
          href={WHATSAPP_URL}
          target="_blank"
          className="hidden rounded bg-red-600 px-5 py-3 text-sm font-bold uppercase tracking-widest transition hover:bg-red-500 md:block"
        >
          Matricule-se
        </a>

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="flex flex-col gap-1 md:hidden"
        >
          <span className="h-[2px] w-6 bg-white" />
          <span className="h-[2px] w-6 bg-white" />
          <span className="h-[2px] w-6 bg-white" />
        </button>
      </nav>

      <MobileMenu
        menuOpen={menuOpen}
        go={go}
      />
    </>
  );
}