import type { NextPage } from "next";
import Link from "next/link";
import ExternalLink from "../components/external-link";

const Home: NextPage = () => (
  <div className="bg-slate-900 py-5 px-10 md:py-10">
    <div className="mx-auto mb-5 max-w-prose text-center md:mb-10">
      <h1 className="mb-2 text-4xl font-bold">Kevin Jerome</h1>
      <p className="text-xl md:text-3xl">Full-stack software developer</p>
    </div>

    <div className="mx-auto grid grid-cols-1 gap-8 sm:grid-cols-2 md:w-3/5 md:gap-16">
      <section>
        <h2 className="mb-2 text-2xl font-bold">I stay curious</h2>
        <p>
          I am up-to-date with the hottest new tech, including React.js,
          Next.js, tRPC, Prisma, Go, Rust, TypeScript, AWS, PostgreSQL, MongoDB
          and more! See what I have cooking on{" "}
          <ExternalLink href="https://github.com/devkevbot" label="GitHub." />
        </p>
      </section>

      <section>
        <h2 className="mb-2 text-2xl font-bold">I bring experience</h2>
        <p>
          From the nitty-gritty of IP networking and microcontrollers to
          complex, scalable software, I have experience in a bit of everything.
          Want to hear more about my story?{" "}
          <Link href="/about">
            <button type="button" className="text-sky-400 hover:text-sky-300">
              Continue reading.
            </button>
          </Link>
        </p>
      </section>

      <section>
        <h2 className="mb-2 text-2xl font-bold">I have the knowledge</h2>
        <p>
          I am university-educated with an undergraduate degree in Computer
          Engineering. From my 2+ years of real-world software experience, I
          have a proven history of getting stuff done.
        </p>
      </section>

      <section>
        <h2 className="mb-2 text-2xl font-bold">I am motivated</h2>
        <p>
          Outside of work, I stay moving and continue to pursue my passions.
          Check out my{" "}
          <Link href="/projects">
            <button type="button" className="text-sky-400 hover:text-sky-300">
              projects
            </button>
          </Link>{" "}
          to see what I am working on.
        </p>
      </section>

      <section>
        <h2 className="mb-2 text-2xl font-bold">I keep an open mind</h2>
        <p>
          I am located in Vancouver, Canada, but I am open to remote work from{" "}
          <em>mostly</em> anywhere! If you&apos;re a recruiter, feel free to
          reach out. Interested?{" "}
          <ExternalLink
            href="https://www.linkedin.com/in/kevinjerome97/"
            label="Let's get in touch."
          />
        </p>
      </section>

      <section>
        <h2 className="mb-2 text-2xl font-bold">I sweat the details</h2>
        <p>
          No detail is too small for me. I care <em>a lot</em> about what I make
          and what I work on. The user experience&mdash;and the developer
          experience&mdash;are my top priorities.
        </p>
      </section>
    </div>
  </div>
);

export default Home;
