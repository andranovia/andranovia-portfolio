import Footer from "@/components/footer/Index";
import Navbar from "@/components/navigation/Index";

function LayoutApp({ children }: any) {
  return (
    <div className="bg-base">
      <Navbar />
      <main className="bg-primary ">
        <Footer>{children}</Footer>
      </main>
    </div>
  );
}

export default LayoutApp;
