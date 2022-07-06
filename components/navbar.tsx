const navLinks = [
  {
    name: "Repositories",
    href: "https://github.com/devkevbot?tab=repositories",
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/feed/",
  },
];

const Navbar = () => (
  <nav className="border-b-2 border-white bg-slate-900 p-4 font-semibold uppercase text-white">
    <ul className="flex justify-center gap-16">
      {navLinks.map(link => (
        <li key={link.name}>
          <a href={link.href} target="_blank" rel="noreferrer">
            {link.name}
          </a>
        </li>
      ))}
    </ul>
  </nav>
);

export default Navbar;
