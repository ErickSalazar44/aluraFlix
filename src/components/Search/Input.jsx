import { GoSearch } from "react-icons/go";
export const Input = ({text}) => {
    return (
        <form className=' relative w-full'>
            <input
                type='text'
                className='w-full h-[68px] text-lg rounded bg-zinc-900 text-white text-opacity-80 pl-12 placeholder:text-lg outline-none placeholder:text-white placeholder:opacity-60 placeholder:tracking-wide focus:bg-[#1B1A20]'
                placeholder={text}
            />
            <GoSearch
                className='absolute top-[50%] transform -translate-y-1/2 left-3'
                size={25}
                color='white'
            />
        </form>
    );
};
