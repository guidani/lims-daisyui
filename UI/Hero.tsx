import projImage from "@/public/project_sem_branco.png";
import { GetHeaderImagem } from "@/services/hygraph/GetHeaderImage";

export default async function Hero() {
  await GetHeaderImagem();
  return (
    <div
      id="hero"
      className="hero min-h-screen bg-white"
      style={{
        backgroundImage: `url(${projImage.src})`,
        backgroundAttachment: "fixed",
      }}
    >
      {/* <div className="hero-overlay"></div> */}
      <div className="hero-content text-center w-full bg-slate-900 bg-opacity-80 text-white rounded-md">
        <div className=" w-full">
          <h1 className="mb-5 text-5xl font-bold">LIMS</h1>
          <p className="mb-5 text-2xl font-bold">
            Torne-se o estímulo para a inovação tecnológica.
          </p>
          <p className="mb-5 text-2xl font-bold">
            Seja co-criador da nova geração de soluções tecnológicas.
          </p>
          <p className="mb-5 text-2xl font-bold">
            Dê início à revolução com suas contribuições e ideias.
          </p>
        </div>
      </div>
    </div>
  );
}
