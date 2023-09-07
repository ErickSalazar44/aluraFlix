import React, { useEffect } from 'react'
import useFetch from '../hooks/useFetch';

const Prueba = () => {

    const baseUrl = "https://api.themoviedb.org/3";
    const path = "/discover/movie";

    const [popularMovies, getMovies, isError, loading] = useFetch(baseUrl);

    useEffect(() => {
        // obtener los datos de la api
        const query = 'with_genres=27&sort_by=popularity.desc'

        getMovies(path, query);
    }, []);

    console.log(popularMovies)

  return (
    <div>Prueba</div>
  )
}

export default Prueba