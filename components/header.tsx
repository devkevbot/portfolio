import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";

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

const DesktopNavItems = ({ pathname }: { pathname: string }) => (
  <ul className="flex gap-4">
    {internalLinks.map(link => (
      <li key={link.name}>
        <Link href={link.href}>
          <button
            className={`mb-2 px-4 py-1 text-lg hover:text-sky-300 ${
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

const DesktopHeader = ({ pathname }: { pathname: string }) => (
  <header className="hidden bg-slate-900 p-4 font-semibold uppercase md:flex md:justify-center">
    <DesktopNavItems pathname={pathname} />
  </header>
);

const MobileNavItems = ({
  pathname,
  onClick,
}: {
  pathname: string;
  onClick: VoidFunction;
}) => (
  <nav className="space-y-8">
    <div className="flex justify-end">
      <button className="pr-2 text-2xl" type="button" onClick={onClick}>
        &#10006;
      </button>
    </div>
    <ul className="flex flex-col items-center gap-8">
      {internalLinks.map(link => (
        <li key={link.name}>
          <Link href={link.href}>
            <button
              onClick={onClick}
              className={`mb-2 px-4 text-3xl hover:text-sky-300 ${
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

const MobileHeader = ({ pathname }: { pathname: string }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="md:hidden">
      <header className="flex justify-end bg-slate-900 p-4 font-semibold uppercase">
        <button
          className="pr-2 text-4xl"
          type="button"
          onClick={() => setMenuOpen(true)}
        >
          &#x2261;
        </button>
      </header>
      <nav
        className={`fixed top-0 left-0 z-10 h-screen w-full transform bg-slate-900 bg-opacity-100 p-10 transition-all delay-100 duration-300 ${
          menuOpen ? "translate-x-0 opacity-100" : "-translate-x-full opacity-0"
        }`}
      >
        <MobileNavItems
          pathname={pathname}
          onClick={() => setMenuOpen(false)}
        />
      </nav>
    </div>
  );
};

const Header = () => {
  const { pathname } = useRouter();

  return (
    <>
      <DesktopHeader pathname={pathname} />
      <MobileHeader pathname={pathname} />
    </>
  );
};

export default Header;
