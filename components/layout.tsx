import Navbar from "./navbar";
import Footer from "./footer";

const Layout = ({ children }: { children: any }) => (
  <>
    <Navbar />
    <main>{children}</main>
    <Footer />
  </>
);

export default Layout;
