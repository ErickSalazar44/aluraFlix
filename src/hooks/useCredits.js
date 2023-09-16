import axios from "axios";
import { useState } from "react";

const useCredits = (isMovie) => {
    const [infoApi, setInfoApi] = useState(null);
    const [isError, setIsError] = useState(false);
    const [loading, setLoading] = useState(false);
    const urlBase = `https://api.themoviedb.org/3/${isMovie}/`;

    // Optener datos de la api
    const getCast = (id) => {
        const url = `${urlBase}${id}/credits?language=es-ES&locale=US`;

        const headers = {
            Accept: "application/json",
            Authorization: `Bearer ${import.meta.env.VITE_API_URL}`,
        };

        setLoading(true);

        axios
            .get(url, { headers })
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

    return [infoApi, getCast, isError, loading];
};

export default useCredits;
