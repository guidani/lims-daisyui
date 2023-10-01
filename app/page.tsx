import Eventos from "@/UI/Eventos";
import Footer from "@/UI/Footer";
import Hero from "@/UI/Hero";
import Projetos from "@/UI/Projetos";
import SobreNos from "@/UI/SobreNos";

export default function Home() {
  return (
    <main>
      {/* <Navbar /> */}
      {/* <NavbarWithDrawer /> */}
      <Hero />
      <Projetos />
      <Eventos />
      <SobreNos />
      <Footer />
    </main>
  );
}
