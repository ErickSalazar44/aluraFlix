// recibe la ruta y el navigate

import { flushSync } from "react-dom";

export const viewNavigate = (nuevaRuta, navigate) => {
    window.scroll(0, 0);
    if (!document.startViewTransition) {
        return navigate(nuevaRuta);
    } else {
        return document.startViewTransition(() => {
            flushSync(() => navigate(nuevaRuta));
        });
    }
};
