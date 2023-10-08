import Image from "next/image";

export default function SobreNos() {
  return (
    <div className="hero min-h-screen bg-primary">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <Image
          src={"https://picsum.photos/720"}
          width={384}
          height={720}
          alt="imagem"
          className="w-auto"
        />
        {/* <img src="https://picsum.photos/seed/picsum/200/300" className="max-w-sm rounded-lg shadow-2xl" /> */}
        <div>
          <h1 className="text-5xl font-bold">Sobre nós!</h1>
          <p className="py-6">
            Laboratorio de Inovações em Sistemas Multimidias ou LIMS, é um
            laboratório de ideias inovadoras para o mundo, que utiliza uma
            grande variedade de recursos e tecnologias. A sua missão é criar um
            mundo mais confortável através do conhecimento tecnológico e
            computacional, atendendo a diversas propostas. .
          </p>
          <p className="py-6">
            O LIMS é um grupo de pesquisa que atua desde 2006 no Instituto
            Federal do Piauí (IFPI), no Campus Teresina Central. Reunindo
            pesquisadores, professores, alunos e técnicos de diferentes
            instituições de ensino e níveis de formação, que desenvolvem
            projetos nas áreas de comunicação, tecnologia e educação..
          </p>
        </div>
      </div>
    </div>
  );
}
