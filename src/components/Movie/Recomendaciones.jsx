import { useRef } from "react";
import SliderMovie from "../SliderMovie";
import {
    MdKeyboardArrowLeft,
    MdOutlineKeyboardArrowRight,
} from "react-icons/md";

const Recomendaciones = ({ similares, isMovie }) => {
    if (similares?.results.length === 0) {
        return <></>;
    }
    const nextEl = useRef(null);
    const prevEl = useRef(null);

    return (
        <div>
            <h2 className='font-base mb-3 opacity-80 text-lg'>
                Más contenido como este
            </h2>
            <div className='relative'>
                {/* Botón Controller */}
                <SliderMovie movies={similares} isMovie={isMovie} nextEl={nextEl} prevEl={prevEl}/>
                <div
                    ref={nextEl}
                    className={` swiper-button-next absolute top-[60%] -right-6 transform -translate-y-1/2 w-8  text-white opacity-80 after:content-none`}
                >
                    <MdOutlineKeyboardArrowRight size={40} />
                </div>
                <div
                    ref={prevEl}
                    className={`swiper-button-prev absolute top-[60%] -left-6 transform -translate-y-1/2 w-8 text-white opacity-80 after:content-none`}
                >
                    <MdKeyboardArrowLeft size={40} />
                </div>
            </div>
        </div>
    );
};

export default Recomendaciones;
