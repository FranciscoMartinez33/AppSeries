
import React, { useRef, useState } from "react";
import Slider from "react-slick";
import useApi from "../../hooks/useApi";
import { settingsSlider } from "./settings";
import Card from '../Card/Card';
import styles from "./Carousel.module.css";
 

const Carousel = ({ entity, tittle }) => { 
  const [series, loading, error ] = useApi(entity);

  return (
    <>
    
      <div>
        <h1
          className={`${styles.carousel_tittle}`}
        >
          {tittle}
        </h1>
      </div>
      <Slider {...settingsSlider}>
        {loading ? (
          <div>Loading...</div>
        ):(
          series.map((series) => (
            <Card
            key={series.id}
            title={series.title || series.name}
            imgPath={series.backdrop_path}
          />
          ))
        )}
      </Slider>
    </>
  );
};
export default Carousel;