import ButtonWithIcon from "@/components/ButtonWithIcon";
import Card from "@/components/Card";
import ArrowRightIcon from "@/components/icons/ArrowRightIcon";

export default function Projetos() {
  return (
    <div className="bg-base-200 py-4">
      <div className="container mx-auto">
        <div className="w-full py-4">
          <h1 className="text-5xl font-bold">Projetos</h1>
        </div>
        <div className="flex flex-col items-center gap-4 lg:flex-row lg:justify-between">
          <Card />
          <Card />
          <Card />
        </div>
        <div className="py-4">
          <ButtonWithIcon icon={<ArrowRightIcon />} />
        </div>
      </div>
    </div>
  );
}
