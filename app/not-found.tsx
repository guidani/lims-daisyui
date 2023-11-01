import notfound from "@/public/notfound.svg";
import Image from "next/image";
export default function NotFoundPage() {
  return (
    <div className="container mx-auto">
      <div className="w-full p-4 flex justify-center flex-col items-center">
        <p>Que pena. Não encontramos o que você procurava. Tente a sorte na próxima. :D</p>
        <Image src={notfound} alt="not-found" />
      </div>
    </div>
  );
}
