"use client";

import { BsDribbble, BsFacebook, BsGithub, BsInstagram, BsTwitter } from "react-icons/bs";
import Logo from "@/app/ui/home/logo";

export default function FooterSection() {
  return (
    <section id="pricing" className="bg-blue-600 text-gray-100">
      <footer>
        <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
          <div className="md:flex md:justify-between">
            <div className="mb-6 md:mb-0">
              <Logo image="/logo.png" title="Fisika Seru" className="text-gray-100" />
            </div>
            <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
              <div>
                <h2 className="mb-6 text-sm font-semibold text-gray-100 uppercase">Links</h2>
                <ul className="text-gray-100">
                  <li className="">
                    <a href="#" className="hover:underline">Syarat dan Ketentuan</a>
                  </li>
                  <li>
                    <a href="#" className="hover:underline">Kontak kami</a>
                  </li>
                  <li>
                    <a href="#" className="hover:underline">Layanan</a>
                  </li>
                </ul>
              </div>
              <div>
                <h2 className="mb-6 text-sm font-semibold text-gray-100 uppercase">Resource</h2>
                <ul className="text-gray-100">
                  <li className="">
                    <a href="#" className="hover:underline">About Us</a>
                  </li>
                  <li>
                    <a href="#" className="hover:underline">Carier</a>
                  </li>
                  <li>
                    <a href="#" className="hover:underline">Legal Notice</a>
                  </li>
                </ul>
              </div>
              <div>
                <h2 className="mb-6 text-sm font-semibold text-gray-100 uppercase">Hubungi kami</h2>
                <ul className="text-gray-100">
                  <li className="">
                    <span>(+62) 812383492823</span>
                  </li>
                  <li className="">
                    <span>fisikaseruunj@gmail.com</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <hr className="my-6 border-gray-200 sm:mx-auto lg:my-8" />
          <div className="sm:flex sm:items-center sm:justify-between">
            <span className="text-sm text-gray-100 sm:text-center">© 2024 <a href="/" className="hover:underline">Fisika Seru</a>. All Rights Reserved.
            </span>
            <div className="flex mt-4 sm:justify-center sm:mt-0 *:mx-2">
              <a href="#" className="text-gray-100 hover:text-gray-900">
                <BsFacebook size={30} style={{ color: 'lightgray' }} />
                <span className="sr-only">Facebook page</span>
              </a>
              <a href="#" className="text-gray-500 hover:text-gray-900">
                <BsTwitter size={30} style={{ color: 'lightgray' }} />
                <span className="sr-only">Twitter page</span>
              </a>
              <a href="#" className="text-gray-500 hover:text-gray-900">
                <BsInstagram size={30} style={{ color: 'lightgray' }} />
                <span className="sr-only">Instagram page</span>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </section>
  );
}

