import React, { useEffect, useState } from "react";
import { apiBuilder, apiImage } from "../apiConfig";
import { randomIndex } from "../utils/utils";
const useApi = (entity, lang = "es", pagination=1) => { 
    const [series, setSeries] = useState([]);
    const [loading, setLoading] =useState(true);
    const [error, setError] = useState(null);
    const [page, setPage] = useState(pagination);

    const getData = async () => {
        setLoading(true);
        setError(null);

        const response = await apiBuilder.tryGet(entity, lang, page);

        if (response.error){
            setError(response.error);
        } else {
            setSeries(response.results);
        }
        setLoading(false);
    };
    useEffect(() => {
        getData();
    }, [page]);

    const [randomValue, setRandomValue] = useState(null);
    const [randomImg, setRandomImg] = useState(null);

    const getRandomValue = () => {
        if (series.length === 0) {
            return;
        } else {
            const selectedValue = series[randomIndex(0, series.length - 1)];
            setRandomValue(selectedValue);
            const backgroundImage = apiBuilder.tryGetImg(
                selectedValue.backdrop_path,
                apiImage.backdropLarge
            );
            setRandomImg(backgroundImage);
        }
    };
    useEffect(() => {
        getRandomValue();
      }, [series]);

    return [series, loading, error, randomValue, randomImg];
};

export default useApi;