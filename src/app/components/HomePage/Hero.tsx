
import Image from "next/image";
import image from "@/app/assets/banner.png";
import { Oswald } from "next/font/google";

const oswald = Oswald({
    subsets: ["latin"],
    weight: ["400", "500", "600", "700"],
});

const HeroPage = () => {
    return (
        <div className="container mx-auto mb-1 px-2 py-6 sm:px-2 py-8  lg:px-2 py-12">
            <div className="flex flex-col items-center justify-between gap-10 rounded-2xl border border-[#222630] bg-[#15171D] p-6 sm:p-8 lg:flex-row lg:p-12">

                <div className="w-full text-center lg:w-1/2 lg:text-left">

                    <p className="py-3 text-xs font-semibold text-[#C2F800]">
                        WORKOUT LIBRARY
                    </p>

                    <h2
                        className={`${oswald.className} py-3 text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-5xl`}
                    >
                        TRAIN WITH INTENT.LOG
                        <br className="hidden sm:block" />
                        {" "}EVERY SET.
                    </h2>

                    <p className="mb-8 text-sm leading-6 text-gray-400 sm:text-base">
                        FitLog is a dark, no-nonsense gym companion: pick a lift,
                        lock it into today&apos;s plan, and watch the week&apos;s
                        work add up.
                    </p>

                    <a
                        href="#library"
                        className="inline-block rounded-xl bg-[#C2F800] px-6 py-3 text-xs font-bold text-black transition hover:bg-[#d5ff4d] sm:px-8 sm:py-4"
                    >
                        BROWSE WORKOUTS
                    </a>
                </div>

                <div className="flex w-full justify-center lg:w-1/2 lg:justify-end">
                    <Image
                        src={image}
                        alt="FitLog workout illustration"
                        width={350}
                        priority
                        className="h-auto w-56 sm:w-72 lg:w-[350px]"
                    />
                </div>

            </div>
        </div>
    );
};

export default HeroPage;
