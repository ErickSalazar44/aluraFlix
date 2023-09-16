import axios from "axios";
import { useState } from "react";

const useSearchMovie = (isMovie) => {
    const [infoApi, setInfoApi] = useState(null);
    const [isError, setIsError] = useState(false);
    const [loading, setLoading] = useState(false);
    const url = `https://api.themoviedb.org/3/search/${isMovie}`;

    // Optener datos de la api
    const getSearchMovie = (query) => {
        const params = {
            query,
            include_adult: false,
            language: "es-ES",
            page: 1,
        };
        const headers = {
            Accept: "application/json",
            Authorization: `Bearer ${import.meta.env.VITE_API_URL}`,
        };
        setLoading(true);
        axios
            .get(url, { params, headers })
            .then((res) => {
                setInfoApi(res.data);
                setIsError(false);
            })
            .catch((err) => {
                console.error(`Error en la solicitud: ${err}`);
                setIsError(true);
            })
            .finally(() => setLoading(false));
    };

    const resetValue = (params) => {
        setInfoApi(params);
    };

    return [infoApi, getSearchMovie, isError, resetValue, loading];
};

export default useSearchMovie;
