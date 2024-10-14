'use client';
import React from 'react';
import { useState } from 'react';
import Image from 'next/image';
import Logo from '@public/logo.svg';
import BG from '@public/card/bg.svg';
import Sticker from '@/components/card/Sticker';
import Name from '@/components/card/Name';
import Share from '@/components/card/Share';
import Stamp1 from '@public/card/stamp1.svg';
import Stamp2 from '@public/card/stamp2.svg';
import Stamp3 from '@public/card/stamp3.svg';
import Stamp4 from '@public/card/stamp4.svg';
import Stamp5 from '@public/card/stamp5.svg';
import Stamp6 from '@public/card/stamp6.svg';

const Stamps = [Stamp1, Stamp2, Stamp3, Stamp4, Stamp5, Stamp6];

export type CardMode = 'sticker' | 'name' | 'share';

export default function Card() {
    const [phase, setPhase] = useState<CardMode>('sticker');
    const [selected, setSelected] = useState<number | null>(null);
    const [name, setName] = useState<string>('');

    const phases: CardMode[] = ['sticker', 'name', 'share'];

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

    return (
        <main className="flex flex-col items-center justify-center gap-12 bg-purple-800 p-10">
            <Image src={Logo} alt="logo" width={100} height={100} />
            <Image src={BG} alt="logo" width={294.14} height={195.39} />
            {phase === 'sticker' && (
                <Sticker
                    stickers={Stamps}
                    selected={selected}
                    handleSelected={setSelected}
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
                className={`h-12 w-64 rounded-2xl border-2 border-black ${phase !== 'share' ? 'bg-blue-600' : 'bg-pink-400'} text-3xl text-white`}
            >
                {phase !== 'share' ? 'ไปกันต่อ!' : 'แชร์ผลลัพธ์'}
            </button>
        </main>
    );
}
