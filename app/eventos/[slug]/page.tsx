export default function page({ params }: { params: { slug: string } }) {
  return (
    <div className="container mx-auto">
      <div className="p-4">My Event: {params.slug}</div>
    </div>
  );
}
