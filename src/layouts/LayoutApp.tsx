import React from "react";
import dynamic from "next/dynamic";
const Navbar = dynamic(() => import("@/components/Navbar"));

function LayoutApp({ children }: any) {
  return (
    <>
      
      <main>{children}</main>
    </>
  );
}

export default LayoutApp;
