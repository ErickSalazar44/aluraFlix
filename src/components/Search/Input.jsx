import { GoSearch } from "react-icons/go";
export const Input = ({ text, inputValue, setInputValue, goSearch }) => {
    const handleValueInput = (value) => {
        setInputValue(value);
    };

    return (
        <form className='relative w-full md:mt-6' onSubmit={(e) => goSearch(e)}>
            <input
                type='text'
                className='w-full h-[68px] text-lg rounded bg-zinc-900 text-white text-opacity-80 pl-12 placeholder:text-lg outline-none placeholder:text-white placeholder:opacity-60 placeholder:tracking-wide focus:bg-[#1B1A20]'
                placeholder={text}
                onChange={(e) => handleValueInput(e.target.value)}
                value={inputValue}
            />
            <GoSearch
                className='absolute top-[50%] transform -translate-y-1/2 left-3'
                size={25}
                color='white'
            />
        </form>
    );
};
