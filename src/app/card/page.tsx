'use client';
import Border from '@/components/border';
import Name from '@/components/card/Name';
import Share from '@/components/card/Share';
import Sticker from '@/components/card/Sticker';
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
import ChooseColor from '@/components/card/color/ChooseColor';
import ChooseStamp from '@/components/card/ChooseStamp';

export type CardMode = 'sticker' | 'name' | 'share';

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
                {phase === 'share' && <Share name={name} />}

                {phase !== 'share' && (
                    <>
                        <Image
                            src={Logo}
                            alt="logo"
                            width={84.54}
                            height={94.38}
                        />
                        <ChooseStamp
                            stamps={stamps}
                            setSelected={setSelected}
                            phase={phase}
                            selected={selected}
                        />
                    </>
                )}
                {phase === 'name' && (
                    <Name
                        name={name}
                        handleKeyPressed={handleKeyPress}
                        handleNameChanged={setName}
                    />
                )}

                {phase !== 'share' && <ChooseColor />}

                {phase === 'sticker' && (
                    <Sticker
                        stickers={Stamps}
                        selected={selected}
                        handleSelected={setSelected}
                        handleStamps={handleSelectedStamp}
                    />
                )}

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
