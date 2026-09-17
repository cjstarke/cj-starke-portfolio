"use client";

import { ReactNode, useEffect, useState } from "react";
import Carousel from "./Carousel";

type ProjectModalProps = {
  title: string;
  logo: ReactNode;
  logoClassName?: string;
  frameColor?: "lime" | "yellow";
  description: string;
  media: string[];
  projectUrl: string;
  githubUrl: string;
  onClose: () => void;
};

const frameColorClasses = {
  lime: "md:bg-frameLime",
  yellow: "md:bg-frameYellow",
};

const buttonHoverClasses = {
  lime: "hover:border-frameLime hover:bg-black hover:text-frameLime",
  yellow: "hover:border-frameYellow hover:bg-black hover:text-frameYellow",
};

const closeButtonClasses = {
  lime: "border-frameLime bg-black text-frameLime hover:border-black hover:bg-transparent hover:text-black",
  yellow:
    "border-frameYellow bg-black text-frameYellow hover:border-black hover:bg-transparent hover:text-black",
};

const TRANSITION_DURATION = 300;

export default function ProjectModal({
  title,
  logo,
  logoClassName = "w-40",
  frameColor = "lime",
  description,
  media,
  projectUrl,
  githubUrl,
  onClose,
}: ProjectModalProps) {
  const [isVisible, setIsVisible] = useState(false);

  const handleClose = () => {
    setIsVisible(false);
    setTimeout(onClose, TRANSITION_DURATION);
  };

  useEffect(() => {
    const frame = requestAnimationFrame(() => setIsVisible(true));

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        handleClose();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      cancelAnimationFrame(frame);
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center bg-black/70 px-6 transition-opacity duration-300 ease-in-out ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
      onClick={handleClose}
    >
      <div
        className={`w-full max-w-2xl transition-all duration-300 ease-in-out ${
          isVisible ? "scale-100 opacity-100" : "scale-95 opacity-0"
        }`}
        onClick={(event) => event.stopPropagation()}
      >
        <div
          role="dialog"
          aria-label={title}
          className="max-h-[85vh] overflow-y-auto rounded-sm border border-black bg-white p-8"
        >
          <div className={logoClassName}>{logo}</div>

          <div
            className={`mt-6 rounded-sm border border-black shadow-frame md:p-frame ${frameColorClasses[frameColor]}`}
          >
            <Carousel media={media} frameColor={frameColor} />
          </div>

          <p className="mt-6 text-sm leading-relaxed">
            {description}
          </p>

          <div className="mt-8 flex flex-nowrap justify-end gap-2 md:gap-3">
            <a
              href={projectUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={`rounded-sm border border-black px-3 py-1.5 text-xs font-medium uppercase tracking-wide transition-colors md:px-4 md:py-2 md:text-sm ${buttonHoverClasses[frameColor]}`}
            >
              <span className="md:hidden">Project</span>
              <span className="hidden md:inline">See Project</span>
            </a>
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={`rounded-sm border border-black px-3 py-1.5 text-xs font-medium uppercase tracking-wide transition-colors md:px-4 md:py-2 md:text-sm ${buttonHoverClasses[frameColor]}`}
            >
              GitHub
            </a>
            <button
              type="button"
              onClick={handleClose}
              className={`rounded-sm border px-3 py-1.5 text-xs font-medium uppercase tracking-wide transition-colors md:px-4 md:py-2 md:text-sm ${closeButtonClasses[frameColor]}`}
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
