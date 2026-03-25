"use client";
import React from "react";
import Image from "next/image";
import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// Mobile Component
const SkillSwipper = ({ data }: { data: any[] }) => {
    return (
        <div className="mx-auto h-screen block bg-black max-w-md px-4 z-70 lg:hidden">
            <div className="pt-5 text-center sm:mb-12">
                <h1 className="inline-block bg-gradient-to-r from-[#FF7A3A] to-[#07091A] bg-clip-text text-3xl font-semibold text-transparent md:text-[48px]">
                    Technical Skills
                </h1>
            </div>
            <Swiper
                modules={[Pagination, Autoplay]}
                spaceBetween={20}
                slidesPerView={1}
                pagination={{
                    clickable: true,
                }}
                autoplay={{ delay: 3000, disableOnInteraction: false }}
                className="rounded-3xl banking-swiper"
            >
                {data.map((elem) => (
                    <SwiperSlide key={elem.id}>
                        <div className="rounded-3xl  p-6 pb-16 shadow-2xl relative overflow-hidden">
                            {/* Glowing background blob */}
                            <div className="absolute top-0 left-1/2 -ml-[100px] h-[200px] w-[200px] rounded-full bg-gradient-to-r from-[#FF7A3A] to-purple-600 opacity-20 blur-3xl"></div>

                            {/* Image Header */}
                            {elem.img && (
                                <div className="relative z-10 mb-2 flex justify-center h-[160px] w-full">
                                    <Image src={elem.img} alt={elem.title} fill className="object-contain drop-shadow-2xl" />
                                </div>
                            )}

                            {/* Category Title */}
                            <h2 className="relative z-10 mb-6 text-center text-2xl font-bold tracking-wide text-white drop-shadow-md">
                                {elem.title}
                            </h2>

                            {/* Cards Grid */}
                            <div className="relative z-10 mx-auto grid max-w-sm grid-cols-2 gap-3">
                                {elem.cards?.map((card: any) => (
                                    <div
                                        key={card.id}
                                        className={`flex min-h-[90px] flex-col items-center justify-center rounded-xl p-3 shadow-md ${card.color || 'bg-gray-800'}`}
                                    >
                                        <h4 className="text-center text-sm font-semibold text-white drop-shadow-md lg:text-base">
                                            {card.title}
                                        </h4>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>

            <style jsx global>{`
        .banking-swiper .swiper-pagination {
          bottom: 10px !important;
        }
        
        .banking-swiper .swiper-pagination-bullet {
          background: #6b7280 !important;
          opacity: 1 !important;
          width: 8px !important;
          height: 8px !important;
        }
        
        .banking-swiper .swiper-pagination-bullet-active {
          background: #ffffff !important;
          width: 24px !important;
          border-radius: 4px !important;
        }
      `}</style>
        </div>
    );
};

export default SkillSwipper;