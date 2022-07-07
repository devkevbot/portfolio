import { InferGetStaticPropsType } from "next";
import ExternalLink from "../components/external-link";

interface GitHubRepository {
  id: number;
  name: string;
  language: string;
  description: number;
  html_url: string;
  topics: string[];
  languageColor: string;
}

const languageToColor = new Map([
  ["Rust", "#dea584"],
  ["TypeScript", "#2b7489"],
]);

export async function getStaticProps() {
  const targetRepositories = [
    "devkevbot",
    "next-ts-template",
    "rust-cli-template",
    "png-msg",
    "calorie-counter",
  ];

  const repositories: GitHubRepository[] = await Promise.all(
    targetRepositories.map(async repository =>
      (
        await fetch(`https://api.github.com/repos/devkevbot/${repository}`)
      ).json(),
    ),
  );

  return {
    props: {
      repositories,
    },
    revalidate: 60 * 60,
  };
}

const Projects = ({
  repositories,
}: InferGetStaticPropsType<typeof getStaticProps>) => (
  <div className="bg-slate-900 py-10 px-10 text-white">
    <h1 className="mb-8 text-center text-2xl font-bold">Recent projects</h1>
    <ul className="mx-auto flex w-full flex-col items-center gap-8 md:w-1/2">
      {repositories.map(repository => (
        <div
          key={repository.name}
          className="flex w-full flex-col gap-4 rounded-2xl bg-slate-800 px-8 py-4"
        >
          <span className="text-xl font-bold">
            <ExternalLink href={repository.html_url} label={repository.name} />
          </span>
          <span>{repository.description}</span>
          <div className="hidden flex-wrap gap-2 md:flex">
            {repository.topics.map(topic => (
              <span
                key={topic}
                className="rounded-2xl bg-blue-900 px-4 py-1 text-sky-300"
              >
                {topic}
              </span>
            ))}
          </div>
          {repository.language && (
            <div className="flex items-center gap-2">
              <span
                className="mt-1 h-4 w-4 rounded-full"
                style={{
                  backgroundColor:
                    languageToColor.get(repository.language) ?? "#FFF",
                }}
              />
              <span>{repository.language}</span>
            </div>
          )}
        </div>
      ))}
    </ul>
  </div>
);

export default Projects;
