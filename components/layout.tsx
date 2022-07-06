import Navbar from "./navbar";
import Footer from "./footer";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Layout = ({ children }: { children: any }) => (
  <>
    <Navbar />
    <main>{children}</main>
    <Footer />
  </>
);

export default Layout;
