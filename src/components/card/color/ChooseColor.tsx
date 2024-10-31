'use client';

import Color from './Color';
import { Colors } from '@/const/color';

interface ChooseColorProps {
    colorState: string;
    handler: (color: string) => void;
}

export default function ChooseColor({ colorState, handler }: ChooseColorProps) {
    return (
        <section className="flex w-full justify-evenly">
            {Object.entries(Colors).map(([color, borderTop]) => (
                <Color
                    key={color}
                    color={color}
                    border={borderTop}
                    handler={handler}
                />
            ))}
        </section>
    );
}
