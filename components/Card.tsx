import Image from "next/image";
import Link from "next/link";

type CardProps = {
  imgSrc?: string;
  title?: string;
  resume?: string;
  urlTo?: string;
};

const sampleImageUrl = "https://picsum.photos/720";
const sampleData = {
  sampleImageUrl: "https://picsum.photos/720",
  sampleTitle: "Title",
  sampleResumo:
    "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officiis,  vitae libero. Voluptate sint incidunt ste tenetur officia ex  accusamus porro, quos voluptas distinctio at totam, minus cum id  suscipit quas!",
};

export default function Card({
  imgSrc = sampleData.sampleImageUrl || "",
  resume = sampleData.sampleResumo || "",
  title = sampleData.sampleTitle || "",
  urlTo = "",
}: CardProps) {
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <figure>
        <Image src={imgSrc} width={384} height={720} alt="imagem" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p>{resume}</p>
        <Link href={urlTo}>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">ver mais</button>
          </div>
        </Link>
      </div>
    </div>
  );
}
