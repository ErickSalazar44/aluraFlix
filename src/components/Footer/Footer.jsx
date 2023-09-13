import { BsLinkedin, BsGithub } from "react-icons/bs";

const Footer = () => {
    return (
        <footer className='text-white px-8 md:px-10 lg:px-12 2xl:px-16 py-8 mt-6'>
            <div className='flex flex-wrap justify-between opacity-80'>
                <ul className='flex gap-6'>
                    <li>
                        <BsLinkedin size={16} />
                    </li>
                    <li>
                        <BsGithub size={16} />
                    </li>
                </ul>
                <div>
                    <p className='text-xs font-medium'>Made with 💙 by Erick</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
