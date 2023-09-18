// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/scrollbar";

// import required modules
import { Scrollbar } from "swiper/modules";
import { useState } from "react";

const Elenco = ({ elenco }) => {
    const [modal, setModal] = useState(false);
    const [indexModal, setIndexModal] = useState(0);

    const breakpoints = {
        0: {
            slidesPerView: 2,
        },
        500: {
            slidesPerView: 3,
        },
        700: {
            slidesPerView: 4,
        },
        1024: {
            slidesPerView: 5,
        },
        1200: {
            slidesPerView: 6,
        }
    };

    const openModal = (index) => {
        setIndexModal(index);
        setModal(true);
    };

    return (
        <div className='overflow-hidden'>
            <h3 className='opacity-80 mb-4 text-lg'>Reparto de la serie</h3>
            <Swiper
                breakpoints={breakpoints}
                scrollbar={{
                    el: ".swiper-scrollbar",
                    hide: true,
                    dragSize: 100,
                    draggable: true,
                }}
                spaceBetween={10}
                centeredSlides={false}
                modules={[Scrollbar]}
                className='mySwiper flex items-center justify-center'
            >
                <div className='swiper-scrollbar bg-white opacity-0'></div>
                {elenco?.cast?.slice(0, 10).map((actor, i) => {
                    return (
                        <SwiperSlide key={actor.id}>
                            <div
                                onClick={() => {
                                    openModal(i)
                                }}
                                className='relative max-w-[170px] overflow-hidden  rounded-xl'
                            >
                                <div className='absolute w-full h-full bg-yGradiant opacity-80'></div>
                                <img
                                    className='my-0 mx-auto  rounded-xl w-full  object-contain'
                                    src={actor?.profile_path ? `https://image.tmdb.org/t/p/w500/${actor.profile_path}` : 'noImage.avif'}
                                    alt={actor?.original_name}
                                    onError={(e) => {
                                        e.target.onError = null;
                                        e.target.src = "/noImage.avif";
                                        e.target.style.pointerEvents = "none";
                                    }}
                                />
                                <p className='font-semibold w-full absolute bottom-2 text-center'>
                                    {actor.name}
                                </p>
                            </div>
                        </SwiperSlide>
                    );
                })}
            </Swiper>
            {modal && (
                <div className='fixed w-full min-h-screen top-0 left-0 z-[60] flex justify-center items-center'>
                    <div
                        onClick={() => setModal(false)}
                        className='absolute w-full min-h-screen bg-black opacity-80 z-10'
                    ></div>
                    <div className='relative z-[70] flex justify-center items-center'>
                        <div className='absolute w-full h-full bg-yGradiantModal opacity-80'></div>
                        <img
                            className='w-[300px] md:w-[350px] rounded'
                            src={elenco?.cast?.[indexModal].profile_path ? `https://image.tmdb.org/t/p/w500/${elenco?.cast[indexModal].profile_path}` : '/noImage.avif'}
                            alt={elenco?.cast?.[indexModal].original_name}
                        />
                        <div className='absolute bottom-4'>
                            <p>{elenco?.cast[indexModal].character}</p>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Elenco;
