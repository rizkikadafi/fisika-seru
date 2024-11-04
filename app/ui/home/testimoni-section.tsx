"use client";

import Image from "next/image";
import { Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FaStar } from "react-icons/fa";
import { FaRegArrowAltCircleRight, FaRegArrowAltCircleLeft } from "react-icons/fa";

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/navigation';

const testimoni_data = [
  {
    key: 1,
    title: 'Thompson',
    picture: "/profile1.jpg",
    name: "Jennifer",
    testimoni: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    rate: 3
  },
  {
    key: 2,
    title: 'Plank',
    picture: "/profile2.jpg",
    name: "Lauren",
    testimoni: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    rate: 2
  },
  {
    key: 3,
    title: 'Tesla',
    picture: "/profile3.jpg",
    name: "Jack",
    testimoni: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    rate: 5
  },
  {
    key: 4,
    title: 'Tesla',
    picture: "/profile3.jpg",
    name: "Jack",
    testimoni: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    rate: 1
  }
];
function TestimoniCard({ title, picture, name, testimoni, rate }:
  { title: string, picture: string, name: string, testimoni: string, rate: number }) {
  return (
    <div className="mx-auto max-w-sm bg-gray-200 border border-gray-200 rounded-lg shadow-center-sm">
      <Image className="object-cover h-56 rounded-t-lg" src={picture} alt={name} width={500} height={500} />
      <div className="p-5">
        <div className="flex mb-2">
          {Array.from({ length: 5 }, (_, index) => (
            <FaStar
              key={index}
              size={20}
              style={{ color: index < rate ? 'gold' : 'gray' }}
            />
          ))}
        </div>
        <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900">{title}</h5>
        <p className="text-sm font-normal text-gray-700">{testimoni}</p>
        <p className="mb-2 text-sm font-bold tracking-tight italic text-gray-900">— {name}</p>
      </div>
    </div>
  )
}
export default function TestimoniSection() {
  return (
    <section id="testimoni" className="flex flex-col sm:flex-row sm:items-center justify-between text-gray-800 py-14 px-10 lg:px-10">
      <div className="text-center sm:text-left lg:ml-14">
        <h1 className="text-3xl lg:text-4xl font-medium mb-3">What Our Customer Say?</h1>
        <p className="text-sm lg:text-lg w-full">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
      </div>


      <div className="w-full sm:w-3/5 lg:w-2/5 mx-auto mt-3 sm:pl-5 relative">
        <Swiper
          modules={[Navigation]}
          slidesPerView={1}
          navigation={{ nextEl: '.swiper-btn-next', prevEl: '.swiper-btn-prev' }}
          initialSlide={1}
          loop={true}
        >

          {testimoni_data.map((data) => {
            return (<SwiperSlide className="px-8 sm:px-3 py-3 pb-12 pt-3" key={data.key}>
              <TestimoniCard
                title={data.title}
                picture={data.picture}
                name={data.name}
                testimoni={data.testimoni}
                rate={data.rate}
              />

            </SwiperSlide>
            );
          })}
          <div className="swiper-btn-prev cursor-pointer absolute left-1/3 sm:right-16 lg:right-28 sm:left-auto bottom-0 z-20"><FaRegArrowAltCircleLeft size={40} style={{ color: 'darkgray' }} /></div>
          <div className="swiper-btn-next cursor-pointer absolute right-1/3 sm:right-3 lg:right-16 bottom-0 z-20"><FaRegArrowAltCircleRight size={40} style={{ color: 'darkgray' }} /></div>
        </Swiper>
      </div>
    </section>
  )
}
