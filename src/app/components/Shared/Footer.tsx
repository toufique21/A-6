import { Oswald } from "next/font/google";
import { FaDumbbell } from "react-icons/fa6";

const oswald = Oswald({
    subsets: ["latin"],
    weight: ["400", "500", "600", "700"],
});

const Footer = () => {
    return (
        <footer className="container mx-auto bg-[#000000] py-8 sm:py-10 shadow-2xs shadow-gray-900">
            <hr />
            <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
                
                <div className="flex items-center justify-center gap-2">
                    <div className="text-xl text-[#C2F800]">
                        <FaDumbbell />
                    </div>

                    <p className={`${oswald.className} py-3 text-4xl font-bold leading-tight text-white text-xl`}>
                        FITLOG
                    </p>
                </div>

                <p className="text-center text-xs text-gray-500 sm:text-right">
                    © 2026 FitLog — Workout Library. Train hard, log honest.
                </p>
            </div>
        </footer>
    );
};

export default Footer;