import Image from 'next/image';
import Link from 'next/link';

import { Karma } from "next/font/google";
const karma = Karma({ weight: ['400', '500', '600', '700'], subsets: ['latin'] });

function Tagline() {
  return (
    <div className="sm:px-10 mt-[-5rem] sm:mt-[-13rem] md:mt-0 z-10 md:order-1">
      <h1 className={`${karma.className} text-3xl lg:text-5xl font-medium mb-3 w-[80%] md:w-full`}>Getting Quality Education is now more Easy</h1>
      <p className={`${karma.className} text-sm lg:text-lg text-gray-800 sm:w-[85%] md:w-full`}>It is a long established fact that a reader will be distracted by the readable content of a page when looking  </p>
      <Link href="#" className="text-gray-800 bg-blue-400 hover:bg-blue-500 font-medium rounded-md text-sm lg:text-lg mt-5 inline-block px-8 py-3 text-center border-2 border-blue-400">Study Now</Link>
    </div>
  );
}

export default function Hero() {
  return (
    <div className="px-5 lg:px-10 flex flex-col md:flex-row items-start md:items-center md:h-screen md:mt-[-3rem] lg:mt-0 relative">
      <div className="relative md:order-2 w-full flex justify-start h-full md:justify-center items-center">
        <Image src="/hero4.svg" alt="hero image" width={400} height={400} className="w-screen sm:w-full xl:w-4/5 lg:mt-24 mr-3" />
      </div>
      <Tagline />
    </div>
  );
}
