"use client";

import { useEffect, useRef, useState } from "react";

type CarouselProps = {
  media: string[];
  frameColor?: "lime" | "yellow";
};

const arrowHoverClasses = {
  lime: "hover:border-frameLime hover:bg-black hover:text-frameLime",
  yellow: "hover:border-frameYellow hover:bg-black hover:text-frameYellow",
};

const isVideo = (src: string) => src.toLowerCase().endsWith(".webm");

export default function Carousel({ media, frameColor = "lime" }: CarouselProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const videoRefs = useRef<Array<HTMLVideoElement | null>>([]);

  useEffect(() => {
    videoRefs.current.forEach((video, index) => {
      if (!video) return;

      if (index === activeIndex) {
        video.currentTime = 0;
        void video.play();
      } else {
        video.pause();
      }
    });
  }, [activeIndex]);

  const goToPrevious = () => {
    setActiveIndex((prev) => (prev === 0 ? media.length - 1 : prev - 1));
  };

  const goToNext = () => {
    setActiveIndex((prev) => (prev === media.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="relative">
      <div className="relative aspect-video w-full overflow-hidden rounded-sm border-0 bg-black/5 md:border md:border-black">
        <div
          className="flex h-full w-full transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${activeIndex * 100}%)` }}
        >
          {media.map((src, index) => (
            <div
              key={src}
              className="flex h-full w-full shrink-0 items-center justify-center"
            >
              {isVideo(src) ? (
                <video
                  ref={(el) => {
                    videoRefs.current[index] = el;
                  }}
                  src={src}
                  className="h-full w-full object-cover"
                  loop
                  muted
                  playsInline
                />
              ) : (
                // eslint-disable-next-line @next/next/no-img-element
                <img src={src} alt="" className="h-full w-full object-cover" />
              )}
            </div>
          ))}
        </div>
      </div>

      {media.length > 1 && (
        <>
          <button
            type="button"
            onClick={goToPrevious}
            aria-label="Previous item"
            className={`absolute left-2 top-1/2 flex h-8 w-8 -translate-y-1/2 cursor-pointer items-center justify-center rounded-sm border border-black bg-white transition-colors ${arrowHoverClasses[frameColor]}`}
          >
            &#8249;
          </button>
          <button
            type="button"
            onClick={goToNext}
            aria-label="Next item"
            className={`absolute right-2 top-1/2 flex h-8 w-8 -translate-y-1/2 cursor-pointer items-center justify-center rounded-sm border border-black bg-white transition-colors ${arrowHoverClasses[frameColor]}`}
          >
            &#8250;
          </button>
        </>
      )}
    </div>
  );
}
