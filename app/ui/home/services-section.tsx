import Image from "next/image";

const services = [
  {
    image: "/hero.jpeg",
    title: "Topik Khusus",
    description: "Memuat topik khusus terkait praktik lab dan implementasi fisika."
  },
  {
    image: "/hero2.jpeg",
    title: "Latihan Soal",
    description: "Memuat topik khusus terkait praktik lab dan implementasi fisika."
  },
  {
    image: "/hero3.jpeg",
    title: "Sertifikat Khusus",
    description: "Memuat topik khusus terkait praktik lab dan implementasi fisika."
  },
  {
    image: "/hero3.jpeg",
    title: "Komunitas",
    description: "Memuat topik khusus terkait praktik lab dan implementasi fisika."
  }
];

function ServiceCard({ image, title, description }: { image: string, title: string, description: string }) {
  return (
    <div className="flex flex-col items-center bg-white rounded-lg shadow-center-sm md:flex-row md:max-w-xl hover:bg-gray-100">
      <Image src={image} alt={title} className="object-cover w-full rounded-t-lg h-72 sm:h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg border-b-2 border-blue-300 md:border-none" width={500} height={500} />
      <div className="w-full flex flex-col justify-between py-5 px-5 leading-normal">
        <h1 className="text-xl font-medium text-gray-800 mb-2">{title}</h1>
        <p className="text-sm font-normal text-gray-700">{description}</p>
      </div>
    </div>
  )
}

export default function ServicesSection() {
  return (
    <section id="services" className="bg-blue-600 text-gray-100 py-14 px-10 lg:px-10">
      <div className="text-center">
        <h1 className="text-3xl lg:text-4xl font-medium mb-3">Ada apa saja di Fisika Seru?</h1>
        <p className="text-sm lg:text-lg w-full md:w-[80%] mx-auto">Untuk memahami tentang fisika secara mendalam diperlukan metode yang efektif dan juga menyenangkan. Demi mencapai hal itu di FisikaSeru terdapat fitur.</p>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 mt-10 sm:px-8 justify-items-center">
        {services.map((service) => {
          return (
            <ServiceCard
              key={service.title}
              image={service.image}
              title={service.title}
              description={service.description}
            />
          );
        })}
      </div>
    </section>
  )
}
