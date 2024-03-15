import React from "react";
import dynamic from "next/dynamic";
const Navbar = dynamic(() => import("@/components/navigation/Index"));

function LayoutApp({ children }: any) {
  return (
    <div className="bg-base overflow-hidden">
      <Navbar />
      <main>{children}</main>
    </div>
  );
}

export default LayoutApp;
