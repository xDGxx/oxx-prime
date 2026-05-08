import { useEffect, useState } from "react";

export default function useScrollSpy() {
  const [active, setActive] = useState("hero");

  useEffect(() => {
    const sections = [
      "contato",
      "horarios",
      "aulas",
      "planos",
      "sobre",
      "hero",
    ];

    const onScroll = () => {
      for (const section of sections) {
        const el = document.getElementById(section);

        if (el && window.scrollY >= el.offsetTop - 120) {
          setActive(section);
          break;
        }
      }
    };

    window.addEventListener("scroll", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return active;
}