import Image from 'next/image';
import Link from 'next/link';

export default function Logo({ image, title }: Readonly<{ image: string, title: string }>) {
  return (
    <Link href="/" className='flex'>
      <Image
        src={image}
        className="rounded-full mr-3"
        alt={`${title}'s Logo`}
        width="40"
        height="40"
      />
      <span className="text-gray-800 self-center text-lg font-semibold whitespace-nowrap">{title}</span>
    </Link>
  );
}
