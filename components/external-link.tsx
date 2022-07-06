const ExternalLink = ({ href, label }: { href: string; label: string }) => (
  <a
    href={href}
    target="_blank"
    rel="noreferrer"
    className="text-sky-400 hover:text-sky-300"
  >
    {label}
  </a>
);

export default ExternalLink;
