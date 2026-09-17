"use client";

type WorkItemProps = {
  title: string;
  imageUrl: string;
  media: string[];
  frameColor?: "lime" | "yellow";
  onClick: () => void;
};

const frameColorClasses = {
  lime: "bg-frameLime",
  yellow: "bg-frameYellow",
};

const isVideo = (src: string) => src.toLowerCase().endsWith(".webm");

export default function WorkItem({
  title,
  media,
  frameColor = "lime",
  onClick,
}: WorkItemProps) {
  const thumbnail = media[0];

  return (
    <button
      type="button"
      onClick={onClick}
      className="group flex cursor-pointer flex-col text-left "
    >
      <div
        className={`${frameColorClasses[frameColor]} rounded-sm border border-black p-frame shadow-frame`}
      >
        <div className="relative aspect-square w-full overflow-hidden rounded-sm border border-black bg-black/5">
          {isVideo(thumbnail) ? (
            <video
              src={thumbnail}
              className="h-full w-full object-cover"
              autoPlay
              loop
              muted
              playsInline
            />
          ) : (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={thumbnail}
              alt={title}
              className="h-full w-full object-cover"
            />
          )}

          {/* Hover overlay */}
          <div className="absolute inset-0 flex items-center justify-center bg-black/0 backdrop-blur-none transition-all duration-300 group-hover:bg-black/50 group-hover:backdrop-blur-sm">
            <span
              className={`${frameColorClasses[frameColor]} rounded-full border border-black px-4 py-2 text-lg font-bold  tracking-wide text-black opacity-0 transition-opacity duration-300 group-hover:opacity-100`}
            >
              View Project
            </span>
          </div>
        </div>
      </div>

      <span className="mt-5 text-xl lg:text-2xl font-medium transition-colors group-hover:text-black/60">
        {title}
      </span>
    </button>
  );
}
