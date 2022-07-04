import axios from "axios";

export const tmdb = {
    urlBase: 'https://api.themoviedb.org/3',
    apiKey: "?api_key=266a10365fcd45d109df5f2645687611",
    entity: {
        popularTv : "/tv/popular",
        topRated: "/tv/top_rated",
        tvOntheair: "/tv/on_the_air",
        tvLatest: "/tv/latest",
    },
    language: {
        en: "&language=en-US",
        es: "&language=es-ES",
    },
    pagination: "&page=",
    imageUrl: "https://image.tmdb.org/t/p",
    quality:{
        posterSmall: "/w200",
        posterMedium: "/w300",
        posterLarge: "/w500",
        backdropSmall: "/w300",
        backdropMedium: "/w780",
        backdropLarge: "/w1280",
    }
};

export const apiEntity = {
    popularTv: "popularTv",
    topRated: "topRated",
    tvOntheair: "tvOntheair",
    tvLatest: "tvLatest",
};
export const apiImage = {
    posterSmall: "posterSmall",
    posterMedium: "posterMedium",
    posterLarge: "posterLarge",
    backdropSmall: " backdropSmall",
    backdropMedium: "backdropMedium",
    backdropLarge: "backdropLarge",
};
export const apiLanguage = {
    english: "en",
    spanish: "es",
};

export const tryGetPopularMovies = async (page = 1) => {
    try {
        const res = await axios(
            `https://api.themoviedb.org/3/tv/popular?api_key=266a10365fcd45d109df5f2645687611&language=en-US&page=${page}`
        );
        return res.data;
    } catch (error) {
        return error;

    }
};

export const apiBuilder = {
    tryGet: async (entity, lang = 'es', page = 1) => {
        const url = `${tmdb.urlBase}${tmdb.entity[entity]}${tmdb.apiKey}${tmdb.language[lang]}${tmdb.pagination}${page}`
        try {
            const res = await axios (url);
            return res.data;
        } catch (error) {
            return error;
        }
        
    },
    tryGetById: async (entity, id, lang = "es") => {
        const url = `${tmdb.urlBase}${tmdb.entity[entity]}/${id}${tmdb.apiKey}${tmdb.language[lang]}`;
        try {
          const res = await axios(url);
          return res;
        } catch (error) {
          return [];
        }
      },
      tryGetImg: (path, quality = apiImage.posterLarge) => {
        return `${tmdb.imageUrl}${tmdb.quality[quality]}${path}`;
      },
};
export const imgBuilder = (quality, img) => {
    const image = `${tmdb.imageUrl}${tmdb.quality[quality]}${img}`
    return image;

};




//https://api.themoviedb.org/3/tv/{tv_id}?api_key=<<api_key>>&language=en-US