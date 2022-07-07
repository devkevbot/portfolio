import Image from "next/image";
import ExternalLink from "../components/external-link";

const Contact = () => (
  <div className="bg-slate-900 py-10 px-10 ">
    <h1 className="mb-8 text-center text-2xl font-bold">Contact</h1>
    <div className="flex flex-col justify-center gap-8 text-xl font-semibold md:flex-row">
      <div className="flex items-center gap-4 bg-slate-800 pr-4">
        <Image
          src="/github-logo.png"
          alt="GitHub logo"
          layout="fixed"
          width="64"
          height="64"
        />
        <ExternalLink href="https://github.com/devkevbot" label="GitHub" />
      </div>
      <div className="flex items-center gap-4 bg-slate-800 pr-4">
        <Image
          src="/linkedin-logo.png"
          alt="LinkedIn logo"
          layout="fixed"
          width="64"
          height="64"
        />
        <ExternalLink
          href="https://www.linkedin.com/in/kevinjerome97/"
          label="LinkedIn"
        />
      </div>
    </div>
    <p className="my-4 text-center">
      The best way to connect with me is to reach out on GitHub or LinkedIn.
    </p>
  </div>
);

export default Contact;
