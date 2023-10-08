import Image from "next/image";

export default function Card() {
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <figure>
        <Image
          src={"https://picsum.photos/720"}
          width={384}
          height={720}
          alt="imagem"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">Title!</h2>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officiis, vitae libero. Voluptate sint incidunt iste tenetur officia ex accusamus porro, quos voluptas distinctio at totam, minus cum id suscipit quas!</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">ver mais</button>
        </div>
      </div>
    </div>
  );
}
