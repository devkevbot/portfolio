import Link from "next/link";
import { useRouter } from "next/router";

const internalLinks = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "About",
    href: "/about",
  },
  {
    name: "Projects",
    href: "/projects",
  },
  {
    name: "Contact",
    href: "/contact",
  },
];

const internalLinkIsActive = (activePathname: string, targetHref: string) =>
  activePathname === targetHref;

const InternalLinks = () => {
  const { pathname } = useRouter();

  return (
    <ul className="flex justify-center gap-16">
      {internalLinks.map(link => (
        <li key={link.name}>
          <Link href={link.href}>
            <button
              className={`rounded-2xl border-2 px-4 py-1 hover:border-sky-300 hover:text-sky-300 ${
                internalLinkIsActive(pathname, link.href)
                  ? "border-sky-400 text-sky-400"
                  : "border-white text-white"
              }`}
              type="button"
            >
              {link.name}
            </button>
          </Link>
        </li>
      ))}
    </ul>
  );
};

const Navbar = () => (
  <nav className="border-b-2 border-white bg-slate-900 p-4 font-semibold uppercase text-white">
    <InternalLinks />
  </nav>
);

export default Navbar;
