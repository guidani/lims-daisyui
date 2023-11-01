export default function page({ params }: { params: { slug: string } }) {
  return (
    <div className="container mx-auto">
      <div className="p-4">My Post: {params.slug}</div>
    </div>
  );
}
