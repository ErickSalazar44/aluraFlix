import axios from "axios";
import { useState } from "react";

const useFetch = (baseUrl) => {
    const [infoApi, setInfoApi] = useState(null);
    const [isError, setIsError] = useState(false);
    const [loading, setLoading] = useState(false);

    const apiKey = "617b8b681bdb0227b53464f2d357d8e1";
    // Optener datos de la api
    const getApi = (path, query) => {
        const url = `${baseUrl}${path}?api_key=${apiKey}&language=es-ES&${query}`;

        setLoading(true);
        axios
            .get(url)
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

    return [infoApi, getApi, isError, loading];
};

export default useFetch;
