'use client';
import Border from '@/components/border';
import Name from '@/components/card/Name';
import Share from '@/components/card/Share';
import Sticker from '@/components/card/Sticker';
import Logo from '@public/logo.svg';
import Image from 'next/image';
import React, { use, useState } from 'react';
import ChooseColor from '@/components/card/color/ChooseColor';
import ChooseStamp from '@/components/card/ChooseStamp';
import { Icon } from '@iconify/react/dist/iconify.js';
import { STAMPS as Stamps } from '@/const/stamp';

export type CardMode = 'sticker' | 'name' | 'share';

const phases: CardMode[] = ['sticker', 'name', 'share'];

export default function Card() {
    const [phase, setPhase] = useState<CardMode>('sticker');
    const [selected, setSelected] = useState<number | null>(0);
    const [name, setName] = useState<string>('');
    const [stamps, setStamps] = useState<string[]>(['', '', '', '', '', '']);
    const [backgroundColor, setBackgroundColor] = useState<string>(
        'bg-project-dark-blue'
    );
    const [tapeColor, setTapeColor] = useState<string>('bg-project-yellow');

    const handleSetBackgroundColor = (color: string) => {
        setBackgroundColor(color);
    };

    const handleSetTapeColor = (color: string) => {
        setTapeColor(color);
    };

    const handleNextPhase = (p: number) => {
        setPhase((prevPhase) => {
            const currentIndex = phases.indexOf(prevPhase);
            if ((currentIndex === 0 && p < 0) || (currentIndex === 3 && p > 0))
                return phases[currentIndex];
            const nextIndex = currentIndex + p;
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
        <section className="mx-auto px-4 py-6">
            <button
                className="grid h-10 w-10 place-items-center rounded-full bg-project-dark-blue"
                onClick={() => handleNextPhase(-1)}
            >
                <Icon
                    icon="akar-icons:arrow-left"
                    className="text-3xl text-white"
                />
            </button>
            <Border className="items-center space-y-16 pb-8">
                <main className="flex flex-col items-center justify-center gap-9">
                    {phase === 'share' && <Share stamps={stamps} name={name} />}

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

                    {phase !== 'share' && (
                        <button
                            onClick={() => handleNextPhase(1)}
                            className="h-12 w-64 rounded-lg border-2 border-black bg-project-light-blue text-3xl text-white"
                        >
                            ไปกันต่อ!
                        </button>
                    )}
                </main>
            </Border>
        </section>
    );
}
