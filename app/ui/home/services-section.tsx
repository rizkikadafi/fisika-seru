import Image from "next/image";
import ServiceCard from "@/app/ui/home/service-card";

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
