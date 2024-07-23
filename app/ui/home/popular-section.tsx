import Image from "next/image";
import Link from "next/link";

const popular_videos = [
  {
    image: "/hero.jpeg",
    title: "Fisika Modern",
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
  },
  {
    image: "/hero2.jpeg",
    title: "Fisika Termodinamika",
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
  },
  {
    image: "/hero3.jpeg",
    title: "Fisika Komputasi",
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
  },
  {
    image: "/hero3.jpeg",
    title: "Praktikum Fisika Dasar 1",
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
  }
];

function PopularCard({ image, title, description }: { image: string, title: string, description: string }) {
  return (
    <div className="max-w-sm bg-gray-200 border border-gray-200 rounded-lg shadow-center-sm">
      <Image className="object-cover h-56 rounded-t-lg" src={image} alt={title} width={500} height={500} />
      <div className="p-5">
        <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900">{title}</h5>
        <p className="mb-5 text-sm font-normal text-gray-700">{description}</p>
        <Link href="#" className="inline-block w-full text-gray-800 hover:bg-blue-400 font-medium rounded-md text-sm px-4 py-2 text-center border border-blue-400">
          Add to Cart
        </Link>
      </div>
    </div>
  )
}

export default function PopularSection() {
  return (
    <section id="popular" className="text-gray-800 py-14 px-10 lg:px-10">
      <div className="text-center">
        <h1 className="text-3xl lg:text-4xl font-medium">Video Populer Kami</h1>
        <p className="text-sm lg:text-lg w-full md:w-[80%] mx-auto">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
      </div>
      <div className="flex flex-col justify-center items-center my-3 md:my-10">
        <Link href="#" className="order-1 md:order-2 inline-block my-8 text-gray-800 bg-blue-400 hover:bg-blue-500 font-medium rounded-md text-sm px-8 py-2 text-center border-2 border-blue-400">
          Lihat Lainnya
        </Link>
        <div className="order-2 md:order-1 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5 sm:px-8 justify-items-center">
          {popular_videos.map((popular_video) => {
            return (
              <PopularCard
                key={popular_video.title}
                image={popular_video.image}
                title={popular_video.title}
                description={popular_video.description}
              />
            );
          })}
        </div>

      </div>
    </section>
  )
}
