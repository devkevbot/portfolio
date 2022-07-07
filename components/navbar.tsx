import Link from "next/link";
import { useRouter } from "next/router";
import { useRef } from "react";

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

const Navbar = () => {
  const { pathname } = useRouter();
  const navListRef = useRef<HTMLUListElement>(null);

  return (
    <nav className="flex flex-wrap justify-end bg-slate-900 p-4 font-semibold uppercase text-white">
      <button
        className="mb-2 pr-2 text-3xl md:hidden"
        type="button"
        onClick={() => {
          const classes = ["hidden", "flex", "flex-col", "gap-4", "w-full"];
          classes.forEach(property => {
            if (navListRef.current === null) return;
            navListRef.current.classList.toggle(property);
          });
        }}
      >
        &#x2261;
      </button>
      <ul className="hidden md:flex md:gap-4" ref={navListRef}>
        {internalLinks.map(link => (
          <li key={link.name}>
            <Link href={link.href}>
              <button
                className={`mb-2 w-full rounded-2xl border-2 px-4 py-1 hover:border-sky-300 hover:text-sky-300 md:w-auto ${
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
    </nav>
  );
};

export default Navbar;
