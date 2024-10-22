'use client';
import Button from '@/components/button';
import Logo from '@/components/logo';
import Tape from '@/components/tape';
import TimerCard from '@/components/timercard';
import { useEffect, useState } from 'react';
import { Icon } from '@iconify/react';
import Link from 'next/link';
import Footer from '@/components/footer';

const OPENING_TIME = +new Date(2024, 10, 7, 0, 0, 0, 0);

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
    const [timeLeft, setTimeLeft] = useState<TimeLeft | null>(null);
    const [timerReady, setTimerReady] = useState(false); // Track when the timer is ready

    useEffect(() => {
        // Only start the timer after the component mounts on the client
        setTimerReady(true);

        setTimeLeft(calculateTimeLeft(until));

        const interval = setInterval(() => {
            setTimeLeft(calculateTimeLeft(until));
        }, 1000);

        return () => clearInterval(interval);
    }, [until]);

    return (
        <div className="flex min-h-screen w-full flex-col items-center justify-between">
            {/* Main */}
            <div className="mt-[64px] flex h-[709px] w-[347px] flex-grow flex-col items-center justify-start">
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

                {/* Timer */}
                <div className="flex flex-col items-center">
                    <div className="mt-8 flex flex-row space-x-4">
                        <TimerCard
                            bgClass="bg-project-light-blue"
                            text={
                                timerReady
                                    ? String(timeLeft?.days ?? 0).padStart(
                                          2,
                                          '0'
                                      )
                                    : '--'
                            }
                        />
                        <TimerCard
                            bgClass="bg-project-yellow"
                            text={
                                timerReady
                                    ? String(timeLeft?.hours ?? 0).padStart(
                                          2,
                                          '0'
                                      )
                                    : '--'
                            }
                        />
                        <TimerCard
                            bgClass="bg-project-pink"
                            text={
                                timerReady
                                    ? String(timeLeft?.minutes ?? 0).padStart(
                                          2,
                                          '0'
                                      )
                                    : '--'
                            }
                        />
                        <TimerCard
                            bgClass="bg-project-dark-green"
                            text={
                                timerReady
                                    ? String(timeLeft?.seconds ?? 0).padStart(
                                          2,
                                          '0'
                                      )
                                    : '--'
                            }
                        />
                    </div>
                    {/* Timer labels */}
                    <div className="mt-8 flex h-[32px] w-[283px] items-center justify-center rounded-md bg-project-yellow text-center font-sov text-xl text-black">
                        {timeLeft?.days && timeLeft?.days > 1
                            ? 'DAYS '
                            : 'DAY '}{' '}
                        : HOURS : MINUTES : SECONDS
                    </div>
                </div>
            </div>

            {/* Footer */}
            <Footer />
        </div>
    );
}
