import { rotations, translateX, translateY } from '../route';

export const Stamp10 = ({ index }: { index: number }) => {
    return (
        <svg
            // style={{
            //     padding: `0.${Math.abs(3 - index) * 3}5rem`,
            //     transform: `translate(${translateX[index]}%, ${translateY[index]}%) rotate(${rotations[index]}deg)`,
            // }}
            style={{
                position: 'absolute',
                width: '70%',
                height: '70%',
                padding: `0.${Math.abs(3 - 2) * 3}rem`,
                transform: `translate(${translateX[index]}%, ${translateY[index]}%) rotate(${rotations[index]}deg)`,
            }}
            viewBox="0 0 61 80"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M37.4378 70.0955C34.332 62.9952 29.8429 57.0507 24.5952 52.7876C19.0628 48.2931 12.6631 45.6528 6.15678 45.5367C11.8871 42.4531 16.3663 37.1744 19.2252 30.6449C21.937 24.4514 23.2042 17.111 22.7124 9.37668C25.8183 16.477 30.3073 22.4215 35.555 26.6846C41.0874 31.1791 47.4871 33.8194 53.9934 33.9355C48.2631 37.0191 43.7839 42.2978 40.925 48.8273C38.2132 55.0208 36.946 62.3612 37.4378 70.0955Z"
                fill="#FFD011"
                stroke="black"
                stroke-width="1.61453"
            />
        </svg>
    );
};
