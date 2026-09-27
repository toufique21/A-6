import Link from "next/link"
import { FaDumbbell } from "react-icons/fa6"

const NotFound = () => {
    return (
        <main className="min-h-[70vh] bg-[#15171D] px-5 py-20">
            <div className="mx-auto flex max-w-3xl flex-col items-center justify-center text-center">
                <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-2xl border border-[#C2F800]/20 bg-[#C2F800]/10"> <FaDumbbell className="text-4xl text-[#C2F800]" /></div>
                <h1 className="text-8xl font-black tracking-tight text-[#C2F800] sm:text-9xl"> 404 </h1>
                <h2 className="mt-4 text-2xl font-bold text-white sm:text-3xl"> Page Not Found </h2>
                <p className="mt-3 max-w-md text-sm leading-6 text-gray-400 sm:text-base"> Looks like you took a wrong turn. The page you are looking for doesn&apos;t exist or may have been moved. </p>
                <Link href="/" className="mt-8 rounded-lg bg-[#C2F800] px-6 py-3 text-sm font-bold text-[#15171D] transition hover:bg-[#d5ff4d] hover:shadow-lg hover:shadow-[#C2F800]/20" > Back to Workouts </Link>
                <p className="mt-6 text-xs text-gray-600"> Keep training. Keep logging. </p>
            </div>
        </main>
    )
}
