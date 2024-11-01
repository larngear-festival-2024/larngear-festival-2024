import { rotations } from '../route';

export const Stamp9 = ({ index }: { index: number }) => {
    return (
        <svg
            style={{
                padding: `0.${(index + 6) % 6}rem`,
                transform: `translate(${(index - 2) % 2}5%, ${(index - 2) % 2}5%) rotate(${rotations[index]}deg)`,
            }}
            width="222"
            height="222"
            viewBox="0 0 222 222"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <circle
                cx="110.904"
                cy="110.904"
                r="106.904"
                fill="#3A3939"
                stroke="black"
                stroke-width="8"
            />
            <circle
                cx="110.904"
                cy="110.903"
                r="87.9053"
                fill="#3A3939"
                stroke="black"
                stroke-width="4"
            />
            <path
                opacity="0.2"
                d="M135.228 125.303C147.261 104.128 130.601 84.7834 114.488 84.0664L126.687 26.8924C194 40.5 210.5 112 184.5 155.5L135.228 125.303Z"
                fill="#D9D9D9"
            />
            <ellipse cx="111" cy="110.5" rx="35" ry="34.5" fill="#FC7DA8" />
            <circle
                cx="111.012"
                cy="111.012"
                r="10.9469"
                fill="#D9D9D9"
                stroke="black"
                stroke-width="4"
            />
        </svg>
    );
};
