interface BgColor {
    color: string;
    handler: (color: string) => void;
}

export default function Color(props: BgColor) {
    const { color, handler } = props;
    return (
        <button
            className={`rounded-lg border-2 border-black ${color} h-9 w-9`}
            onClick={() => handler(color)}
        />
    );
}
