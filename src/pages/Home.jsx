import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";



// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";




// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";

import { apiEntity } from "../apiConfig";
import Carousel from "../components/Carousel/Carousel";
import Banner from "../components/Banner/Banner";
import Separator from "../components/Separator/Separator";

const Home = () => {
    
 

    return (
      <>
        <Banner />
        <Separator height={"40px"} />
        <Carousel 
          entity={apiEntity.popularTv}
          tittle={"Series populares"}
        />
        <Separator height={"40px"} />
        <Carousel 
          entity={apiEntity.topRated}
          tittle={"Series mejor puntuadas"}
        />
        <Separator height={"40px"} />
        <Carousel 
          entity={apiEntity.tvOntheair}
          tittle={"Series en el aire"}
        />
       
      
      </>
    );
  };
export default Home;  