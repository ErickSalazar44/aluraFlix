import axios from "axios";
import { useState } from "react";

const useProviders = () => {
    const [infoApi, setInfoApi] = useState(null);
    const [isError, setIsError] = useState(false);
    const urlBase = "https://api.themoviedb.org/3/movie/";
    const apiKey = "617b8b681bdb0227b53464f2d357d8e1";
    // Optener datos de la api
    const getProviders = (id) => {
        const url = `${urlBase}${id}/watch/providers?api_key=${apiKey}&language=es-ES&locale=US`;
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

    return [infoApi, getProviders, isError];
};

export default useProviders;
