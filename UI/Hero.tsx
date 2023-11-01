import bgimage from "@/public/teresinaInfo.jpg";
import { GetHeaderImagem } from "@/services/hygraph/GetHeaderImage";

export default async function Hero() {
  await GetHeaderImagem();
  return (
    <div
      id="hero"
      className="hero min-h-screen"
      style={{
        backgroundImage: `url(${bgimage.src})`,
        // "url(https://daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.jpg)",
      }}
    >
      <div className="hero-overlay bg-opacity-80"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="">
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
