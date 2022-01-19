import React from "react";
import { Footer } from "./Footer";
import { Header } from "./Header";

/**
 * @author
 * @function Layout
 **/

export const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
};
