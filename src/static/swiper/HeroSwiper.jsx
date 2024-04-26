/* eslint-disable no-unused-vars */
import React from "react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import img1 from "../../assets/images/bg-img.jpg";
import img2 from "../../assets/images/bg-img.avif";
import img3 from "../../assets/images/loading.jpg";

const HeroSwiper = () => {
  return (
    <section style={{ paddingTop: "120px" }} className="container">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src={img1} alt="img" width={"100%"} height={400} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img2} alt="img" width={"100%"} height={400} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img3} alt="img" width={"100%"} height={400} />
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default HeroSwiper;
