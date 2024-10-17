interface TimerCardProps {
    bgClass: string;
    num: number;
}

export default function TimerCard({ bgClass, num }: TimerCardProps) {
    return (
        <div
            className={`inline-flex h-[104px] w-[72px] flex-col items-center justify-center gap-2.5 border-2 border-black py-1 shadow drop-shadow-2xl ${bgClass}`}
        >
            <div className="flex h-full w-full items-center justify-center text-center font-bangkok text-6xl text-black">
                {num}
            </div>
        </div>
    );
}
