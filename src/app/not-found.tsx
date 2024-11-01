import Link from 'next/link';

export default function NotFound() {
    return (
        <div className="h-screen w-full">
            <div className="flex size-full flex-col items-center justify-center gap-y-4 text-2xl">
                <h1 className="text-center text-6xl">Not found - 404!</h1>
                <Link href="/">
                    <button className="rounded-xl border-2 border-black bg-project-dark-blue p-2 px-8 text-white shadow-sm">
                        Go back to Home
                    </button>
                </Link>
                <Link href="https://www.instagram.com/larngearfest2024/">
                    <button className="rounded-xl border-2 border-black bg-project-pink p-2 px-8 text-white shadow-sm">
                        Go to LarngearFest Instagram
                    </button>
                </Link>
                <Link href="https://youtu.be/dQw4w9WgXcQ?si=aazalLmbc_TOBYe7">
                    <button className="text-white underline">Nice link!</button>
                </Link>
            </div>
        </div>
    );
}
