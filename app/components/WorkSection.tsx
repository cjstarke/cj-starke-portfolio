"use client";

import { useState } from "react";
import WorkItem from "./WorkItem";
import ProjectModal from "./ProjectModal";
import ConvergeLogoPink from "./ConvergeLogoPink";
import TGGSLogo from "./TGGSLogo";

const projects = [
  {
    id: "project-one",
    title: "Marketing Animations",
    logo: <ConvergeLogoPink />,
    imageUrl:
      "https://converge-strapi-prod.s3.amazonaws.com/convergeog_03fb18914a.webp",
    description:
      "This project is a marketing company's website template, built to showcase cool, highly interactive animations and visual effects. It combines modern React/Next.js patterns with animation and 3D libraries to demonstrate what's possible in a marketing/landing-page context",
    media: [
      "https://converge-strapi-prod.s3.us-east-1.amazonaws.com/performance_e6e20b8e21.webm",
      "https://converge-strapi-prod.s3.us-east-1.amazonaws.com/venndiagram_4a5ab32d06.webm",
      "https://converge-strapi-prod.s3.us-east-1.amazonaws.com/ourwork_6bddbcff5e.webm",
    ],
    projectUrl: "https://www.convergemarketing.com/",
    githubUrl: "https://github.com/cjstarke/marketing-animations",
  },
  {
    id: "project-two",
    title: "Medical Tort",
    frameColor: "yellow" as const,
    logoClassName: "w-56",
    logo: (
      // eslint-disable-next-line @next/next/no-img-element
      <img
        src="https://converge-strapi-prod.s3.us-east-1.amazonaws.com/consumerlifelinelogo_b5e531fc82.webp"
        alt="Consumer Lifeline logo"
        className="w-full"
      />
    ),
    imageUrl:
      "https://converge-strapi-prod.s3.us-east-1.amazonaws.com/Slide_4_3_1_17ad5f98ba.jpg",
    description:
      "This project is a React/Next.js app built for a client to accept medical tort leads. Here I built a fun mobile animation that makes the first unanswered question of the form appear as a top bar when the user scrolls pass the form:",
    media: [
      "https://converge-strapi-prod.s3.us-east-1.amazonaws.com/clmultiform_d6d3dc3a38.webm",
      "https://converge-strapi-prod.s3.us-east-1.amazonaws.com/clform_39669fee8d.webm",
      "https://converge-strapi-prod.s3.us-east-1.amazonaws.com/thankyou_5d72d1c555.webp",
    ],
    projectUrl: "https://www.consumerlifeline.com/herniamesh5/",
    githubUrl: "https://github.com/cjstarke/medical-tort-mobile-form",
  },
  {
    id: "project-three",
    title: "Home Services",
    logoClassName: "w-56",
    logo: <TGGSLogo />,
    imageUrl:
      "https://strapi-dev-1.s3.us-west-2.amazonaws.com/leaffilter_21ac9f1024.webp",
    description:
      "This project is a React/Next.js app built for a client to accept home service leads. It features a multi-step form where each step has a pretty interesting design.",
    media: [
      "https://converge-strapi-prod.s3.us-east-1.amazonaws.com/tggsmulti_5a7ded563a.webm",
      "https://converge-strapi-prod.s3.us-east-1.amazonaws.com/map_e309ec6075.webp",
      "https://converge-strapi-prod.s3.us-east-1.amazonaws.com/carousel_7e4e2f053e.webp",
    ],
    projectUrl: "https://www.topgutterguardsystem.com/free-estimate/",
    githubUrl: "https://github.com/cjstarke/home-service-multistep-form",
  },
];

export default function WorkSection() {
  const [activeProjectId, setActiveProjectId] = useState<string | null>(null);

  const activeProject = projects.find(
    (project) => project.id === activeProjectId,
  );

  return (
    <section
      id="work"
      className="flex min-h-screen bg-white flex-col justify-center border-b border-black px-6 py-24"
    >
      <div className="mx-auto w-full max-w-lg md:max-w-6xl">
        <h2 className="text-4xl md:text-6xl font-semibold">Selected Work</h2>

        <div className="mt-10 grid grid-cols-1 gap-10 md:grid-cols-3">
          {projects.map((project) => (
            <WorkItem
              key={project.id}
              title={project.title}
              imageUrl={project.imageUrl}
              media={project.media}
              frameColor={project.frameColor}
              onClick={() => setActiveProjectId(project.id)}
            />
          ))}
        </div>
      </div>

      {activeProject && (
        <ProjectModal
          title={activeProject.title}
          logo={activeProject.logo}
          logoClassName={activeProject.logoClassName}
          frameColor={activeProject.frameColor}
          description={activeProject.description}
          media={activeProject.media}
          projectUrl={activeProject.projectUrl}
          githubUrl={activeProject.githubUrl}
          onClose={() => setActiveProjectId(null)}
        />
      )}
    </section>
  );
}
