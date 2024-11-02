import Image from 'next/image';

interface StickerProps {
    stickers: string[];
    selected: number | null;
    handleStamps: (i: number, stamp: number) => void;
    handleSelected: (i: number) => void;
}

export default function Sticker(props: StickerProps) {
    const { stickers, selected, handleSelected, handleStamps } = props;

    return (
        <main className="flex h-52 w-72 flex-col rounded-2xl border-2 border-black bg-white">
            <section className="grid h-12 grid-cols-6 rounded-t-xl border-b-2 border-black bg-pink-400">
                {Array.from({ length: 6 }, (_, index) => (
                    <div
                        key={index}
                        className={`grid cursor-pointer place-items-center text-2xl ${
                            selected === index
                                ? 'text-black underline'
                                : 'text-white'
                        }`}
                        onClick={() => handleSelected(index)}
                    >
                        {index + 1}
                    </div>
                ))}
            </section>

            <section className="grid h-full grid-flow-row auto-rows-[50%] grid-cols-3 gap-y-6 overflow-y-scroll rounded-b-xl">
                {stickers.map((Stamp, index) => (
                    <div
                        key={`Stamp${index}`}
                        onClick={() => handleStamps(selected ?? 0, index)}
                        className="grid place-items-center"
                    >
                        <Image
                            src={Stamp}
                            className="h-full w-full overflow-hidden object-contain p-2"
                            alt={`Stamp ${index + 1}`}
                        />
                    </div>
                ))}
            </section>
        </main>
    );
}
