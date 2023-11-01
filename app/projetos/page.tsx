import CardSide from "@/components/CardSide";
import { GetAllPosts } from "@/services/hygraph/GetAllPosts";
import { PostagemType } from "@/types/PostagemType";

export default async function page() {
  const resp: PostagemType[] = await GetAllPosts();
  return (
    <div className="container mx-auto">
      <div className="p-4">
        <div className="w-full py-4">
          <h1 className="text-5xl font-bold text-purple-600">Projetos</h1>
        </div>
        {resp.map((item, index) => {
          return (
            <CardSide
              key={item.id}
              imgSrc={item.imagem?.url}
              title={item.title}
              resume={item.resumo}
              urlTo={"/projetos/" + item.slug}
            />
          );
        })}
      </div>
    </div>
  );
}
