import type { NextPage } from "next";
import Link from "next/link";

const Home: NextPage = () => (
  <div className="bg-slate-900 py-5 px-10 md:py-10">
    <div className="mx-auto flex flex-col gap-8 md:max-w-prose md:gap-16">
      <div className="max-w-prose self-center text-center">
        <h1 className="mb-2 text-4xl font-bold">Kevin Jerome</h1>
        <p className="text-xl md:text-3xl">Full-stack software developer</p>
      </div>

      <section>
        <h1 className="mb-2 flex items-center gap-2 text-2xl font-bold">
          For the curious
          <svg
            aria-hidden="true"
            focusable="false"
            data-prefix="fas"
            data-icon="brain"
            className="h-7 w-7"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 576 512"
          >
            <path
              fill="currentColor"
              d="M208 0c-29.9 0-54.7 20.5-61.8 48.2-.8 0-1.4-.2-2.2-.2-35.3 0-64 28.7-64 64 0 4.8.6 9.5 1.7 14C52.5 138 32 166.6 32 200c0 12.6 3.2 24.3 8.3 34.9C16.3 248.7 0 274.3 0 304c0 33.3 20.4 61.9 49.4 73.9-.9 4.6-1.4 9.3-1.4 14.1 0 39.8 32.2 72 72 72 4.1 0 8.1-.5 12-1.2 9.6 28.5 36.2 49.2 68 49.2 39.8 0 72-32.2 72-72V64c0-35.3-28.7-64-64-64zm368 304c0-29.7-16.3-55.3-40.3-69.1 5.2-10.6 8.3-22.3 8.3-34.9 0-33.4-20.5-62-49.7-74 1-4.5 1.7-9.2 1.7-14 0-35.3-28.7-64-64-64-.8 0-1.5.2-2.2.2C422.7 20.5 397.9 0 368 0c-35.3 0-64 28.6-64 64v376c0 39.8 32.2 72 72 72 31.8 0 58.4-20.7 68-49.2 3.9.7 7.9 1.2 12 1.2 39.8 0 72-32.2 72-72 0-4.8-.5-9.5-1.4-14.1 29-12 49.4-40.6 49.4-73.9z"
            />
          </svg>
        </h1>
        <p>
          Want to know more about me? Where did I go to school? Where have I
          worked? Find out{" "}
          <Link href="/about">
            <button type="button" className="text-sky-400 hover:text-sky-300">
              more.
            </button>
          </Link>
        </p>
      </section>

      <section>
        <h1 className="mb-2 flex items-center gap-2 text-2xl font-bold">
          Technologies
          <svg
            aria-hidden="true"
            focusable="false"
            data-prefix="fas"
            data-icon="signal"
            className="h-7 w-7"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 640 512"
          >
            <path
              fill="currentColor"
              d="M216 288h-48c-8.84 0-16 7.16-16 16v192c0 8.84 7.16 16 16 16h48c8.84 0 16-7.16 16-16V304c0-8.84-7.16-16-16-16zM88 384H40c-8.84 0-16 7.16-16 16v96c0 8.84 7.16 16 16 16h48c8.84 0 16-7.16 16-16v-96c0-8.84-7.16-16-16-16zm256-192h-48c-8.84 0-16 7.16-16 16v288c0 8.84 7.16 16 16 16h48c8.84 0 16-7.16 16-16V208c0-8.84-7.16-16-16-16zm128-96h-48c-8.84 0-16 7.16-16 16v384c0 8.84 7.16 16 16 16h48c8.84 0 16-7.16 16-16V112c0-8.84-7.16-16-16-16zM600 0h-48c-8.84 0-16 7.16-16 16v480c0 8.84 7.16 16 16 16h48c8.84 0 16-7.16 16-16V16c0-8.84-7.16-16-16-16z"
            />
          </svg>
        </h1>
        <p>
          I am up-to-date with the hottest new tech, including React.js,
          Next.js, tRPC, Prisma, Go, Rust, TypeScript, AWS, PostgreSQL, MongoDB
          and more! Check out my{" "}
          <Link href="/projects">
            <button type="button" className="text-sky-400 hover:text-sky-300">
              projects
            </button>
          </Link>{" "}
          to see what I am working on!
        </p>
      </section>

      <section>
        <h1 className="mb-2 flex items-center gap-2 text-2xl font-bold">
          Experience
          <svg
            aria-hidden="true"
            focusable="false"
            data-prefix="fas"
            data-icon="graduation-cap"
            className="h-8 w-8"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 640 512"
          >
            <path
              fill="currentColor"
              d="M622.34 153.2L343.4 67.5c-15.2-4.67-31.6-4.67-46.79 0L17.66 153.2c-23.54 7.23-23.54 38.36 0 45.59l48.63 14.94c-10.67 13.19-17.23 29.28-17.88 46.9C38.78 266.15 32 276.11 32 288c0 10.78 5.68 19.85 13.86 25.65L20.33 428.53C18.11 438.52 25.71 448 35.94 448h56.11c10.24 0 17.84-9.48 15.62-19.47L82.14 313.65C90.32 307.85 96 298.78 96 288c0-11.57-6.47-21.25-15.66-26.87.76-15.02 8.44-28.3 20.69-36.72L296.6 284.5c9.06 2.78 26.44 6.25 46.79 0l278.95-85.7c23.55-7.24 23.55-38.36 0-45.6zM352.79 315.09c-28.53 8.76-52.84 3.92-65.59 0l-145.02-44.55L128 384c0 35.35 85.96 64 192 64s192-28.65 192-64l-14.18-113.47-145.03 44.56z"
            />
          </svg>
        </h1>
        <p>
          I am college-educated with a degree in Computer Engineering and 2+
          years of software work experience. I have a proven history of getting
          things done.
          <Link href="/contact">
            <button type="button" className="text-sky-400 hover:text-sky-300">
              Let&apos;s get in touch
            </button>
          </Link>{" "}
          and see what we can create.
        </p>
      </section>
    </div>
  </div>
);

export default Home;
