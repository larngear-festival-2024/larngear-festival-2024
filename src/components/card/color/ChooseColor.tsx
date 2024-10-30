'use client';

import { useState } from 'react';
import Color from './Color';

const colors = [
    'bg-project-yellow',
    'bg-project-dark-green',
    'bg-project-dark-blue',
    'bg-project-light-blue',
    'bg-project-pink',
    'bg-project-red-orange',
];

export default function ChooseColor() {
    const [color, setColor] = useState<string>('project-dark-blue');

    const handleColor = (color: string) => {
        setColor(color);
    };
    return (
        <section className="flex w-4/5 justify-evenly">
            {colors.map((color) => (
                <Color key={color} color={color} handler={handleColor} />
            ))}
        </section>
    );
}
