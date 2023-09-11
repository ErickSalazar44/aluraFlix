import { GoSearch } from "react-icons/go";
import { AiOutlineMenu } from "react-icons/ai";

import { IoMdClose } from "react-icons/io";
import { MdKeyboardArrowRight } from "react-icons/md";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

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

    const headerClass = scrollY > 100 ? "bg-navbar translate-y-[0%]" : "bg-transparent -translate-y-full";

    return (
        <>
            <header
                className={`fixed top-0 z-50 p-6 text-white w-full`}
            >
                <div className={`absolute top-0 left-0 w-full h-[74.5px] z-40 ${headerClass} transition-all duration-500 ease-in-out opacity-[95] `}></div>
                <nav className='absolute top-0 left-0 w-full h-[74.5px] flex justify-between items-center opacity-95 z-50 px-6'>
                    <div className='cursor-pointer' onClick={menuOpen}>
                        <AiOutlineMenu size={24} />
                    </div>
                    <div className='w-28'>
                        <Link to='/'>
                            <img src='/logo.webp' alt='logo' />
                        </Link>
                    </div>
                    <div
                        className='cursor-pointer'
                        onClick={() => console.log("ir a buscar peliculas")}
                    >   
                        <Link to='/search'>
                            <GoSearch size={24} />
                        </Link>
                    </div>
                </nav>
            </header>
                <div
                    className={`text-colorMenu transition-all duration-500  z-50 fixed left-0 top-0 w-64 px-6 min-h-screen bg-navbar ${
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
                            <a href='#'>Ver mas</a>
                        </div>
                    </div>
                    <div className='flex flex-col gap-4 mt-8'>
                        <span className='w-full h-[1px] bg-colorMenu opacity-30'></span>
                        <div className='flex justify-between'>
                            <a href='#'>Generos</a>
                            <MdKeyboardArrowRight size={24} />
                        </div>
                        <span className='w-full h-[1px] bg-colorMenu opacity-30'></span>
                    </div>
                </div>
                <div
                    className={`fixed w-full z-10 right-0 top-0 min-h-screen bg-black opacity-40 ${
                        isShowMenu
                            ? "fade-out"
                            : "fade-in hidden"
                    }`}
                ></div>
        </>
    );
};
