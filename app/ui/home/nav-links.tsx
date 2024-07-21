import Link from "next/link";
import clsx from 'clsx';

const links = [
  { name: 'Dashboard', href: '/dashboard' },
  { name: 'Tentang Kami', href: '/about' },
  { name: 'FAQ', href: '/faq' },
];

export default function NavLinks({ isOpen }: { isOpen: boolean }) {
  return (
    <div className={clsx(
      "items-center justify-between w-full md:flex md:w-auto md:order-1",
      { 'hidden': !isOpen, }
    )} id="navbar-sticky">
      <div className="flex justify-center mt-5 md:hidden">
        <Link href="#" className="text-gray-800 bg-blue-400 hover:bg-blue-500 font-medium rounded-md text-sm mx-2 px-4 py-2 text-center border-2 border-blue-400 lg:text-lg">Daftar</Link>
        <Link href="#" className="text-gray-800  hover:bg-blue-400 font-medium rounded-md text-sm mx-2 px-4 py-2 text-center border border-blue-400 lg:text-lg">Masuk</Link>
      </div>
      <nav className="flex flex-col p-4 md:p-0 font-medium rounded-lg md:space-x-5 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white">
        {links.map((link) => {
          return (
            <Link
              key={link.name}
              href={link.href}
              className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-200 md:p-2"
            >
              {link.name}
            </Link>
          );
        })}
      </nav>
    </div>
  );
}
