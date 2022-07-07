import Header from "./header";
import Footer from "./footer";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Layout = ({ children }: { children: any }) => (
  <>
    <Header />
    <main>{children}</main>
    <Footer />
  </>
);

export default Layout;
