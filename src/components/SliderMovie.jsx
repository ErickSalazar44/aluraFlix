// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { useNavigate } from "react-router-dom";




const SliderMovie = ({ movies, isMovie }) => {

    const navigate = useNavigate()

    const handleMovie = (id) => {

        navigate(`${isMovie}/${id}`)
    }

    const breakpoints = {
        300: {
            slidesPerView: 2,
        },
        600: {
            slidesPerView: 3,
        },
        800: {
            slidesPerView: 4,
        },
        1024: {
            slidesPerView: 5,
        },
        1200: {
            slidesPerView: 6,
        },
        1600: {
            slidesPerView: 7
        },
        1800: {
            slidesPerView: 8
        }
    };


    return (
        <Swiper breakpoints={breakpoints} spaceBetween={20} className='mySwiper'>
            {movies?.results.map((movie) => (
                <SwiperSlide key={movie.id}>
                    <div
                        className='cursor-pointer transition duration-300 filter saturate-[0.9] hover:saturate-[1.1] border-transparent border-2 hover:border-cyan-600'
                        onClick={() => handleMovie(movie.id)}
                    >
                        <img
                            src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                            alt={movie.name}
                        />
                    </div>
                </SwiperSlide>
            ))}
        </Swiper>
    );
};

export default SliderMovie;
