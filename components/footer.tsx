import MediaLinks from "./media-links";

const Footer = () => (
  <footer className="flex flex-col items-center gap-8 border-t-2 border-white bg-slate-900 p-4 font-semibold uppercase text-white">
    <MediaLinks />
    <span className="normal-case">
      Made by Kevin Jerome &mdash; {new Date().getFullYear()}
    </span>
  </footer>
);

export default Footer;
