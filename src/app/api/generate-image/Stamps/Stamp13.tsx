import { rotations } from '../route';

export const Stamp13 = ({ index }: { index: number }) => {
    return (
        <svg
            style={{
                padding: `0.${(index + 6) % 6}rem`,
                transform: `translate(${(index - 2) % 2}5%, ${(index - 2) % 2}5%) rotate(${rotations[index - 1]}deg)`,
            }}
            width="99"
            height="206"
            viewBox="0 0 99 206"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M28.3164 7.62388L58.3768 2.76562L38.9438 68.352L96.9392 46.1863L11.6161 203.776L46.2312 88.0887L2.81055 107.522L28.3164 7.62388Z"
                fill="#FFE512"
                stroke="black"
                stroke-width="4"
                stroke-linejoin="round"
            />
        </svg>
    );
};
