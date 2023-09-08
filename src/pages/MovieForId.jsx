import { useParams } from "react-router-dom"
import useFetch from "../hooks/useFetch"
import { useEffect } from "react";


const MovieForId = () => {

    const {id} = useParams()

    const baseUrl = "https://api.themoviedb.org/3";
    const path = "/movie";

    const [popularMovies, getMovies, isError, loading] = useFetch(baseUrl);

    useEffect(() => {
        getMovies(`${path}/${id}`);
    }, []);

    console.log(popularMovies)
    
    const bgImg = {
        backgroundImage : `url('https://image.tmdb.org/t/p/w500/${popularMovies?.backdrop_path}')`,
        backgroundPosition: 'calc((((100vw / 2.222222) - 20px) / 1.5) / 2) 0',
        backgroundSize : 'cover',
        backgroundRepeat: 'no-repeat'
    }

    const img = {
        width : 'calc(((100vw/1.8))/1.5)',
        minWidth : 'calc(((100vw/1.8) )/1.5)',
        height : 'calc((100vw/1.8))',
        minHeight : 'calc((100vw/1.8))'
    }


  return (
    <article className="text-white pt-navH" >
        <div style={bgImg} className='h-[33vh] w-full min-w-full relative'>
            <div className="bg-gradiant absolute top-0 left-0 w-full h-[101%]"></div>
            <img
                className="absolute z-10 rounded inset-y-1/2 top-1/2 transform -translate-y-1/2 left-5"
                src={`https://image.tmdb.org/t/p/w500/${popularMovies?.poster_path}`} 
                alt={popularMovies?.title}
                style={img} 
            />
        </div>
        <div className="px-6">
            <div className="w-full py-5">
                <h2 className="font-semibold text-titulo" >
                    {popularMovies?.title}
                    <span className="ml-2 opacity-80 font-light">{`(${popularMovies?.release_date.slice(0,4)})`}</span>    
                </h2>
            </div>
            <div>
                <h3 className="text-[17px] font-semibold mb-2">Vista general</h3>
                <p className="text-sm">{popularMovies?.overview}</p>
            </div>
        </div>
    </article>
  )
}

export default MovieForId