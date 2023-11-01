import ButtonWithIcon from "@/components/ButtonWithIcon";
import Card from "@/components/Card";
import ArrowRightIcon from "@/components/icons/ArrowRightIcon";
import eventoFig from "@/public/eventosFigura.png";
import { GetHomePageEvents } from "@/services/hygraph/GetHomePageEvents";
import { EventoType } from "@/types/EventoType";
import Link from "next/link";

export default async function Eventos() {
  const resp: EventoType[] = await GetHomePageEvents();
  return (
    <div
      className="py-4 bg-white"
      id="eventos"
      style={{
        backgroundImage: `url(${eventoFig.src})`,
      }}
    >
      <div className="container mx-auto">
        <div className="w-full py-4">
          <h1 className="text-5xl font-bold text-purple-600 pl-4">Eventos</h1>
        </div>
        <div className="flex flex-col items-center gap-4 lg:flex-row lg:justify-between">
          {resp.map((item, index) => {
            return (
              <Card
                key={item.id}
                imgSrc={item.imagem?.url}
                title={item.title}
                resume={item.resumo}
                urlTo={"/eventos/" + item.slug}
              />
            );
          })}
        </div>
        <div className="p-4">
          <Link href={"/eventos"}>
            <ButtonWithIcon icon={<ArrowRightIcon />} />
          </Link>
        </div>
      </div>
    </div>
  );
}
