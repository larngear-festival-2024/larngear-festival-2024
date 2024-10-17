interface TimerCardProps {
    bgClass: string;
    text: string;
}

export default function TimerCard({ bgClass, text }: TimerCardProps) {
    return (
        <div
            className={`inline-flex h-[104px] w-[72px] flex-col items-center justify-center gap-2.5 border-2 border-black py-1 shadow drop-shadow-2xl ${bgClass}`}
        >
            <div className="flex h-full w-full items-center justify-center text-center font-bangkok text-6xl text-black">
                {text}
            </div>
        </div>
    );
}
