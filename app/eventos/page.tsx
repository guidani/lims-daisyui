import BtnScrollToTop from "@/components/ArrowToTop";
import CardSide from "@/components/CardSide";
import { GetAllEvents } from "@/services/hygraph/GetAllEvents";
import { EventoType } from "@/types/EventoType";

export default async function page() {
  const resp: EventoType[] = await GetAllEvents();
  return (
    <>
      <BtnScrollToTop />
      <div className="container mx-auto">
        <div className="p-4">
          <div className="w-full py-4">
            <h1 className="text-5xl font-bold text-purple-600">Eventos</h1>
          </div>
          {resp.map((item, index) => {
            return (
              <CardSide
                key={item.id}
                imgSrc={item.imagem?.url}
                title={item.title}
                resume={item.resumo}
                urlTo={"/eventos/" + item.slug}
              />
            );
          })}
        </div>
      </div>
    </>
  );
}
