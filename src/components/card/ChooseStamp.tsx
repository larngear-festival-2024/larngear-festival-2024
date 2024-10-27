'use client';

import BG from '@public/card/bg.svg';
import Image from 'next/image';
import { CardMode } from '@/app/card/page';
const rotations = [-15, 0, 15, -15, 0, 15];

interface ChooseStampProps {
    stamps: string[];
    selected?: number | null;
    phase?: CardMode;
    setSelected?: (n: number) => void;
}

export default function ChooseStamp(props: ChooseStampProps) {
    const { stamps, selected, phase, setSelected } = props;

    return (
        <section className="relative h-[195.39px] w-full max-w-[300px]">
            <Image
                src={BG}
                alt="background"
                layout="fill"
                objectFit="cover"
                className="absolute left-0 top-0"
            />

            <div className="z-1 relative grid h-full w-full grid-cols-3 grid-rows-2">
                {stamps.map((Stamp, index) => (
                    <div
                        key={index}
                        className={`grid place-items-center ${selected === index && phase === 'sticker' ? 'animate-pulse border-2 border-purple-500' : ''}`}
                        onClick={() => setSelected?.(index)}
                    >
                        {Stamp !== '' && (
                            <Image
                                src={Stamp}
                                className="h-4/5 w-4/5 overflow-hidden object-contain"
                                alt={`Stamp ${index + 1}`}
                                style={{
                                    transform: `rotate(${rotations[index]}deg)`,
                                }}
                            />
                        )}
                    </div>
                ))}
            </div>
        </section>
    );
}
