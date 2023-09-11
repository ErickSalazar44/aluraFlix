// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { useNavigate } from "react-router-dom";




const SliderMovie = ({ movies, isMovie }) => {

    const navigate = useNavigate()

    const handleMovie = (id) => {
        console.log(`${isMovie}/${id}`); 
        navigate(`${isMovie}/${id}`)
    }

    return (
        <Swiper slidesPerView={2} spaceBetween={11} className='mySwiper'>
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
