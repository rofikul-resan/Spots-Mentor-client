import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cube";
import "swiper/css/pagination";
// import required modules
import { Autoplay, EffectCube, Pagination } from "swiper";
import { Fade } from "react-awesome-reveal";

const HomeBanner = () => {
  const imgBanner = [
    "/banner1.jpg",
    "/banner2.jpg",
    "/banner3.jpg",
    "/banner4.jpg",
    "/banner5.jpg",
    "/banner5.jpg",
  ];
  return (
    <div className="my-6">
      <Swiper
        effect={"cube"}
        grabCursor={true}
        loop={true}
        cubeEffect={{
          shadowOffset: 20,
          shadowScale: 0.94,
        }}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        pagination={true}
        modules={[EffectCube, Pagination, Autoplay]}
        className="mySwiper"
      >
        {imgBanner.map((img, i) => (
          <SwiperSlide key={i}>
            <div className="w-full mx-auto h-[500px] overflow-hidden relative">
              <img src={img} alt="" className="w-full " />
              <div className="absolute inset-0 bg-gradient-to-l to-black/75 from-black/10 flex items-center">
                <div className=" ml-12">
                  <Fade delay={1e3} damping={1e-1}>
                    <h1 className="text-white text-5xl font-bold ">
                      Welcome to <br /> Our Summer Camp <br /> Sports Course
                    </h1>
                  </Fade>
                  <p className="text-sm text-white md:w-2/6 mt-4">
                    Explore Camps at the Institute of Science give inquisitive
                    campers the chance to collaboratively tackle activities,
                    experiments, and investigations in a unique and safe
                    environment. We offer competitive pay, and this is a great
                    opportunity for college-aged students looking to work with
                    kids over summer break, and anyone who is looking to make an
                    impact on the next generation of science enthusiasts.
                  </p>
                  <button className="btn btn-outline btn-gardant-s hover:btn-gardant-h delay-200 rounded-none mt-4 text-white border-white">
                    View Details
                  </button>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default HomeBanner;
