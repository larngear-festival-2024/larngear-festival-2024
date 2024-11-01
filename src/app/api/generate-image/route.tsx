/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import { type NextRequest } from 'next/server';
import { Resvg } from '@resvg/resvg-js';
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
import None from '@public/card/none.svg';
import satori from 'satori';
import { Colors } from '@/const/color';
import { Tapes } from '@/const/tape';
import { cn } from '@/lib/utils';
import BackgroundImg from '@public/background.svg';
import Logo from '@public/logo.svg';

const stampsMap = {
    '1': Stamp1,
    '2': Stamp2,
    '3': Stamp3,
    '4': Stamp4,
    '5': Stamp5,
    '6': Stamp6,
    '7': Stamp7,
    '8': Stamp8,
    '9': Stamp9,
    '10': Stamp10,
    '11': Stamp11,
    '12': Stamp12,
    '13': Stamp13,
    '0': None,
};
const rotations = [-15, 30, 135, -15, -30, 15];

export async function GET(request: NextRequest) {
    const searchParams = request.nextUrl.searchParams;

    const name = searchParams.get('name') || 'John Doe';
    const ticketColor = searchParams.get('ticketColor') || 'pink';
    const caseColor = searchParams.get('caseColor') || 'dark-green';
    const slot1 = searchParams.get('slot1') || '0';
    const slot2 = searchParams.get('slot2') || '0';
    const slot3 = searchParams.get('slot3') || '0';
    const slot4 = searchParams.get('slot4') || '0';
    const slot5 = searchParams.get('slot5') || '0';
    const slot6 = searchParams.get('slot6') || '0';

    const stamps = [Stamp1.src, Stamp2.src, Stamp3.src, Stamp2.src, '', ''];
    const backgroundColor = 'bg-project-dark-blue';
    const tapeColor = 'bg-project-dark-green';

    const svg = await satori(
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
        </div>,
        {
            width: 540,
            height: 960,
            fonts: [],
        }
    );

    const resvg = new Resvg(svg, {
        fitTo: {
            mode: 'width',
            value: 1200,
        },
    });

    const pngData = resvg.render();
    const pngBuffer = pngData.asPng();

    return new Response(pngBuffer, {
        headers: {
            'Content-Type': 'image/png',
            'Content-Disposition':
                'attachment; filename=larngearfest-2024-eiei.png',
        },
    });
}
