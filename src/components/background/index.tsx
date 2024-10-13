import Image from 'next/image';
import { ReactNode } from 'react';

export default function Background({ children }: { children: ReactNode }) {
    return (
        <div className="relative mx-auto min-h-dvh max-w-md overflow-hidden">
            <Image
                src={'background.svg'}
                alt="background"
                fill
                className="-z-50 object-cover"
            />
            {children}
        </div>
    );
}
