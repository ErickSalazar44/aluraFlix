// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";


// import required modules
import { EffectCoverflow, Pagination } from "swiper/modules";

const Elenco = ({ elenco }) => {
    return (
        <div className=''>
            <h3 className="opacity-80 mb-4 text-lg">Reparto de la serie</h3>
            <Swiper
                effect={"coverflow"}
                grabCursor={true}
                centeredSlides={false}
                slidesPerView={2}
                coverflowEffect={{
                    rotate: 0,
                    stretch: '-10px',
                    depth: 100,
                    modifier: 1,
                }}
                modules={[EffectCoverflow, Pagination]}
                className='mySwiper'
            >
                {elenco?.cast?.slice(0, 10).map((actor) => (
                    <div key={`${actor.id}`}>
                        <SwiperSlide key={actor.id}>
                            <div className="relative max-w-[160px] overflow-hidden  rounded-xl">
                                <div className="absolute w-full h-full bg-yGradiant opacity-80"></div>
                                <img
                                    className='my-0 mx-auto  rounded-xl   object-cover'
                                    src={`https://image.tmdb.org/t/p/w500/${actor.profile_path}`}
                                    alt={actor.original_name}
                                />
                                <p className="font-semibold w-full absolute bottom-2 text-center">{actor.name}</p>
                            </div>
                        </SwiperSlide>
                    </div>
                ))}
            </Swiper>
        </div>
    );
};

export default Elenco;
