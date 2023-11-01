import Image from "next/image";
import Link from "next/link";
import Divider from "./Divider";

type CardProps = {
  imgSrc?: string;
  title?: string;
  resume?: string;
  urlTo?: string;
};

const sampleData = {
  sampleImageUrl: "https://picsum.photos/720",
  sampleTitle: "Title",
  sampleResumo:
    "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officiis,  vitae libero. Voluptate",
};

export default function CardSide({
  imgSrc = sampleData.sampleImageUrl || "",
  resume = sampleData.sampleResumo || "",
  title = sampleData.sampleTitle || "",
  urlTo = "",
}: CardProps) {
  return (
    <>
      <div className="card card-side bg-base-100 shadow-xl">
        <figure>
          <Image src={imgSrc} width={384} height={720} alt="imagem" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{title}</h2>
          <p>{resume}</p>
          <Link href={urlTo}>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Ver mais</button>
            </div>
          </Link>
        </div>
      </div>
      <Divider />
    </>
  );
}
