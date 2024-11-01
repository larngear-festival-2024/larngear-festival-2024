'use client';
import Image from 'next/image';
import Logo from '@public/logo.svg';
import ChooseStamp from '@/components/card/ChooseStamp';
import Border from '@/components/border';
import { cn } from '@/lib/utils';

import BackgroundImg from '@public/background.svg';

const Test = () => {
    const name = 'John Doe';
    const stamps = ['', '', '', '', '', ''];
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
                <Border
                    topBorder={backgroundColor}
                    className={cn(
                        'items-center space-y-16 pb-8',
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
                                        <Image
                                            alt={Logo}
                                            src={Logo}
                                            width={105}
                                            height={118}
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
                                <ChooseStamp
                                    tapeColor={tapeColor}
                                    stamps={stamps}
                                />
                            </main>
                        </section>
                    </main>
                </Border>
            </div>
        </div>
    );
};

export default Test;
