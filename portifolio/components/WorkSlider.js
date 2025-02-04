// data

const workSlides = {
    slides: [
        {
            images: [
                { title: "confira", path: "/oceano.png", link:"https://global-solution-steel.vercel.app" },
                { title: "confira", path: "/oceano2.png", link:"https://global-solution-steel.vercel.app" },
                { title: "confira", path: "/oceano3.png", link:"https://global-solution-steel.vercel.app" },
                { title: "confira", path: "/oceano4.png", link:"https://global-solution-steel.vercel.app" }
            ]
        },
        {
            images: [
                { title: "confira", path: "/vinheria1.png", link:"https://cp2-front-end.vercel.app/pages/home.html" },
                { title: "confira", path: "/vinheria2.png", link:"https://cp2-front-end.vercel.app/pages/home.html"  },
                { title: "confira", path: "/vinheria3.png", link:"https://cp2-front-end.vercel.app/pages/home.html"  },
                { title: "confira", path: "/vinheiria4.png", link:"https://cp2-front-end.vercel.app/pages/home.html"  }
            ]
        },
        {
            images: [
                { title: "confira", path: "/formulaE-1.png", link:"https://challenge-formula-e-phi.vercel.app" },
                { title: "confira", path: "/formulaE-2.png", link:"https://challenge-formula-e-phi.vercel.app" },
                { title: "confira", path: "/formulaE-4.png", link:"https://challenge-formula-e-phi.vercel.app" },
                { title: "confira", path: "/formulaE-3.png", link:"https://challenge-formula-e-phi.vercel.app" }
            ]
        },
        {
            images: [
                { title: "confira", path: "/ecotrend1.png", link:"https://workshop-de-html-e-css.vercel.app"  },
                { title: "confira", path: "/ecotrend2.png", link:"https://workshop-de-html-e-css.vercel.app"  },
                { title: "confira", path: "/ecotrend3.png", link:"https://workshop-de-html-e-css.vercel.app"  },
                { title: "confira", path: "/ecotrend4.png", link:"https://workshop-de-html-e-css.vercel.app"  }
            ]
        }
    ]
};

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { Pagination } from "swiper";
import { BsArrowDownRight } from "react-icons/bs";
import Image from "next/image";

const WorkSlider = () => {
    return (
        <Swiper
            spaceBetween={10}
            pagination={{ clickable: true }}
            modules={[Pagination]}
            className="h-[240px] sm:h-[480px]"
        >
            {workSlides.slides.map((slide, index) => {
                return (
                    <SwiperSlide key={index}>
                        <div className="grid grid-cols-2 grid-rows-2 gap-4 cursor-pointer">
                            {slide.images.map((image, imgIndex) => {
                                return (
                                    <div className="relative rounded-lg overflow-hidden flex items-center justify-center group" key={imgIndex}>
    <a href={image.link || "#"} target="_blank" rel="noopener noreferrer" className="w-full h-full block">
        <div className="flex items-center justify-center relative overflow-hidden w-full h-full">
            {/* Imagem */}
            <Image 
                src={image.path} 
                width={500} 
                height={300} 
                alt={image.title}
                className="object-cover w-full h-full"
            />

            {/* Gradiente Overlay */}
            <div className="absolute inset-0 bg-gradient-to-l from-transparent via-[#e838cc] to-[#4a22bd] opacity-0 group-hover:opacity-80 transition-all duration-700"></div>

            {/* Título da imagem */}
            <div className="absolute bottom-0 translate-y-full group-hover:-translate-y-10 transition-all duration-300">
                <div className="flex items-center gap-x-2 text-[13px] tracking-[0.2em]">
                    <div className="delay-100">{image.title}</div>
                    <div className="text-xl translate-y-[500%] group-hover:translate-y-0 transition-all duration-300 delay-200">
                        <BsArrowDownRight />
                    </div>
                </div>
            </div>
        </div>
    </a>
</div>

                                );
                            })}
                        </div>
                    </SwiperSlide>
                );
            })}
        </Swiper>
    );
};

export default WorkSlider;
