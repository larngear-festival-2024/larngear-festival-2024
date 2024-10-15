import Image from 'next/image';
import { ReactNode } from 'react';

import BackgroundImg from '@public/background.svg';

export default function Background({ children }: { children: ReactNode }) {
    return (
        <div className="relative min-h-screen w-full">
            <Image
                src={BackgroundImg}
                alt="background"
                fill
                className="-z-50 object-cover"
            />
            {children}
        </div>
    );
}
