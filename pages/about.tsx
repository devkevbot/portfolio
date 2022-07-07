import type { NextPage } from "next";
import * as React from "react";
import ExternalLink from "../components/external-link";

const TimelineItemTitle = ({
  jobTitle,
  companyName,
}: {
  jobTitle: string;
  companyName: string;
}) => (
  <div className="flex-start flex items-center">
    <div className="-ml-2 mr-3 -mt-2 hidden h-4 w-4 items-center justify-center rounded-full bg-sky-400 md:flex" />
    <h4 className="-mt-3 text-lg font-semibold ">
      {jobTitle} at {companyName}
    </h4>
  </div>
);

const TimelineItemDate = ({ employmentDate }: { employmentDate: string }) => (
  <span className="text-sm">{employmentDate}</span>
);

type ChildProps = {
  children: React.ReactNode;
};

const TimelineItemContent = ({ children }: ChildProps) => (
  <div className="mb-6 pb-6 md:ml-6">{children}</div>
);

const TimelineItemBody = ({ jobDuties }: { jobDuties: string[] }) => (
  <div className="mt-2 mb-4">
    <ul className="ml-4 list-disc">
      {jobDuties.map(duty => (
        <li key={duty}>{duty}</li>
      ))}
    </ul>
  </div>
);

const TimelineItemCTA = ({ href, text }: { href: string; text: string }) => (
  <a
    href={href}
    target="_blank"
    className="inline-block w-full rounded bg-sky-700 px-4 py-1.5 text-center text-xs font-medium uppercase leading-tight text-white shadow-md transition duration-150 ease-in-out hover:bg-sky-600 hover:shadow-lg focus:bg-sky-600 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-sky-800 active:shadow-lg md:w-auto md:text-left"
    rel="noreferrer"
  >
    {text}
  </a>
);

const experienceItems = [
  {
    jobTitle: "Software Engineer",
    companyName: "Battlefy",
    employmentDate: "November 2021 - Present",
    companyWebsite: "https://battlefy.com",
    jobDuties: [
      "Built bespoke full-stack web apps for brands seeking an Esports presence",
      "Contributed to developer tooling used to quickly scaffold web apps",
      "Worked on platform features to attract Esports players",
    ],
  },
  {
    jobTitle: "Software Developer Co-op",
    companyName: "Optigo Networks",
    employmentDate: "May 2020 - August 2021",
    companyWebsite: "https://www.optigo.net/",
    jobDuties: [
      "Constructed fast and reliable web APIs using Go",
      "Utilized HTML, CSS, and JavaScript to create internal web tools",
      "Automated processes using Bash scripting to increase productivity",
    ],
  },
  {
    jobTitle: "Systems Engineer Co-op",
    companyName: "Motorola Solutions (Avigilon)",
    employmentDate: "January 2018 - August 2018",
    companyWebsite: "https://www.avigilon.com/",
    jobDuties: [
      "Carried out extensive testing to establish key technical performance metrics",
      "Translated product requirements into actionable objectives and tests",
      "Authored instructional documents used for assembly of technical products",
    ],
  },
];

const About: NextPage = () => (
  <div className="flex flex-col gap-12 bg-slate-900 py-10 px-10 text-white md:flex-row">
    <div className="mx-auto">
      <h1 className="mb-8 text-2xl font-bold">About me</h1>
      <div className="max-w-prose space-y-4">
        <p>
          I am 24-year-old software developer from{" "}
          <ExternalLink
            href="https://goo.gl/maps/9p4e8HLXBwfhyiBM9"
            label="Vancouver, Canada."
          />
        </p>
        <p>
          I obtained a Computer Engineering degree in August 2021 from{" "}
          <ExternalLink
            href="https://www.sfu.ca/"
            label="Simon Fraser University"
          />{" "}
          and have been working full-time since. During my studies, I formed a
          passion for programming (starting with C++) and eventually found my
          calling in web development.
        </p>
        <p>
          My work experience has allowed me to experience a vast array of
          awesome technologies. From the fundamentals of HTML, CSS, and
          JavaScript to the more advanced tech in{" "}
          <ExternalLink href="https://trpc.io/" label=" tRPC" />
          ,<ExternalLink href="https://nextjs.org/" label="  Next.js" />
          , and <ExternalLink href="https://www.prisma.io/" label="Prisma" />, I
          am always looking for something new to satisfy my curiosity.
        </p>
        <p>
          Outside of work, I have a few key interests. I own a healthy backlog
          of tech, business, and lifestyle books that I <em>should</em> get
          through...well, eventually. I live, breathe, and talk about video
          games and Esports with anyone who will listen. You can also catch me
          obsessively adding tracks to my Spotify playlist so that I never miss
          a new release from my favourite metal artist,{" "}
          <ExternalLink href="https://spiritbox.com/" label="Spiritbox." />
        </p>
        <p>
          You may see me contributing to open source software. Lately, I have
          taken a keen interest in{" "}
          <ExternalLink href="https://create.t3.gg/" label=" create-t3-app" />,
          a promising new way to quickly scaffold web applications based on the
          t3 stack.
        </p>
      </div>
    </div>
    <div className="mx-auto">
      <h1 className="mb-8 text-2xl font-bold">Experience</h1>
      <ol className="md:border-l-2 md:border-sky-400">
        {experienceItems.map(item => (
          <li key={item.companyName}>
            <TimelineItemTitle
              jobTitle={item.jobTitle}
              companyName={item.companyName}
            />
            <TimelineItemContent>
              <TimelineItemDate employmentDate={item.employmentDate} />
              <TimelineItemBody jobDuties={item.jobDuties} />
              <TimelineItemCTA
                href={item.companyWebsite}
                text="Visit company website"
              />
            </TimelineItemContent>
          </li>
        ))}
      </ol>
    </div>
  </div>
);

export default About;
