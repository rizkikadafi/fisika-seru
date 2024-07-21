import Image from 'next/image';

export default function ServiceCard({ image, title, description }: { image: string, title: string, description: string }) {
  return (
    <div className="flex flex-col items-center bg-white rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100">
      <Image src={image} alt={title} className="object-cover w-full rounded-t-lg h-72 sm:h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg border-b-2 border-blue-300 md:border-none" width={500} height={500} />
      <div className="w-full flex flex-col justify-between py-5 px-5 leading-normal">
        <h1 className="text-xl font-medium text-gray-800 mb-2">{title}</h1>
        <p className="text-sm font-normal text-gray-700">{description}</p>
      </div>
    </div>
  )
}
