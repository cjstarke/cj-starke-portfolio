import {
  AddressIcon,
  DownloadIcon,
  EmailIcon,
  GitHubIcon,
  LinkedInIcon,
  PhoneIcon,
} from "./icons";

const contactItems = [
  {
    label: "Email",
    value: "cjstarke1@gmail.com",
    href: "mailto:cjstarke1@gmail.com",
    icon: <EmailIcon />,
  },
  {
    label: "Phone",
    value: "(732) 770-5277",
    href: "tel:+7327705277",
    icon: <PhoneIcon />,
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/christopherjstarke",
    href: "https://www.linkedin.com/in/christopherjstarke/",
    icon: <LinkedInIcon />,
  },
  {
    label: "GitHub",
    value: "github.com/cjstarke",
    href: "https://github.com/cjstarke",
    icon: <GitHubIcon />,
  },
];

export default function ContactSection() {
  return (
    <section
      id="contact"
      className="flex min-h-screen flex-col justify-center bg-black px-6 py-24 text-white"
    >
      <div className="mx-auto flex w-full max-w-lg md:max-w-6xl flex-col gap-12 md:flex-row md:justify-between">
        <div className="md:max-w-lg">
          <h2 className="text-4xl md:text-6xl font-semibold">Contact</h2>
          <p className="mt-4 text-xl leading-relaxed text-white/80">
            I&apos;m currently open to new opportunities, remote or in person
            around the Philadelphia / New Jersey area. Reach out through any
            of the channels to the right or download my resume, let&apos;s
            build something great together!
          </p>
        </div>

        <div className="flex flex-col gap-5 md:max-w-xl md:flex-1">
          {contactItems.map((item) =>
            item.href ? (
              <a
                key={item.label}
                href={item.href}
                target={item.href.startsWith("http") ? "_blank" : undefined}
                rel={
                  item.href.startsWith("http")
                    ? "noopener noreferrer"
                    : undefined
                }
                className="group flex items-center gap-4 border-b border-white pb-4"
              >
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-sm border border-white transition-colors group-hover:bg-white group-hover:text-black">
                  {item.icon}
                </span>
                <span className="flex flex-col">
                  <span className="text-base font-medium uppercase tracking-wide text-white/80">
                    {item.label}
                  </span>
                  <span className="text-xl font-medium text-frameYellow">
                    {item.value}
                  </span>
                </span>
              </a>
            ) : (
              <div
                key={item.label}
                className="flex items-center gap-4 border-b border-white pb-4"
              >
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-sm border border-white">
                  {item.icon}
                </span>
                <span className="flex flex-col">
                  <span className="text-base font-medium uppercase tracking-wide text-white/80">
                    {item.label}
                  </span>
                  <span className="text-xl font-medium text-frameYellow">
                    {item.value}
                  </span>
                </span>
              </div>
            )
          )}

          <a
            href="/CJStarkeResume2026.pdf"
            download="CJ_Starke_Resume.pdf"
            className="group flex items-center gap-4 border-b border-white pb-4"
          >
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-sm border border-white transition-colors group-hover:bg-white group-hover:text-black">
              <DownloadIcon />
            </span>
            <span className="flex flex-col">
              <span className="text-base font-medium uppercase tracking-wide text-white/80">
                Resume
              </span>
              <span className="text-xl font-medium text-frameYellow">
                Download
              </span>
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
