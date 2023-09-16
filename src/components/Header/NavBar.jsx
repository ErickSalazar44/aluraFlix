import { GoSearch } from "react-icons/go";
import { AiOutlineMenu } from "react-icons/ai";

import { IoMdClose } from "react-icons/io";
import { MdKeyboardArrowRight } from "react-icons/md";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setType } from "../../store/slices/typeMovieSlice";
import { viewNavigate } from "../../utils/animationNavigate";

export const NavBar = () => {
    const dispatch = useDispatch();
    const searchType = useSelector((state) => state.type);

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

    const headerClass =
        scrollY > 50
            ? "bg-navbar translate-y-[0%]"
            : "bg-transparent -translate-y-full";

    const handleSearchTypeChange = (searchType = "movie") => {
        dispatch(setType(searchType));
        setisShowMenu(!isShowMenu);
    };

    const navigate = useNavigate();

    return (
        <>
            <header className={`fixed top-0 z-50 text-white w-full`}>
                <div
                    className={`absolute top-0 left-0 w-full h-[74.5px] lg:h-[84px] z-40 ${headerClass} transition-all duration-500 ease-in-out opacity-[0.96] `}
                ></div>
                <nav className='relative top-0 left-0 w-full h-[74.5px] lg:h-[84px] flex justify-between items-center z-50 px-8 md:px-10 lg:px-12 2xl:px-16'>
                    <div className=' flex justify-center gap-7 lg:relative'>
                        <AiOutlineMenu
                            onClick={menuOpen}
                            className='w-[24px] h-[24px] cursor-pointer text-neutral-400 '
                        />
                        <div className='hidden lg:flex lg:gap-7 lg:font-bold lg:absolute lg:left-14 lg:text-neutral-400 '>
                            <a
                                className={`hover:text-white hover:opacity-100 transition-colors duration-300 cursor-pointer ${
                                    searchType === "movie" &&
                                    "text-white opacity-100"
                                }`}
                                onClick={() => {
                                    viewNavigate("/search", navigate);
                                    dispatch(setType("movie"));
                                }}
                            >
                                Películas
                            </a>
                            <a
                                className={`hover:text-white hover:opacity-100 transition-colors duration-300 cursor-pointer ${
                                    searchType === "tv" &&
                                    "text-white opacity-100"
                                }`}
                                onClick={() => {
                                    viewNavigate("/search", navigate);
                                    dispatch(setType("tv"));
                                }}
                            >
                                Series
                            </a>
                        </div>
                    </div>
                    <div className='w-28 lg:w-36'>
                        <img
                            className='cursor-pointer'
                            onClick={() => viewNavigate("/", navigate)}
                            src='/logo.webp'
                            alt='logo'
                        />
                    </div>
                    <div className='cursor-pointer'>
                        <a onClick={() => viewNavigate("/search", navigate)}>
                            <GoSearch className='w-[24px] h-[24px] cursor-pointer text-neutral-100 ' />
                        </a>
                    </div>
                </nav>
            </header>
            <div
                className={`text-colorMenu transition-all duration-500  z-50 fixed left-0 top-0 w-64 px-6 lg:w-96 lg:px-10 2xl:px-16 min-h-screen bg-navbar ${
                    isShowMenu ? "opacity-100" : "-translate-x-full opacity-0"
                }`}
            >
                <div className='h-20 flex items-center'>
                    <IoMdClose
                        className='w-[24px] h-[24px] lg:w-[26px] lg:h-[26px] cursor-pointer'
                        onClick={menuOpen}
                    />
                </div>
                <div className='flex  flex-col gap-5 font-normal text-lg lg:text-2xl lg:gap-8 mb-3'>
                    <div>
                        <a
                            className={`hover:text-white hover:opacity-100 transition-colors duration-300`}
                            to='/'
                            onClick={() => {
                                handleSearchTypeChange("tv");
                                viewNavigate("/", navigate);
                            }}
                        >
                            Inicio
                        </a>
                    </div>
                    <div>
                        <a
                            className={`hover:text-white hover:opacity-100 transition-colors duration-300`}
                            to='/search'
                            onClick={() => {
                                handleSearchTypeChange("tv");
                                viewNavigate("/search", navigate);
                            }}
                        >
                            Series
                        </a>
                    </div>
                    <div>
                        <a
                            className='hover:text-white hover:opacity-100 transition-colors duration-300'
                            to='/search'
                            onClick={() => {
                                handleSearchTypeChange("movie");
                                viewNavigate("/search", navigate);
                            }}
                        >
                            Películas
                        </a>
                    </div>
                    <div>
                        <a
                            className='hover:text-white hover:opacity-100 transition-colors duration-300'
                            to='/search'
                            onClick={() => {
                                handleSearchTypeChange("movie");
                                viewNavigate("/search", navigate);
                            }}
                        >
                            Originales
                        </a>
                    </div>
                    <div>
                        <a
                            className='hover:text-white hover:opacity-100 transition-colors duration-300'
                            to='/search'
                            onClick={() => {
                                handleSearchTypeChange("movie");
                                viewNavigate("/search", navigate);
                            }}
                        >
                            Tendencias
                        </a>
                    </div>
                    <div>
                        <a
                            className='hover:text-white hover:opacity-100 transition-colors duration-300'
                            to='/search'
                            onClick={() => {
                                handleSearchTypeChange("movie");
                                viewNavigate("/search", navigate);
                            }}
                        >
                            Ver mas
                        </a>
                    </div>
                </div>
                <div className='flex flex-col gap-4 mt-8'>
                    <span className='w-full h-[1px] bg-colorMenu opacity-30'></span>
                    <div className='flex justify-between lg:text-2xl lg:gap-8 items-center'>
                        <a
                            className='hover:text-white hover:opacity-100 transition-colors duration-300'
                            onClick={() => {
                                handleSearchTypeChange("movie");
                                viewNavigate("/search", navigate);
                            }}
                        >
                            Géneros
                        </a>
                        <MdKeyboardArrowRight size={24} />
                    </div>
                    <span className='w-full h-[1px] bg-colorMenu opacity-30'></span>
                </div>
            </div>
            <div
                onClick={menuOpen}
                className={`fixed w-full z-[60] right-0 top-0 min-h-screen bg-black opacity-40 ${
                    isShowMenu ? "fade-out" : "fade-in hidden"
                }`}
            ></div>
        </>
    );
};
