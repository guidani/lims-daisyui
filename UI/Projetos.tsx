import ButtonWithIcon from "@/components/ButtonWithIcon";
import Card from "@/components/Card";
import ArrowRightIcon from "@/components/icons/ArrowRightIcon";
import { GetHomePagePosts } from "@/services/hygraph/GetHomePagePosts";
import { PostagemType } from "@/types/PostagemType";
import Link from "next/link";

export default async function Projetos() {
  const resp: PostagemType[] = await GetHomePagePosts();
  return (
    <div className="bg-base-200 py-4">
      <div className="container mx-auto">
        <div className="w-full py-4">
          <h1 className="text-5xl font-bold pl-4">Projetos</h1>
        </div>
        <div className="flex flex-col items-center gap-4 lg:flex-row lg:justify-between">
          {resp.map((item, index) => {
            return (
              <Card
                key={item.id}
                imgSrc={item.imagem?.url}
                title={item.title}
                resume={item.resumo}
                urlTo={"/projetos/" + item.slug}
              />
            );
          })}
        </div>
        <div className="p-4">
          <Link href={"/projetos"}>
            <ButtonWithIcon icon={<ArrowRightIcon />} />
          </Link>
        </div>
      </div>
    </div>
  );
}
