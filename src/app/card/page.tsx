'use client';
import Border from '@/components/border';
import Name from '@/components/card/Name';
import Share from '@/components/card/Share';
import Sticker from '@/components/card/Sticker';
import BG from '@public/card/bg.svg';
import Stamp1 from '@public/card/stamp1.svg';
import Stamp2 from '@public/card/stamp2.svg';
import Stamp3 from '@public/card/stamp3.svg';
import Stamp4 from '@public/card/stamp4.svg';
import Stamp5 from '@public/card/stamp5.svg';
import Stamp6 from '@public/card/stamp6.svg';
import Stamp7 from '@public/card/stamp7.svg';
import Stamp8 from '@public/card/stamp8.svg';
import Stamp9 from '@public/card/stamp9.svg';
import Stamp10 from '@public/card/stamp10.svg';
import Stamp11 from '@public/card/stamp11.svg';
import Stamp12 from '@public/card/stamp12.svg';
import Stamp13 from '@public/card/stamp13.svg';
import Logo from '@public/logo.svg';
import Image from 'next/image';
import React, { useState } from 'react';

type CardMode = 'sticker' | 'name' | 'share';

const Stamps = [
    Stamp1,
    Stamp2,
    Stamp3,
    Stamp4,
    Stamp5,
    Stamp6,
    Stamp7,
    Stamp8,
    Stamp9,
    Stamp10,
    Stamp11,
    Stamp12,
    Stamp13,
];
const phases: CardMode[] = ['sticker', 'name', 'share'];
const rotations = [-15, 0, 15, -15, 0, 15];

export default function Card() {
    const [phase, setPhase] = useState<CardMode>('sticker');
    const [selected, setSelected] = useState<number | null>(null);
    const [name, setName] = useState<string>('');
    const [stamps, setStamps] = useState<string[]>(['', '', '', '', '', '']);

    const handleNextPhase = () => {
        setPhase((prevPhase) => {
            const currentIndex = phases.indexOf(prevPhase);
            const nextIndex = (currentIndex + 1) % phases.length;
            return phases[nextIndex];
        });
    };

    const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
        setName(event.currentTarget.value);
    };

    const handleSelectedStamp = (index: number, sticker: string) => {
        const newStamp = [...stamps];
        newStamp[index] = sticker;
        setStamps(newStamp);
    };

    return (
        <Border>
            <main className="flex flex-col items-center justify-center gap-9 p-2">
                <Image
                    src={Logo}
                    alt="logo"
                    width={phase === 'share' ? 158 : 84.54}
                    height={phase === 'share' ? 176 : 94.38}
                />
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
                                onClick={() => setSelected(index)}
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
                {phase === 'sticker' && (
                    <Sticker
                        stickers={Stamps}
                        selected={selected}
                        handleSelected={setSelected}
                        handleStamps={handleSelectedStamp}
                    />
                )}
                {phase === 'name' && (
                    <Name
                        name={name}
                        handleKeyPressed={handleKeyPress}
                        handleNameChanged={setName}
                    />
                )}
                {phase === 'share' && <Share name={name} />}
                <button
                    onClick={handleNextPhase}
                    className={`h-12 w-64 rounded-lg border-2 border-black ${phase !== 'share' ? 'bg-project-light-blue' : 'bg-project-red-orange'} text-3xl text-white`}
                >
                    {phase !== 'share' ? 'ไปกันต่อ!' : 'แชร์ผลลัพธ์'}
                </button>
            </main>
        </Border>
    );
}
