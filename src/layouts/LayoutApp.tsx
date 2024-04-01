import Navbar from "@/components/navigation/Index";
import dynamic from "next/dynamic";

const Footer = dynamic(() => import("@/components/footer/Index"), {
  ssr: false,
});

function LayoutApp({ children }: any) {
  return (
    <div className="bg-base">
      <Navbar />
      <main className="bg-primary">
        <Footer>{children}</Footer>
      </main>
    </div>
  );
}

export default LayoutApp;
