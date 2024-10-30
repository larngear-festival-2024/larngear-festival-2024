'use client';

import { useState } from 'react';
import Color from './Color';
import { Colors } from '@/const/color';
import { StaticImageData } from 'next/image';

interface ChooseColorProps {
    handler: (color: string) => void;
}

export default function ChooseColor() {
    const [color, setColor] = useState<string>('bg-project-dark-blue');

    const handleColor = (color: string) => {
        setColor(color);
    };
    return (
        <section className="flex w-full justify-evenly">
            {Object.entries(Colors).map(([color, borderTop]) => (
                <Color
                    key={color}
                    color={color}
                    border={borderTop}
                    handler={handleColor}
                />
            ))}
        </section>
    );
}
