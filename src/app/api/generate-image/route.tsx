/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import { type NextRequest } from 'next/server';
import sharp from 'sharp';
import satori from 'satori';
import path from 'path';
import fs from 'fs';
import { BackgroundImage } from './Background';
import { BorderTop } from './BorderTop';
import { Logo } from './Logo';
import { TapeDarkGreen } from './Tapes/TapeDarkGreen';
import { Stamp1 } from './Stamps/Stamp1';
import { TapeLightBlue } from './Tapes/TapeLightBlue';
import { TapeYellow } from './Tapes/TapeYellow';
import { TapeDarkBlue } from './Tapes/TapeDarkBlue';
import { TapePink } from './Tapes/TapePink';
import { TapeRedOrange } from './Tapes/TapeRedOrange';
import { Stamp2 } from './Stamps/Stamp2';
import { Stamp3 } from './Stamps/Stamp3';
import { Stamp4 } from './Stamps/Stamp4';
import { Stamp5 } from './Stamps/Stamp5';
import { Stamp6 } from './Stamps/Stamp6';
import { Stamp7 } from './Stamps/Stamp7';
import { Stamp8 } from './Stamps/Stamp8';
import { Stamp9 } from './Stamps/Stamp9';
import { Stamp10 } from './Stamps/Stamp10';
import { Stamp11 } from './Stamps/Stamp11';
import { Stamp12 } from './Stamps/Stamp12';
import { Stamp13 } from './Stamps/Stamp13';

// export const rotations = [-15, 10, 20, -40, -10, 10];
// export const translateX = [-10, 30, 0, -20, -20, 20];
// export const translateY = [-10, -20, 0, -10, 20, 20];

export async function GET(request: NextRequest) {
    const sovRegular = path.join(
        process.cwd(),
        'src/app/fonts/sov/regular.ttf'
    );

    const rotations = [-15, 10, 20, -40, -10, 10];
    const translateX = [-10, 30, 0, -15, -20, 20];
    const translateY = [-10, -15, 0, -10, 20, 20];

    const heightLocked = [49, 55, 60, 84, 65, 50];

    const sovRegularArrayBuffer = fs.readFileSync(sovRegular).buffer;
    const searchParams = request.nextUrl.searchParams;

    const name = searchParams.get('name') || 'John Doe';
    const ticketColor =
        (searchParams.get('ticketColor') as
            | 'bg-project-dark-blue'
            | 'bg-project-dark-green'
            | 'bg-project-light-blue'
            | 'bg-project-pink'
            | 'bg-project-red-orange'
            | 'bg-project-yellow') || 'bg-project-dark-blue';
    const tapeColor =
        (searchParams.get('tapeColor') as
            | 'bg-project-dark-blue'
            | 'bg-project-dark-green'
            | 'bg-project-light-blue'
            | 'bg-project-pink'
            | 'bg-project-red-orange'
            | 'bg-project-yellow') || 'bg-project-yellow';

    const slot1 = searchParams.get('slot1') || '0';
    const slot2 = searchParams.get('slot2') || '0';
    const slot3 = searchParams.get('slot3') || '0';
    const slot4 = searchParams.get('slot4') || '0';
    const slot5 = searchParams.get('slot5') || '0';
    const slot6 = searchParams.get('slot6') || '0';

    const backgroundColor = 'bg-project-dark-blue';

    const tapeColorMap = {
        'bg-project-dark-blue': TapeDarkBlue,
        'bg-project-dark-green': TapeDarkGreen,
        'bg-project-light-blue': TapeLightBlue,
        'bg-project-pink': TapePink,
        'bg-project-red-orange': TapeRedOrange,
        'bg-project-yellow': TapeYellow,
    };
    const Tape = tapeColorMap[tapeColor];

    const StampMap = {
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
    };

    const S1 = StampMap[slot1 as keyof typeof StampMap];
    const S2 = StampMap[slot2 as keyof typeof StampMap];
    const S3 = StampMap[slot3 as keyof typeof StampMap];
    const S4 = StampMap[slot4 as keyof typeof StampMap];
    const S5 = StampMap[slot5 as keyof typeof StampMap];
    const S6 = StampMap[slot6 as keyof typeof StampMap];

    const BackgroundColorMap = {
        'bg-project-dark-blue': '#552CB8',
        'bg-project-dark-green': '#009A5E',
        'bg-project-light-blue': '#048CD6',
        'bg-project-pink': '#FC7DA8',
        'bg-project-red-orange': '#FF5A47',
        'bg-project-yellow': '#FFD011',
    };

    const svg = await satori(
        <div
            style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                position: 'relative',
                width: '540px',
                height: '960px',
                backgroundColor: 'red',
            }}
        >
            <BackgroundImage />
            <div
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    width: 420,
                }}
            >
                <BorderTop color={BackgroundColorMap[ticketColor]} />
                <div
                    style={{
                        display: 'flex',
                        flexDirection: 'column',
                        width: '100%',
                        backgroundColor: BackgroundColorMap[ticketColor],
                        borderLeft: '4px solid black',
                        borderRight: '4px solid black',
                        borderBottom: '4px solid black',
                        height: 680,
                        padding: 16,
                    }}
                >
                    <div
                        style={{
                            display: 'flex',
                            flexDirection: 'column',
                            border: '2px solid white',
                            borderRadius: 16,
                            height: 620,
                        }}
                    >
                        <div
                            style={{
                                display: 'flex',
                                paddingLeft: 16,
                                paddingTop: 16,
                            }}
                        >
                            <div
                                style={{
                                    flex: 1,
                                    backgroundColor: 'white',
                                    height: 230,
                                    borderRadius: 12,
                                }}
                            ></div>
                            <div
                                style={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    alignItems: 'center',
                                    flex: 1,
                                }}
                            >
                                <div
                                    style={{
                                        display: 'flex',
                                        paddingBottom: 8,
                                    }}
                                >
                                    <Logo />
                                </div>
                                <div
                                    style={{
                                        display: 'flex',
                                        backgroundColor: 'white',
                                        height: 4,
                                        width: '100%',
                                    }}
                                ></div>
                                <div
                                    style={{
                                        display: 'flex',
                                        flexDirection: 'column',
                                        alignItems: 'center',
                                        fontSize: 36,
                                        color: 'white',
                                        lineHeight: 1.2,
                                        paddingTop: 2,
                                    }}
                                >
                                    <div>16:30</div>
                                    <div>ONWARD</div>
                                </div>
                            </div>
                        </div>
                        <div
                            style={{
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                                fontSize: 64,
                                color: 'white',
                                lineHeight: 1,
                            }}
                        >
                            <div
                                style={{
                                    display: 'flex',
                                    alignItems: 'flex-end',
                                    justifyContent: 'center',
                                }}
                            >
                                <div>7</div>
                                <div
                                    style={{
                                        fontSize: 24,
                                        paddingBottom: 16,
                                    }}
                                >
                                    TH
                                </div>
                                <div
                                    style={{
                                        marginLeft: 16,
                                    }}
                                >
                                    NOVEMBER
                                </div>
                            </div>
                        </div>
                        <div
                            style={{
                                backgroundColor: 'white',
                                color: '#552CB8',
                                fontSize: 36,
                                lineHeight: 1,
                                paddingTop: 8,
                                paddingBottom: 8,
                                display: 'flex',
                                justifyContent: 'center',
                            }}
                        >
                            {name}
                        </div>
                        <div
                            style={{
                                display: 'flex',
                                justifyContent: 'center',
                                paddingTop: 20,
                            }}
                        >
                            <div
                                style={{
                                    display: 'flex',
                                    position: 'relative',
                                }}
                            >
                                <Tape />
                                <div
                                    style={{
                                        display: 'flex',
                                        flexDirection: 'column',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        position: 'absolute',
                                        top: 0,
                                        left: 0,
                                        width: '100%',
                                        height: '100%',
                                    }}
                                >
                                    <div
                                        style={{
                                            flex: 1,
                                            display: 'flex',
                                            width: '100%',
                                        }}
                                    >
                                        <div
                                            style={{
                                                flex: 1,
                                                display: 'flex',
                                                position: 'relative',
                                                justifyContent: 'center',
                                                alignItems: 'center',
                                                transform: `translate(${translateX[0]}%, ${translateY[0]}%) rotate(${rotations[0]}deg)`,
                                            }}
                                        >
                                            {/* Place Stamp Here #1 */}
                                            <S1
                                                heightLocked={heightLocked[0]}
                                            />
                                        </div>
                                        <div
                                            style={{
                                                flex: 1,
                                                display: 'flex',
                                                position: 'relative',
                                                justifyContent: 'center',
                                                alignItems: 'center',
                                                transform: `translate(${translateX[1]}%, ${translateY[1]}%) rotate(${rotations[1]}deg)`,
                                            }}
                                        >
                                            {/* Place Stamp Here #2 */}
                                            <S2
                                                heightLocked={heightLocked[1]}
                                            />
                                        </div>
                                        <div
                                            style={{
                                                flex: 1,
                                                display: 'flex',
                                                position: 'relative',
                                                justifyContent: 'center',
                                                alignItems: 'center',
                                                transform: `translate(${translateX[2]}%, ${translateY[2]}%) rotate(${rotations[2]}deg)`,
                                            }}
                                        >
                                            {/* Place Stamp Here #3 */}
                                            <S3
                                                heightLocked={heightLocked[2]}
                                            />
                                        </div>
                                    </div>
                                    <div
                                        style={{
                                            flex: 1,
                                            display: 'flex',
                                            width: '100%',
                                        }}
                                    >
                                        <div
                                            style={{
                                                flex: 1,
                                                display: 'flex',
                                                position: 'relative',
                                                justifyContent: 'center',
                                                alignItems: 'center',
                                                transform: `translate(${translateX[3]}%, ${translateY[3]}%) rotate(${rotations[3]}deg)`,
                                            }}
                                        >
                                            {/* Place Stamp Here #4 */}
                                            <S4
                                                heightLocked={heightLocked[3]}
                                            />
                                        </div>
                                        <div
                                            style={{
                                                flex: 1,
                                                display: 'flex',
                                                position: 'relative',
                                                justifyContent: 'center',
                                                alignItems: 'center',
                                                transform: `translate(${translateX[4]}%, ${translateY[4]}%) rotate(${rotations[4]}deg)`,
                                            }}
                                        >
                                            {/* Place Stamp Here #5 */}
                                            <S5
                                                heightLocked={heightLocked[4]}
                                            />
                                        </div>
                                        <div
                                            style={{
                                                flex: 1,
                                                display: 'flex',
                                                position: 'relative',
                                                justifyContent: 'center',
                                                alignItems: 'center',
                                                transform: `translate(${translateX[5]}%, ${translateY[5]}%) rotate(${rotations[5]}deg)`,
                                            }}
                                        >
                                            {/* Place Stamp Here #6 */}
                                            <S6
                                                heightLocked={heightLocked[5]}
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>,
        {
            width: 540,
            height: 960,
            fonts: [
                {
                    name: 'sov',
                    data: sovRegularArrayBuffer,
                    weight: 400,
                    style: 'normal',
                },
            ],
        }
    );

    const png = await sharp(Buffer.from(svg)).png().toBuffer();

    return new Response(png, {
        headers: {
            'Content-Type': 'image/png',
            'Content-Disposition': 'attachment; filename=larngearfest-2024.png',
        },
    });
}
