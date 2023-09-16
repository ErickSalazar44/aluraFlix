import Vibrant from "node-vibrant/dist/vibrant";
import { useEffect, useState } from "react";

function Ligth({ img }) {
    const [primaryColor, setPrimaryColor] = useState("#000");

    useEffect(() => {
        let isMounted = true; // Variable para rastrear si el componente está montado

        if (img && !img.includes('undefined')) {
            const image = new Image();
            image.crossOrigin = "Anonymous"; // Para evitar problemas de CORS
            image.src = img;

            image.addEventListener("load", () => {
                if (!isMounted) {
                    return; // Si el componente se ha desmontado, no hagas nada
                }

                Vibrant.from(image)
                    .getPalette()
                    .then((palette) => {
                        const mutedColors = palette.Muted
                            ? palette.Muted.getHex()
                            : null;

                        // Establece el segundo color dominante como color
                        if (mutedColors) {
                            setPrimaryColor(mutedColors);
                        }
                    });
            });
        }

        // Función de limpieza
        return () => {
            isMounted = false; 
        };
    }, [img]);

    const styleColor = {
        backgroundImage: `linear-gradient(310deg, rgba(255, 255, 255, 0) 20%, ${primaryColor} 300%)`,
    };

    return (
        <div
            className='bg-gradiant absolute top-0 left-0 w-full h-full opacity-60'
            style={styleColor}
        ></div>
    );
}

export default Ligth;
