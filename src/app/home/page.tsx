'use client';
import Button from '@/components/button';
import Logo from '@/components/logo';
import Tape from '@/components/tape';
import TimerCard from '@/components/timercard';
import { log } from 'console';
import { useEffect, useState } from 'react';

const OPENING_TIME = +new Date(2024, 9, 18, 0, 0, 0, 0);

interface TimeLeft {
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
}

const calculateTimeLeft: (time: number) => TimeLeft | null = (time) => {
    const timeDiff = time - +new Date();

    const dayLeft = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
    const hourLeft = Math.floor((timeDiff / (1000 * 60 * 60)) % 24);
    const minuteLeft = Math.floor((timeDiff / 1000 / 60) % 60);
    const secondLeft = Math.floor((timeDiff / 1000) % 60);

    console.log(dayLeft);
    if (timeDiff > 0) {
        return {
            days: dayLeft,
            hours: hourLeft,
            minutes: minuteLeft,
            seconds: secondLeft,
        };
    } else {
        return null;
    }
};

export default function Home({ until = OPENING_TIME }: { until?: number }) {
    const [timeLeft, setTimeLeft] = useState<TimeLeft | null>(
        calculateTimeLeft(until)
    );

    useEffect(() => {
        const interval = setInterval(() => {
            setTimeLeft(calculateTimeLeft(until));
        }, 1000);

        return () => clearInterval(interval);
    }, [until]);

    return (
        <div className="flex h-screen w-full flex-col items-center justify-between overflow-y-auto">
            {/* Main */}
            <div className="mb-[71px] mt-[64px] flex h-[709px] w-[347px] flex-grow flex-col items-center justify-start">
                <div className="mt-4 flex justify-center">
                    <Logo />
                </div>
                <div className="relative flex h-[211px] w-[307px] flex-col items-center p-[32px]">
                    <div className="absolute">
                        <Tape size={300} />
                    </div>
                </div>
                <div className="z-20">
                    <Button className="-mt-[66px] h-[65px] w-[263px] justify-center bg-project-dark-blue text-4xl text-white">
                        เริ่มต้น
                    </Button>
                </div>

                <div className="flex flex-col items-center">
                    <div className="mt-8 flex flex-row space-x-4">
                        <TimerCard
                            bgClass="bg-project-light-blue"
                            num={timeLeft?.days ?? 0}
                        />
                        <TimerCard
                            bgClass="bg-project-yellow"
                            num={timeLeft?.hours ?? 0}
                        />
                        <TimerCard
                            bgClass="bg-project-pink"
                            num={timeLeft?.minutes ?? 0}
                        />
                        <TimerCard
                            bgClass="bg-project-dark-green"
                            num={timeLeft?.seconds ?? 0}
                        />
                    </div>
                    <div className="text-1xl mt-8 flex h-[32px] w-[283px] items-center justify-center rounded-md bg-project-yellow text-center font-sov text-black">
                        DAYS : HOURS : MINUTES : SECONDS
                    </div>
                </div>
            </div>

            {/* Footer */}
            <div className="text-1xl flex h-[52px] w-full flex-col items-center justify-center gap-2.5 rounded-tl-lg rounded-tr-lg bg-project-yellow px-[104px] py-4 font-sov text-black">
                [icon] @larngearfest2024
            </div>
        </div>
    );
}
