import { cn } from '@/lib/utils';

interface TimerCardProps {
    bgClass: string;
    text: string;
}

/**
 * Button component that renders a styled button element.
 *
 * @param {string} bgClass - Optional additional class names to apply to the card.
 * @param {string} text - Optional text to be rendered inside the card.
 */

export default function TimerCard({ bgClass, text }: TimerCardProps) {
    return (
        <div
            className={cn(
                'inline-flex h-[104px] w-[72px] flex-col items-center justify-center gap-2.5 border-2 border-black py-1 shadow drop-shadow-2xl',
                bgClass
            )}
        >
            <div className="flex h-full w-full items-center justify-center text-center font-bangkok text-6xl text-black">
                {text}
            </div>
        </div>
    );
}
