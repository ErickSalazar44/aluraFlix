import axios from "axios";
import { useState } from "react";

const useSimilar = (isMovie) => {
    const [infoApi, setInfoApi] = useState(null);
    const [isError, setIsError] = useState(false);

    const urlBase = `https://api.themoviedb.org/3/${isMovie}/`;
    const apiKey = "617b8b681bdb0227b53464f2d357d8e1";

    // Optener datos de la api
    const getRecomendacionMovie = (id) => {
        const url = `${urlBase}${id}/recommendations?api_key=${apiKey}&language=es-ES`;
        axios
            .get(url)
            .then((res) => {
                setInfoApi(res.data);
                setIsError(false);
            })
            .catch((err) => {
                console.error(`Error en la solicitud: ${err}`);
                setIsError(true);
            });
    };

    return [infoApi, getRecomendacionMovie, isError];
};

export default useSimilar;
