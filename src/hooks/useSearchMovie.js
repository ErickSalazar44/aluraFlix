import axios from "axios";
import { useState } from "react";

const useSearchMovie = (isMovie) => {
    const [infoApi, setInfoApi] = useState(null);
    const [isError, setIsError] = useState(false);
    const url = `https://api.themoviedb.org/3/search/${isMovie}`;
    const token =
        "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2MTdiOGI2ODFiZGIwMjI3YjUzNDY0ZjJkMzU3ZDhlMSIsInN1YiI6IjY0ZjYwOWYzZWJiOTlkMDExZTBiNmUwZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.qcqXt8lOPeki5sxBQhLiWMp_OLjztLp2_4Pd95uaWTg";

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
            Authorization: `Bearer ${token}`,
        };

        axios
            .get(url, { params, headers })
            .then((res) => {
                setInfoApi(res.data);
                setIsError(false);
            })
            .catch((err) => {
                console.error(`Error en la solicitud: ${err}`);
                setIsError(true);
            });
    };

    return [infoApi, getSearchMovie, isError];
};

export default useSearchMovie;
