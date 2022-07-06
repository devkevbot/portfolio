const links = [
  {
    name: "Repositories",
    href: "https://github.com/devkevbot?tab=repositories",
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/feed/",
  },
];

const MediaLinks = () => (
  <ul className="flex justify-center gap-16">
    {links.map(link => (
      <li key={link.name}>
        <a href={link.href} target="_blank" rel="noreferrer">
          {link.name}
        </a>
      </li>
    ))}
  </ul>
);

export default MediaLinks;
