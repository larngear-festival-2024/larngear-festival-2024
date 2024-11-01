import { rotations } from '../route';

export const Stamp11 = ({ index }: { index: number }) => {
    return (
        <svg
            style={{
                padding: `0.${(index + 6) % 6}rem`,
                transform: `translate(${(index - 2) % 2}5%, ${(index - 2) % 2}5%) rotate(${rotations[index - 1]}deg)`,
            }}
            width="199"
            height="204"
            viewBox="0 0 199 204"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M38.9672 3.05654C-6.53298 -0.113863 2.61809 70.6804 8.50005 188C32 103 88.6086 148.672 131 100C158 69.0001 107.765 30.4915 81.0002 62.5001C86.3734 43.3963 84.4673 6.22694 38.9672 3.05654Z"
                fill="#FC7DA8"
                stroke="black"
                stroke-width="4"
            />
            <path
                d="M178.593 169.656C184.192 187.358 132.233 198.156 108.711 201.531C124.655 190.269 116.584 164.076 130.029 141.566C141.6 122.192 160.302 144.409 150.268 158.058C157.27 154.107 172.995 151.954 178.593 169.656Z"
                fill="#FC7DA8"
                stroke="black"
                stroke-width="4"
            />
        </svg>
    );
};
