/* eslint-disable @next/next/no-img-element */
'use client';
import Image from 'next/image';
import Logo from '@public/logo.svg';
import Border from '@/components/border';
import { cn } from '@/lib/utils';
import Stamp1 from '@public/card/stamp1.svg';
import Stamp2 from '@public/card/stamp2.svg';
import Stamp3 from '@public/card/stamp3.svg';
import BackgroundImg from '@public/background.svg';
import { Tapes } from '@/const/tape';
import { Colors } from '@/const/color';

const Test = () => {
    const rotations = [-15, 30, 135, -15, -30, 15];

    const name = 'John Doe';
    const stamps = [Stamp1.src, Stamp2.src, Stamp3.src, Stamp2.src, '', ''];
    const backgroundColor = 'bg-project-dark-blue';
    const tapeColor = 'bg-project-dark-green';

    return (
        <div
            className="fixed left-0 top-0 flex h-[960px] w-[540px] items-center justify-center bg-cover bg-no-repeat"
            style={{
                backgroundImage: `url(${BackgroundImg.src})`,
            }}
        >
            <div className="flex h-[1400px] w-[420px] flex-col justify-center px-4 py-6">
                <div className="flex w-full flex-col items-center justify-center">
                    <img
                        src={Colors[backgroundColor as keyof typeof Colors].src}
                        alt="border-top"
                        className="w-full"
                    />
                    <div
                        // -mt-[4px] is magic number to merge border-top and div
                        className={cn(
                            '-mt-[1px] min-h-10 w-full items-center space-y-16 border-b-4 border-l-4 border-r-4 border-b-black border-l-black border-r-black bg-project-dark-blue pb-8',
                            backgroundColor
                        )}
                    >
                        <main className="flex flex-col items-center justify-center gap-6 px-4">
                            <section
                                className="grid w-full flex-col items-center gap-6 pt-4"
                                id="ticket-transparent-container"
                            >
                                <main className="flex w-full flex-col items-center rounded-2xl border-2 border-white pb-8 pt-4 font-sov text-3xl text-white">
                                    <section className="grid w-full grid-cols-2">
                                        <div className="ml-4 h-full rounded-xl bg-white" />
                                        <div className="grid place-items-center">
                                            <img
                                                alt={Logo}
                                                src={Logo.src}
                                                className="h-[118px] w-[105px]"
                                            />
                                            <hr className="mt-2 w-full border-2 border-white" />
                                            <h1 className="text-center text-4xl">
                                                16:30
                                                <br />
                                                onward
                                            </h1>
                                        </div>
                                    </section>
                                    <section>
                                        <h1 className="text-6xl">
                                            7<span className="text-lg">th</span>{' '}
                                            November
                                        </h1>
                                    </section>
                                    <section className="mb-8 grid w-full place-items-center bg-white py-1 text-4xl text-project-dark-blue">
                                        {name}
                                    </section>
                                    <section className="relative h-[195.39px] w-full max-w-[300px]">
                                        <img
                                            src={
                                                Tapes[
                                                    tapeColor as keyof typeof Tapes
                                                ].src
                                            }
                                            alt="background"
                                            className="absolute left-0 top-0 size-full object-contain"
                                        />

                                        <div className="z-1 relative grid h-full w-full grid-cols-3 grid-rows-2">
                                            {stamps.map((Stamp, index) => (
                                                <div
                                                    key={index}
                                                    className={cn(
                                                        'grid place-items-center'
                                                    )}
                                                >
                                                    {Stamp !== '' && (
                                                        <img
                                                            src={Stamp}
                                                            className="h-4/5 w-4/5 overflow-hidden object-contain"
                                                            alt={`Stamp ${index + 1}`}
                                                            style={{
                                                                padding: `0.${(index + 6) % 6}rem`,
                                                                transform: `translate(${(index - 2) % 2}5%, ${(index - 2) % 2}5%) rotate(${rotations[index]}deg)`,
                                                            }}
                                                        />
                                                    )}
                                                </div>
                                            ))}
                                        </div>
                                    </section>
                                </main>
                            </section>
                        </main>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Test;
