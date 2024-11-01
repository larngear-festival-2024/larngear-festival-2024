import { type NextRequest } from 'next/server';
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

    return Response.json({
        name,
        ticketColor,
        caseColor,
        slot1,
        slot2,
        slot3,
        slot4,
        slot5,
        slot6,
    });
}
