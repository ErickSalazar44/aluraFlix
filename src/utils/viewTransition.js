import { flushSync } from "react-dom";

export const viewTransition = (ruta, navigate, e) => {
    const element = e.target;
    element.classList.add("full-embed");

    document.startViewTransition(async () => {
        element.style.viewTransitionName = "";
        flushSync(() => navigate(ruta));
    });
};
