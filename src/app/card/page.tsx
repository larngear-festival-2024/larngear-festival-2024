'use client';
import Border from '@/components/border';
import Name from '@/components/card/Name';
import Share from '@/components/card/Share';
import Sticker from '@/components/card/Sticker';
import Logo from '@/components/logo';
import React, { useState } from 'react';
import ChooseColor from '@/components/card/color/ChooseColor';
import ChooseStamp from '@/components/card/ChooseStamp';
import { Icon } from '@iconify/react/dist/iconify.js';
import { STAMPS as Stamps } from '@/const/stamp';
import { cn } from '@/lib/utils';
import { useRouter } from 'next/navigation';

export type CardMode = 'sticker' | 'name' | 'share';

const phases: CardMode[] = ['sticker', 'name', 'share'];

export default function Card() {
    const router = useRouter();

    const [phase, setPhase] = useState<CardMode>('sticker');
    const [selected, setSelected] = useState<number | null>(0);
    const [name, setName] = useState<string>('');
    const [stamps, setStamps] = useState<number[]>([0, 0, 0, 0, 0, 0]);
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
            if (name === '' && phases[currentIndex - 1] === 'sticker')
                return phases[currentIndex - 1];
            if (name === '' && prevPhase === 'name') return prevPhase;
            if ((currentIndex === 0 && p < 0) || (currentIndex === 3 && p > 0))
                return phases[currentIndex];
            const nextIndex = currentIndex + p;
            return phases[nextIndex];
        });
    };

    const handleSelectedStamp = (index: number, indexSticker: number) => {
        const newStamp = [...stamps];
        newStamp[index] = indexSticker;
        setStamps(newStamp);
    };

    const handleNavigate = (phases: CardMode) => {
        if (phases === 'sticker') {
            router.push('/intro-4');
            return;
        }
        handleNextPhase(-1);
    };

    return (
        <div className="flex min-h-screen flex-col justify-center px-4 py-6">
            <button
                className="to-hide grid h-10 w-10 place-items-center"
                onClick={() => handleNavigate(phase)}
            >
                <Icon
                    fontSize={48}
                    icon="akar-icons:circle-chevron-left-fill"
                    className="text-project-dark-blue"
                />
            </button>
            <Border
                topBorder={backgroundColor}
                className={cn('items-center space-y-16 pb-8', backgroundColor)}
            >
                <main className="flex flex-col items-center justify-center gap-6 px-4">
                    {phase === 'share' && (
                        <Share
                            tapecolor={tapeColor}
                            backgroundcolor={backgroundColor}
                            stamps={stamps}
                            name={name}
                        />
                    )}

                    {phase !== 'share' && (
                        <>
                            <Logo size={94} />
                            <ChooseStamp
                                stamps={stamps}
                                tapeColor={tapeColor}
                                setSelected={setSelected}
                                phase={phase}
                                selected={selected}
                            />
                        </>
                    )}
                    {phase === 'name' && (
                        <Name name={name} handleNameChanged={setName} />
                    )}

                    {phase === 'sticker' && (
                        <ChooseColor
                            colorState={tapeColor}
                            handler={handleSetTapeColor}
                        />
                    )}
                    {phase === 'name' && (
                        <ChooseColor
                            colorState={backgroundColor}
                            handler={handleSetBackgroundColor}
                        />
                    )}

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
                            data-disabled={name === '' && phase === 'name'}
                            disabled={name === '' && phase === 'name'}
                            className="h-12 w-64 rounded-lg border-2 border-black bg-project-light-blue text-3xl text-white data-[disabled=true]:cursor-not-allowed data-[disabled=true]:bg-gray-400 data-[disabled=true]:text-gray-700"
                        >
                            ไปกันต่อ!
                        </button>
                    )}
                </main>
            </Border>
        </div>
    );
}
