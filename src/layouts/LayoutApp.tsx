import Navbar from "@/components/navigation/Index";
import dynamic from "next/dynamic";

function LayoutApp({ children }: any) {
  return (
    <div className="bg-base">
      <Navbar />
      <main>{children}</main>
    </div>
  );
}

export default LayoutApp;
