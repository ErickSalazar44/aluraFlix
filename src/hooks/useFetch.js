import axios from "axios";
import { useState } from "react";

const useFetch = (baseUrl) => {
    const [infoApi, setInfoApi] = useState(null);
    const [isError, setIsError] = useState(false);
    const [loading, setLoading] = useState(false);

    // Optener datos de la api
    const getApi = (path, query) => {
        const url = `${baseUrl}${path}?language=es-ES&${query}`;

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

    return [infoApi, getApi, isError, loading];
};

export default useFetch;
