'use client';
import Border from '@/components/border';
import Name from '@/components/card/Name';
import Share from '@/components/card/Share';
import Sticker from '@/components/card/Sticker';
import Logo from '@public/logo.svg';
import Image from 'next/image';
import React, { useState } from 'react';
import ChooseColor from '@/components/card/color/ChooseColor';
import ChooseStamp from '@/components/card/ChooseStamp';
import { STAMPS as Stamps } from '@/const/stamp';

export type CardMode = 'sticker' | 'name' | 'share';

const phases: CardMode[] = ['sticker', 'name', 'share'];

export default function Card() {
    const [phase, setPhase] = useState<CardMode>('sticker');
    const [selected, setSelected] = useState<number | null>(0);
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
