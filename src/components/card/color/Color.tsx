import { cn } from '@/lib/utils';
import { StaticImageData } from 'next/image';

interface BgColor {
    color: string;
    border: StaticImageData;
    handler: (color: string) => void;
}

export default function Color(props: BgColor) {
    const { color, handler } = props;
    return (
        <button
            className={cn(`h-9 w-9 rounded-lg border-2 border-black`, color)}
            onClick={() => handler(color)}
        />
    );
}
