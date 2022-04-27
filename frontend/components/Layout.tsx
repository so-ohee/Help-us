import react, { ReactNode } from "react";
import { NextPage } from "next";
import Navbar from "./Navbar";
// import Footer from "./Footer";

type Props = {
  children: ReactNode;
}

const Layout: NextPage = ({children}: Props) => {
  return (
    <div>
      <Navbar />
      <main>{children}</main>
      {/* <Footer /> */}
    </div>
  );
};

export default Layout;

