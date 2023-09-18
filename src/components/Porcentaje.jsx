import { useEffect, useState } from "react";

const Porcentaje = ({ movie }) => {
    const [percent, setPercent] = useState(0);

    useEffect(() => {
        if (movie?.vote_average) {
            const porcentaje = movie?.vote_average
            const raiting = Number(porcentaje?.toFixed(2).replace('.','').slice(0, 2))
            setPercent(raiting)
        }
    }, [movie]);

    const radio = 50; // Radio del círculo
    const circunferencia = 2 * Math.PI * radio;
    const longitudDeRelleno = (`${percent}` / 100) * circunferencia;

    return (
        <div className='relative w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 before:hover:opacity-100 before:transition-opacity before:opacity-0 before:text-xs before:rounded-sm before:py-1 before:px-2 before:bg-[#111] before:right-1/2 before:translate-x-1/2 before:-top-14 before:absolute before:content-["Puntuación_de_usuario"]'>
            <svg
                width='100%'
                height='100%'
                viewBox={`0 0 ${2 * radio} ${2 * radio}`}
                xmlns='http://www.w3.org/2000/svg'
                className="stroke-[5] lg:stroke-[6] "
            >
                <circle
                    cx={radio}
                    cy={radio}
                    r={radio - 2}
                    fill='transparent'
                    stroke='#3c4b8d'
                    strokeDasharray={circunferencia}
                    strokeDashoffset={circunferencia - longitudDeRelleno}
                />
            </svg>
            <div className='absolute inset-0 text-[25px] md:text-[28px] lg:text-3xl flex items-center justify-center font-bold text-white'>
                <span>{percent}</span>
                <span className="text-xs">%</span>
            </div>
        </div>
    );
};

export default Porcentaje;
