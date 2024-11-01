/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import { type NextRequest } from 'next/server';
import sharp from 'sharp';
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
import path from 'path';
import fs from 'fs';

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
    const sovRegular = path.join(
        process.cwd(),
        'src/app/fonts/sov/regular.ttf'
    );

    const sovRegularArrayBuffer = fs.readFileSync(sovRegular).buffer;
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
            style={{
                width: '540px',
                height: '960px',
                backgroundColor: 'red',
            }}
        >
            dasd
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
            'Content-Disposition':
                'attachment; filename=larngearfest-2024-eiei.png',
        },
    });
}
