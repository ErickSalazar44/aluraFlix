// Swiper
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from "swiper/react";

// Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import {useState } from "react";
import MovieBackground from './MovieBackground';

import {BiRightArrowAlt} from 'react-icons/bi'
import { useNavigate } from 'react-router-dom';

const MovieSlider = ({ movies, genres }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    // manejador de slices
    const handleSlideChange = (swiper) => {
        const newIndex = swiper.activeIndex;
        setCurrentIndex(newIndex);
    };

    // Usa el selector para obtener los nombres de géneros
    const getGenreNamesByIds = (state, idArray) => {
        return idArray.map((id) => {
            const genre = state.find((genre) => genre.id === id);
            return genre ? genre.name : `Acción${id}`;
        });
    };

    const genreNamesByIds =
        genres && movies?.[currentIndex]?.genre_ids
            ? getGenreNamesByIds(genres, movies[currentIndex].genre_ids)
            : [];

    const styleVerMas = {
        backdropFilter : ' blur(6px)',
        backgroundColor: 'rgba(24, 23, 23, 0.021)',
    }

    const navigate = useNavigate()

    const handleMovie = (id) => {
        console.log(`/tv/${id}`); 
        navigate(`/tv/${id}`)
    }


    return (
        <>
            <MovieBackground 
                movies={movies} 
                currentIndex={currentIndex} 
                genreNamesByIds={genreNamesByIds}
            />
            <div className='px-6'>
                <h2 className='text-white text-[1.2rem] z-20 relative font-semibold mb-3'>
                    Ultimas Peliculas
                </h2>
                <Swiper
                    modules={[Pagination, Autoplay, Navigation]}
                    slidesPerView={2}
                    spaceBetween={10}
                    pagination={{
                        clickable: true,
                        el: ".swiper-paginacion",
                        renderBullet: function (index, className) {
                            return `<span class="${className} bg-white"></span>`;
                        },
                    }}
                    onSlideChange={handleSlideChange}
                    autoplay={{ delay: 5000 }}
                >
                    {movies?.map((movie) => (
                        <SwiperSlide key={movie.id} className='w-full'>
                            <div 
                                className='w-full cursor-pointer'
                                onClick={() => handleMovie(movie.id)}
                            >
                                <img
                                    src={`https://image.tmdb.org/t/p/w500/${movie?.poster_path}`}
                                    alt={movie.title}
                                    className='w-full h-[200px] object-cover'
                                />
                            </div>
                        </SwiperSlide>
                    ))}

                    {/* VER MAS */}
                    <SwiperSlide key={'ver-mas'} className='w-full'>
                        <div style={styleVerMas} className='w-full h-[200px] object-cover gap-2  text-white flex justify-center items-center'>
                            <span>VER MAS</span>
                            <BiRightArrowAlt/>
                        </div>
                    </SwiperSlide>
                </Swiper>
                <span className='my-4 block'></span>
                <div className='relative z-10 swiper-paginacion w-full text-center space-x-4'></div>
            </div>
        </>
    );
};

export default MovieSlider;
