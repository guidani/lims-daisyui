import Eventos from "@/UI/Eventos";
import Footer from "@/UI/Footer";
import Hero from "@/UI/Hero";
import Projetos from "@/UI/Projetos";
import SobreNos from "@/UI/SobreNos";
import BtnScrollToTop from "@/components/ArrowToTop";

export default function Home() {
  return (
    <main>
      {/* <Navbar /> */}
      {/* <NavbarWithDrawer /> */}
      <BtnScrollToTop />
      <Hero />
      <Projetos />
      <Eventos />
      <SobreNos />
      <Footer />
    </main>
  );
}
