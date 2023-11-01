import Divider from "@/components/Divider";
import { GetPost } from "@/services/hygraph/GetPost";
import { PostagemType } from "@/types/PostagemType";
import Image from "next/image";

export default async function page({ params }: { params: { slug: string } }) {
  const resp: PostagemType = await GetPost(params.slug);
  return (
    <div className="container mx-auto">
      <div className="p-4">
        <Image
          alt="imagem"
          src={resp.imagem?.url || ""}
          width={100}
          height={100}
        />
        <h2 className="text-4xl">{resp.title || ""}</h2>
        <Divider />
        <p className="italic">{resp.resumo || ""}</p>
        <Divider />
        <p>{resp.conteudo?.text || ""}</p>
      </div>
    </div>
  );
}
