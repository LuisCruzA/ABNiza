'use client'
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination, Navigation } from "swiper/modules";
import Image from "next/image";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/navigation";
import "swiper/css/pagination";


export default function Preview(){


    return(

<div className="flex flex-col items-center bg-amber-200 border-t border-amber-200 px-4 py-48 h-auto">
  <h2 className="text-black text-4xl font-bold text-center mb-16">
    Explora la experiencia
  </h2>

  <div className="flex flex-col md:flex-row justify-center items-center gap-16 w-full max-w-7xl px-6">

    <p className="text-lg text-justify leading-relaxed text-black max-w-md">
      Sumérgete en una interfaz amigable y visualmente atractiva, con ejercicios interactivos en un entorno 3D pensado para niños. Cada actividad está diseñada para motivar la exploración, el reconocimiento de letras y la formación de palabras mediante interacción tangible y divertida.
    </p>


    <div className="relative w-full max-w-3xl ">
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={3}
        loop={true}
        pagination={{ clickable: true }}
        navigation={true}
        coverflowEffect={{
          rotate: 0,
          stretch: 100,
          depth: 300,
          modifier: 1,
          slideShadows: true,
        }}
        modules={[EffectCoverflow, Pagination, Navigation]}
        className="w-full"
      >
        {["preview1.jpeg", "preview2.jpeg", "preview3.jpeg", "preview4.jpeg","preview5.jpeg","preview6.jpeg"].map((img, i) => (
          <SwiperSlide key={i} className="  flex justify-center  select-none">
            <Image
              src={`/imagenes/${img}`}
              width={280}
              height={180}
              alt={`Preview ${i + 1}`}
              className="  w-[700px] h-[300px] rounded-xl shadow-lg hover:scale-105 transition-transform duration-300"
            />
          </SwiperSlide>
        ))}
      </Swiper>

      {/* ESTILOS CUSTOM */}
      <style jsx global>{`
        .swiper-button-prev,
        .swiper-button-next {
          color: #ffff !important; /* amarillo suave */
          font-size: 26px !important;
        }
        .swiper-pagination-bullet {
          background-color: #ffff !important; /* amarillo claro */
          opacity: 1 !important;
        }
        .swiper-pagination-bullet-active {
          background-color: #facc15 !important;
        }
      `}</style>
    </div>
  </div>
</div>

    )


}