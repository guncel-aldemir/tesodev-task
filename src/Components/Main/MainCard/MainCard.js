import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import News from "../../../news.json";
import { A11y, Navigation } from "swiper";

import "swiper/scss";
import "swiper/scss/navigation";
import "./MovieCard.scss";
const MainCard = () => {
  return (
    <div className="cards">
      <h1 className="top-title">Top News</h1>
      <Swiper
        modules={[Navigation, A11y]}
        spaceBetween={10}
        slidesPerView={3}
        navigation
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
      >
        {News.map((item, index) => (
          <SwiperSlide>
            <div className="card" key={index.id}>
              <div className="cardImage">
                <img src={item.image} className="image" alt="" />
              </div>
              <div className="cardTitle">
                <h3>{item.title}</h3>
              </div>
              <div className="cardSubtitle">
                <p>{item.day}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default MainCard;
