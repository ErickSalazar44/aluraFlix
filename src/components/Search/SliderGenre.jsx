// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Autoplay } from "swiper/modules";

const SliderGenre = ({ genres, setUserGenre }) => {
    const breakpoints = {
        0: {
            slidesPerView: 3,
        },
        600: {
            slidesPerView: 4,
        },
        800: {
            slidesPerView: 5,
        },
        1024: {
            slidesPerView: 6,
        },
        1400: {
            slidesPerView: 7,
        },
        1500: {
            slidesPerView: 8,
        },
    };

    return (
        <div className='text-white'>
            <Swiper
                spaceBetween={20}
                modules={[Autoplay]}
                className='mySwiper'
                autoplay={{ delay: 4000 }}
                breakpoints={breakpoints}
            >
                {genres?.map((genre) => (
                    <SwiperSlide
                        onClick={() => setUserGenre(genre.id)}
                        className='text-xs sm:text-sm xl:text-base lg:font-semibold cursor-pointer border-opacity-30 border border-white rounded-xl h-[30px] md:h-[33px] flex justify-center items-center'
                        key={genre.id}
                    >
                        {genre.name}
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default SliderGenre;
