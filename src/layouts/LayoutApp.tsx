import Footer from "@/components/footer/Index";
import Navbar from "@/components/navigation/Index";
import { ClientOnly } from "@/utils/isClient";

function LayoutApp({ children }: any) {
  return (

      <div className="bg-base">
        <ClientOnly>
          <Navbar />
        </ClientOnly>
        <main className="bg-primary ">
          <Footer>{children}</Footer>
        </main>
      </div>
  );
}

export default LayoutApp;
