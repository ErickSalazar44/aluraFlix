import axios from "axios";
import { useState } from "react";

const useFetch = (baseUrl) => {
    const [infoApi, setInfoApi] = useState(null);
    const [isError, setIsError] = useState(false);
    const [loading, setLoading] = useState(false);

    const token =
        "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2MTdiOGI2ODFiZGIwMjI3YjUzNDY0ZjJkMzU3ZDhlMSIsInN1YiI6IjY0ZjYwOWYzZWJiOTlkMDExZTBiNmUwZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.qcqXt8lOPeki5sxBQhLiWMp_OLjztLp2_4Pd95uaWTg";

    // Optener datos de la api
    const getApi = (path, query) => {
        const url = `${baseUrl}${path}?language=en-US&${query}`;

        const headers = {
            Accept: "application/json",
            Authorization: `Bearer ${token}`,
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
