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
        <div className="mx-auto max-w-[1280px]">
            <h2 className='font-base mb-3 opacity-80 text-lg'>
                Más contenido como este
            </h2>
            <div className='relative'>
                {/* Botón Controller */}
                <SliderMovie movies={similares} isMovie={isMovie} nextEl={nextEl} prevEl={prevEl} pageId={true}/>
                <span ref={nextEl} className={` swiper-button-next absolute top-[60%] -right-8 transform -translate-y-1/2 w-8  text-white opacity-80 after:content-none`}>
                    <MdOutlineKeyboardArrowRight
                        size={40}
                    />
                </span>
                <span ref={prevEl} className={`swiper-button-prev absolute top-[60%] -left-8 transform -translate-y-1/2 w-8 text-white opacity-80 after:content-none`}>
                    <MdKeyboardArrowLeft size={40} />
                </span>
            </div>
        </div>
    );
};

export default Recomendaciones;
