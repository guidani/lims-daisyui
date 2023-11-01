import ButtonWithIcon from "@/components/ButtonWithIcon";
import Card from "@/components/Card";
import ArrowRightIcon from "@/components/icons/ArrowRightIcon";
import { GetAllEvents } from "@/services/hygraph/GetAllEvents";
import { EventoType } from "@/types/EventoType";
import Link from "next/link";

export default async function Eventos() {
  const resp: EventoType[] = await GetAllEvents();
  return (
    <div className="bg-accent py-4">
      <div className="container mx-auto">
        <div className="w-full py-4">
          <h1 className="text-5xl font-bold text-purple-600">Eventos</h1>
        </div>
        <div className="flex flex-col items-center gap-4 lg:flex-row lg:justify-between">
          {/* <Card /> */}
          {/* <Card /> */}
          {/* <Card /> */}
          {resp.map((item, index) => {
            return (
              <Card
                key={item.id}
                imgSrc={item.imagem?.url}
                title={item.title}
                resume={item.resumo}
                urlTo={"/eventos/"+item.slug}
              />
            );
          })}
        </div>
        <div className="py-4">
          <Link href={"/eventos"}>
            <ButtonWithIcon icon={<ArrowRightIcon />} />
          </Link>
        </div>
      </div>
    </div>
  );
}
