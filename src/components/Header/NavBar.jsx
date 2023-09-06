import { GoSearch } from "react-icons/go";
import { AiOutlineMenu } from "react-icons/ai";

import { IoMdClose } from "react-icons/io";
import { MdKeyboardArrowRight } from "react-icons/md";
import { useEffect, useState } from "react";

export const NavBar = () => {
    const [isShowMenu, setisShowMenu] = useState(false);
    const [scrollY, setScrollY] = useState(0);

    const menuOpen = () => {
        setisShowMenu(!isShowMenu);
    };

    useEffect(() => {
        // Función para actualizar el valor de scrollY cuando se desplace la página
        const handleScroll = () => {
            setScrollY(window.scrollY);
        };
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const headerClass = scrollY > 100 ? "bg-navbar" : "bg-transparent";

    return (
        <header
            className={`transition-colors duration-300 ease-in-out fixed top-0 z-50 p-6 text-white w-full ${headerClass}`}
        >
            <div
                className={`text-colorMenu transition-all duration-500  z-50 absolute left-0 top-0 w-64 px-6 min-h-screen bg-navbar ${
                    isShowMenu ? "opacity-100" : "-translate-x-full opacity-0"
                }`}
            >
                <div className='h-20 flex items-center'>
                    <IoMdClose size={24} onClick={menuOpen} />
                </div>
                <div className='flex flex-col gap-5 font-normal text-lg mb-3'>
                    <div>
                        <a href='#'>Inicio</a>
                    </div>
                    <div>
                        <a href='#'>Series</a>
                    </div>
                    <div>
                        <a href='#'>Películas</a>
                    </div>
                    <div>
                        <a href='#'>Originales</a>
                    </div>
                    <div>
                        <a href='#'>Tendencias</a>
                    </div>
                    <div>
                        <a href='#'></a>
                    </div>
                </div>
                <div className='flex flex-col gap-4'>
                    <span className='w-full h-[1px] bg-colorMenu opacity-30'></span>
                    <div className='flex justify-between'>
                        <a href='#'>Generos</a>
                        <MdKeyboardArrowRight size={24} />
                    </div>
                    <span className='w-full h-[1px] bg-colorMenu opacity-30'></span>
                </div>
            </div>

            <div
                className={`absolute w-full z-10 right-0 top-0 min-h-screen bg-black opacity-40 ${
                    isShowMenu
                        ? "fade-out"
                        : "fade-in hidden"
                }`}
            ></div>

            <nav className='flex justify-between items-center'>
                <div className='cursor-pointer' onClick={menuOpen}>
                    <AiOutlineMenu size={24} />
                </div>
                <div className='w-32'>
                    <img src='/logo.png' alt='logo' />
                </div>
                <div
                    className='cursor-pointer'
                    onClick={() => console.log("ir a buscar peliculas")}
                >
                    <GoSearch size={24} />
                </div>
            </nav>
        </header>
    );
};
