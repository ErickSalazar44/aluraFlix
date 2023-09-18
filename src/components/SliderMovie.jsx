// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { useNavigate } from "react-router-dom";
import { Navigation } from "swiper/modules";
import { viewNavigate } from "../utils/animationNavigate";
import { viewTransition } from "../utils/viewTransition";
import { getPosterUrl } from "../utils/getPosterUrl";

const SliderMovie = ({ movies, isMovie, nextEl, prevEl, pageId }) => {
    const navigate = useNavigate();

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
            slidesPerView: !pageId ? 7 : 6,
        },
        1800: {
            slidesPerView: !pageId ? 8 : 6,
        },
    };

    const windowWidth = window.innerWidth;

    return (
        movies &&
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
            {movies?.results.map((movie,i) => (
                <SwiperSlide key={movie.id}>
                    <div className='cursor-pointer transition duration-300 filter saturate-[0.9] hover:saturate-[1.1] border-transparent border-4 hover:border-cyan-600'>
                        <img
                            src={getPosterUrl(movie,windowWidth)}
                            alt={`imagen-${i}${movie?.id}`}
                            className='w-full aspect-[9/13] lg:h-72 object-cover'
                            onError={(e) => {
                                e.target.onError = null;
                                e.target.src = "/noImage.avif";
                                e.target.style.pointerEvents = "none";
                            }}
                            onClick={(e) => viewNavigate(`${isMovie}/${movie.id}`, navigate)}
                        />
                    </div>
                </SwiperSlide>
            ))}
        </Swiper>
    );
};

export default SliderMovie;
