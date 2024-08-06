'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Navigation } from 'swiper';
import { FaAngleRight, FaAngleLeft } from "react-icons/fa";

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/navigation';

const pricingData = [
  {
    key: 1,
    title: 'Thompson',
    monthPrice: '40.000',
    yearPrice: '450.000',
    checkedFeatures: [
      'Akses ke seluruh video premium',
    ],
    uncheckedFeatures: [
      'Latihan soal',
      'Sertifikat course',
      'Reaquest course',
      'Akses komunitas Fisika Seru',
    ]
  },
  {
    key: 2,
    title: 'Plank',
    monthPrice: '65.000',
    yearPrice: '690.000',
    checkedFeatures: [
      'Akses ke seluruh video premium',
      'Latihan soal',
      'Sertifikat course'
    ],
    uncheckedFeatures: [
      'Reaquest course',
      'Akses komunitas Fisika Seru',
    ]
  },
  {
    key: 3,
    title: 'Tesla',
    monthPrice: '80.000',
    yearPrice: '850.000',
    checkedFeatures: [
      'Akses ke seluruh video premium',
      'Latihan soal',
      'Sertifikat course',
      'Reaquest course',
      'Akses komunitas Fisika Seru',
    ],
    uncheckedFeatures: []
  },
]

function PricingCard({ title, monthPrice, yearPrice, checkedFeatures, uncheckedFeatures }:
  { title: string, monthPrice: string, yearPrice: string, checkedFeatures: string[], uncheckedFeatures: string[] }) {
  return (
    <div className="w-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg sm:p-8 mx-auto shadow-center-sm">
      <h5 className="mb-4 text-2xl font-medium text-gray-500">{title}</h5>
      <div className="flex items-baseline text-gray-900">
        <span className="text-xl font-semibold">Rp.</span>
        <span className="text-3xl font-extrabold tracking-tight">{yearPrice}</span>
        <span className="ms-1 text-xl font-normal text-gray-500">/tahun</span>
      </div>
      <span className="ms-1 text-xl font-normal text-gray-500 block w-full text-center my-2">atau</span>
      <div className="flex items-baseline text-gray-900"> <span className="text-xl font-semibold">Rp.</span> <span className="text-3xl font-extrabold tracking-tight">{monthPrice}</span>
        <span className="ms-1 text-xl font-normal text-gray-500">/bulan</span>
      </div>
      <ul role="list" className="space-y-5 my-7">

        {checkedFeatures.map((feature) => {
          return (
            <li className="flex items-center" key={feature}>
              <svg className="flex-shrink-0 w-4 h-4 text-blue-700" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20"> <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" /> </svg> <span className="text-base font-normal leading-tight text-gray-500 ms-3">{feature}</span>
            </li>
          );
        })}

        {uncheckedFeatures.map((feature) => {
          return (
            <li className="flex line-through decoration-gray-500" key={feature}>
              <svg className="flex-shrink-0 w-4 h-4 text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
              </svg>
              <span className="text-base font-normal leading-tight text-gray-500 ms-3">{feature}</span>
            </li>
          );
        })}
      </ul>
      <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-200 font-medium rounded-lg text-sm px-5 py-2.5 inline-flex justify-center w-full text-center">Choose plan</button>
    </div>
  )
}

export default function PricingSection() {
  return (
    <section id="pricing" className="bg-blue-600 text-gray-100 py-14 lg:px-10">
      <div className="text-center px-10">
        <h1 className="text-3xl lg:text-4xl font-medium mb-3">Paket Belajar</h1>
        <p className="text-sm lg:text-lg w-full md:w-[80%] mx-auto">Lorem ipsum dolor sit amet, qui minim labore adipisicing minim.</p>
      </div>
      <div className="mx-auto my-8 w-full relative px-3 sm:w-4/5 lg:w-full">
        <Swiper
          modules={[EffectCoverflow, Navigation]}
          slidesPerView={1}
          navigation={{ nextEl: '.swiper-btn-next', prevEl: '.swiper-btn-prev' }}
          effect="coverflow"
          centeredSlides={true}
          initialSlide={1}
          coverflowEffect={{
            stretch: 0,
            slideShadows: false,
            rotate: 0
          }}
          breakpoints={{
            1024: {
              slidesPerView: 3,
            }
          }}
        >
          {pricingData.map((data) => {
            return (
              <SwiperSlide className="px-8 py-3 sm:px-0" key={data.key}>
                <PricingCard
                  title={data.title}
                  monthPrice={data.monthPrice}
                  yearPrice={data.yearPrice}
                  checkedFeatures={data.checkedFeatures}
                  uncheckedFeatures={data.uncheckedFeatures}
                />
              </SwiperSlide>
            );
          })}
          <div className="swiper-btn-prev cursor-pointer absolute left-[-.5rem] bottom-1/2 z-20"><FaAngleLeft size={42} style={{ color: 'darkgray' }} /></div>
          <div className="swiper-btn-next cursor-pointer absolute right-[-.5rem] bottom-1/2 z-20"><FaAngleRight size={42} style={{ color: 'darkgray' }} /></div>
        </Swiper>
      </div>
    </section>
  )
}
