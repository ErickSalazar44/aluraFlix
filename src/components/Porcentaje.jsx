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

    const radio = 40; // Radio del círculo
    const circunferencia = 2 * Math.PI * radio;
    const longitudDeRelleno = (`${percent}` / 100) * circunferencia;

    return (
        <div className='relative w-16 h-16'>
            <svg
                width='100%'
                height='100%'
                viewBox={`0 0 ${2 * radio} ${2 * radio}`}
                xmlns='http://www.w3.org/2000/svg'
            >
                <circle
                    cx={radio}
                    cy={radio}
                    r={radio - 2} // Radio del círculo - grosor del borde
                    fill='transparent'
                    stroke='#02131b' // Color del borde
                    strokeWidth='5' // Grosor del borde
                />
                <circle
                    cx={radio}
                    cy={radio}
                    r={radio - 2}
                    fill='transparent'
                    stroke='#3b85b1'
                    strokeWidth='5'
                    strokeDasharray={circunferencia}
                    strokeDashoffset={circunferencia - longitudDeRelleno}
                />
            </svg>
            <div className='absolute inset-0 text-[25px] flex items-center justify-center font-bold text-white'>
                <span>{percent}</span>
                <span className="text-xs">%</span>
            </div>
        </div>
    );
};

export default Porcentaje;
