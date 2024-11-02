'use client';

import { Tapes } from '@/const/tape';
import { STAMPS } from '@/const/stamp';
import Image from 'next/image';
import { CardMode } from '@/app/card/page';
import { cn } from '@/lib/utils';
const rotations = [-15, 10, 20, -40, -10, 10];
const translateX = [-10, 30, 0, -20, -20, 20];
const translateY = [-10, -20, 0, -10, 20, 20];

interface ChooseStampProps {
    stamps: number[];
    tapeColor?: string;
    selected?: number | null;
    phase?: CardMode;
    setSelected?: (n: number) => void;
}

export default function ChooseStamp(props: ChooseStampProps) {
    const {
        stamps,
        tapeColor = 'bg-project-yellow',
        selected,
        phase,
        setSelected,
    } = props;

    return (
        <section className="relative h-[195.39px] w-full max-w-[300px]">
            <Image
                src={Tapes[tapeColor as keyof typeof Tapes]}
                alt="background"
                fill
                className="absolute left-0 top-0 size-full object-contain"
            />

            <div className="z-1 relative grid h-full w-full grid-cols-3 grid-rows-2">
                {stamps.map((Stamp, index) => (
                    <div
                        key={index}
                        className={cn('grid place-items-center', {
                            'animate-pulse border-2 border-purple-500':
                                selected == index && phase === 'sticker',
                        })}
                        onClick={() => setSelected?.(index)}
                    >
                        {Stamp !== 0 && (
                            <Image
                                src={STAMPS[Stamp]}
                                className="h-4/5 w-4/5 overflow-hidden object-contain"
                                alt={`Stamp ${index + 1}`}
                                style={{
                                    padding: `0.${Math.abs(3 - index) * 3}5rem`,
                                    transform: `translate(${translateX[index]}%, ${translateY[index]}%) rotate(${rotations[index]}deg)`,
                                }}
                            />
                        )}
                    </div>
                ))}
            </div>
        </section>
    );
}
