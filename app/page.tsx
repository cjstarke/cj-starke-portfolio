import WorkSection from "./components/WorkSection";
import ContactSection from "./components/ContactSection";

const skills = [
  "React",
  "Next.js",
  "TypeScript",
  "JavaScript",
  "HTML",
  "CSS",
  "Tailwind CSS",
  "Playwright",
  "React Admin",
  "Node.js",
  "Ruby on Rails",
  "Strapi CMS",
  "GraphQL",
  "Spring Boot",
  "Java",
  "MariaDB",
  "MongoDB",
  "PostgreSQL",
  "MySQL",
  "AWS",
];

export default function Home() {
  return (
    <div id="top" className="flex flex-1 flex-col">
      <section
        id="about"
        className="flex min-h-screen flex-col justify-center border-b border-black px-6 py-24"
      >
        <div className="mx-auto flex w-full max-w-lg md:max-w-6xl flex-col-reverse items-center gap-12 md:flex-row md:items-start md:justify-between">
          <div className="flex flex-col md:max-w-2xl">
            <p className="text-sm lg:text-base font-medium uppercase tracking-wide">
              Software Engineer / Full Stack
            </p>
            <h1
              id="hero-heading"
              className="mt-2 text-6xl lg:text-7xl font-semibold tracking-tight md:text-5xl"
            >
              Hi, I&apos;m CJ Starke
            </h1>
            <p className="mt-6 text-base lg:text-xl leading-relaxed text-pretty">
              I&apos;m a full stack developer with 7 years of experience building
              production web applications. My focus on digital marketing
              informs how I approach user experience and creative problem
              solving. I bring curiosity, care, and a collaborative attitude
              to every role.
            </p>

            <ul className="mt-8 flex flex-row flex-wrap gap-3">
              {skills.map((skill) => (
                <li
                  key={skill}
                  className="rounded-sm border border-black px-3 py-1 text-sm transition-colors hover:bg-black hover:text-white"
                >
                  {skill}
                </li>
              ))}
            </ul>
          </div>

          <div className="shrink-0 rounded-sm border border-black bg-frameLime p-frame shadow-frame">
            <div className="h-48 w-48 overflow-hidden rounded-sm border border-black md:h-72 md:w-72">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/cjstarkeprofilepic.jpg"
                alt="CJ Starke"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>
      <WorkSection />
      <ContactSection />
    </div>
  );
}

