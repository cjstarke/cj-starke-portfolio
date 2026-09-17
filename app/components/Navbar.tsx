"use client";

import { useRef, useState } from "react";
import { gsap, useGSAP } from "../utils/gsap";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Work", href: "#work" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const headerRef = useRef<HTMLElement | null>(null);
  const nameRef = useRef<HTMLAnchorElement | null>(null);
  const squareRef = useRef<HTMLSpanElement | null>(null);

  useGSAP(
    () => {
      const heroHeading = document.getElementById("hero-heading");
      if (!heroHeading || !squareRef.current || !nameRef.current) return;

      const headerHeight = headerRef.current?.offsetHeight ?? 0;

      // Initial state: name (and square inside it) hidden, square parked
      // 100px to the left, ready to roll in once the fade finishes.
      gsap.set(nameRef.current, { opacity: 0, pointerEvents: "none" });
      gsap.set(squareRef.current, { x: -100, rotation: -360 });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: heroHeading,
          start: `bottom top+=${headerHeight}`,
          end: "+=550",
          scrub: 1,
        },
      });

      // 1. Fade the name (and square) in first, scrubbed to scroll
      //    position rather than played on a timer.
      tl.to(nameRef.current, {
        opacity: 1,
        pointerEvents: "auto",
        duration: 0.1,
        ease: "power1.out",
      });

      // 2. Only once the fade portion of the scroll range has completed
      //    does the square roll in from its parked position.
      tl.to(squareRef.current, {
        x: 0,
        rotation: 0,
        duration: 0.9,
        ease: "power2.out",
      });
    },
    { scope: headerRef, dependencies: [] },
  );

  return (
    <header
      ref={headerRef}
      className="sticky top-0 z-50 w-full border-b border-black bg-sand px-6"
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between py-4">
        <a
          ref={nameRef}
          href="#top"
          className="flex items-center gap-2 text-lg font-semibold tracking-tight opacity-0"
        >
          <span
            ref={squareRef}
            aria-hidden="true"
            className="h-4 w-4 border border-black bg-frameYellow rounded-sm shadow-small mb-1"
          />
          CJ Starke
        </a>

        {/* Desktop nav */}
        <ul className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className=" font-medium uppercase tracking-wide transition-colors hover:text-black/60"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Burger button (mobile only) */}
        <button
          type="button"
          onClick={() => setIsOpen((prev) => !prev)}
          aria-label="Toggle navigation menu"
          aria-expanded={isOpen}
          className="flex flex-col items-center justify-center gap-1.5 md:hidden"
        >
          <span
            className={`block h-0.5 w-6 bg-black transition-transform ${
              isOpen ? "translate-y-2 rotate-45" : ""
            }`}
          />
          <span
            className={`block h-0.5 w-6 bg-black transition-opacity ${
              isOpen ? "opacity-0" : "opacity-100"
            }`}
          />
          <span
            className={`block h-0.5 w-6 bg-black transition-transform ${
              isOpen ? "-translate-y-2 -rotate-45" : ""
            }`}
          />
        </button>
      </nav>

      {/* Mobile menu */}
      {isOpen && (
        <ul className="-mx-6 flex flex-col items-center gap-4 border-t border-black bg-white px-6 py-6 md:hidden">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-sm font-medium uppercase tracking-wide transition-colors hover:text-black/60"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
}
