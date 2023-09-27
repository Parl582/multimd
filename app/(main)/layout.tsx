import Footer from "@/components/footer/Footer";
import Header from "@/components/newHeader/Header";
import LowerMenu from "@/components/lower-Menu/LowerMenu";
import React from "react";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <Header />
      {/* <LowerMenu /> */}
      {children}
      <Footer />
    </div>
  );
};

export default layout;
