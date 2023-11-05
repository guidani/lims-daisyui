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
      <div className="hero-overlay"></div>
      <div className="container mx-auto">
        <div className="px-4 w-full text-white flex items-center justify-center flex-col md:max-w-4xl">
          <h1 className="mb-5 text-5xl font-bold">
            Laboratório de Inovações em Sistemas Multimídias
          </h1>
          <p className="mb-5 text-2xl ">
            Nossa missão é criar um mundo mais confortável através do
            conhecimento tecnológico e computacional.
          </p>
          <div className="flex gap-4 items-start justify-start w-full">
            <button className="btn btn-primary">Projetos</button>
            <button className="btn btn-primary">Eventos</button>
          </div>
        </div>
      </div>
    </div>
  );
}

// .hero-content {
//   z-index: 0;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   max-width: 80rem/* 1280px */;
//   gap: 1rem/* 16px */;
//   padding: 1rem/* 16px */;
// }
