export default function Test() {
    return (
        <div className="flex min-h-screen flex-col items-center justify-items-center p-8 sm:p-20">
            <div className="text-4xl">font thai</div>
            <div className="flex">
                <div className="h-40 w-40 border bg-teal-300 font-bangkok text-4xl font-bold text-black">
                    สวัสดีครับ <br /> bold
                </div>
                <div className="h-40 w-40 border bg-teal-300 font-bangkok text-4xl font-bold italic text-black">
                    สวัสดีครับ <br /> bold italic
                </div>
                <div className="h-40 w-40 border bg-teal-300 font-bangkok text-4xl text-black">
                    สวัสดีครับ <br /> normal
                </div>
                <div className="h-40 w-40 border bg-teal-300 font-bangkok text-4xl italic text-black">
                    สวัสดีครับ <br /> normal italic
                </div>
            </div>
            <div className="text-4xl">
                font english == this font is borken lol
            </div>
            <div className="flex">
                <div className="h-40 w-40 border bg-teal-300 font-sov text-4xl text-black">
                    hello <br /> normal
                </div>
                <div className="h-40 w-40 border bg-teal-300 font-sov text-4xl font-bold text-black">
                    hello <br /> bold
                </div>
                <div className="h-40 w-40 border bg-teal-300 font-sov text-4xl italic text-black">
                    hello <br /> italic
                </div>
            </div>
            <div className="text-4xl">color</div>
            <div className="flex">
                <div className="flex h-40 w-40 items-center justify-center bg-project-dark-blue">
                    bg-project-dark-blue
                </div>
                <div className="flex h-40 w-40 items-center justify-center bg-project-light-blue">
                    bg-project-light-blue
                </div>
                <div className="flex h-40 w-40 items-center justify-center bg-project-dark-green">
                    bg-project-dark-green
                </div>
                <div className="flex h-40 w-40 items-center justify-center bg-project-red-orange">
                    bg-project-red-orange
                </div>
                <div className="flex h-40 w-40 items-center justify-center bg-project-pink">
                    bg-project-pink
                </div>
                <div className="flex h-40 w-40 items-center justify-center bg-project-yellow">
                    bg-project-yellow
                </div>
            </div>
        </div>
    );
}
