import { FaDumbbell } from "react-icons/fa6";


const Footer = () => {
    return (
        <div className='container bg-[#000000] mx-auto flex justify-between px-5 py-10 shadow-2xs shadow-gray-900'>
            <div className='flex justify-center items-center gap-2'>
                <div className='text-[#C2F800] text-xl'><FaDumbbell /></div>
                <p className='font-bold font-sans text-sm text-white'>FITLOG</p>
            </div>
            <p className='text-xs text-gray-500'>
                © 2026 FitLog — Workout Library. Train hard, log honest.
            </p>
        </div>
    );
};

export default Footer;