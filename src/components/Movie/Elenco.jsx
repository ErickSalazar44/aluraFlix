// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import "swiper/css";
import "swiper/css/scrollbar";

// import required modules
import { Scrollbar } from "swiper/modules";

const Elenco = ({ elenco }) => {
    return (
        <div className='overflow-hidden'>
            <h3 className='opacity-80 mb-4 text-lg'>Reparto de la serie</h3>
            <Swiper
                slidesPerView={2}
                scrollbar={{
                    el: '.swiper-scrollbar',
                    hide: true,
                    dragSize: 100,
                    draggable: true,
                }}
                spaceBetween={20}
                centeredSlides={false}
                modules={[Scrollbar]}
                className='mySwiper flex items-center justify-center'
            >
            <div className='swiper-scrollbar bg-white opacity-0'></div>
                {elenco?.cast?.slice(0, 10).map((actor) => (
                    <div key={`${actor.id}`}>
                        <SwiperSlide key={actor.id}>
                            <div className='relative max-w-[170px] overflow-hidden  rounded-xl'>
                                <div className='absolute w-full h-full bg-yGradiant opacity-80'></div>
                                <img
                                    className='my-0 mx-auto  rounded-xl w-full  object-contain'
                                    src={`https://image.tmdb.org/t/p/w500/${actor.profile_path}`}
                                    alt={actor.original_name}
                                />
                                <p className='font-semibold w-full absolute bottom-2 text-center'>
                                    {actor.name}
                                </p>
                            </div>
                        </SwiperSlide>
                    </div>
                ))}
            </Swiper>
        </div>
    );
};

export default Elenco;
