// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { useNavigate } from "react-router-dom";
import { Navigation } from "swiper/modules";




const SliderMovie = ({ movies, isMovie, nextEl, prevEl }) => {

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
        900: {
            slidesPerView: 4,
        },
        1100: {
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
        <Swiper
            modules={[Navigation]}
            breakpoints={breakpoints} 
            spaceBetween={20} 
            className='mySwiper'
            navigation={{
                nextEl: nextEl.current,
                prevEl: prevEl.current,
            }}
        >
            {movies?.results.map((movie) => (
                <SwiperSlide key={movie.id}>
                    <div
                        className='cursor-pointer transition duration-300 filter saturate-[0.9] hover:saturate-[1.1] border-transparent border-4 hover:border-cyan-600'
                        
                    >
                        <img
                            src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                            alt={movie.name}
                            className="w-full aspect-[9/13] lg:h-72 object-cover"
                            onError={(e) => {
                                e.target.onError = null;
                                e.target.src = '/noImage.avif'
                                e.target.style.pointerEvents = "none";
                            }}
                            onClick={() => handleMovie(movie.id)}
                        />
                    </div>
                </SwiperSlide>
            ))}
        </Swiper>
    );
};

export default SliderMovie;
