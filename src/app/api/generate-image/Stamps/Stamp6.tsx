import { rotations, translateX, translateY } from '../route';

export const Stamp6 = ({ index }: { index: number }) => {
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
            viewBox="0 0 100 89"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M37.6247 2.18919L30.4659 28.4381L1.86734 32.6088C0.815295 32.7622 0.549002 34.1579 1.4707 34.6878L25.0294 48.2341L10.1929 76.7201C9.69377 77.6785 10.7073 78.7181 11.6781 78.2435L38.2211 65.2669L48.1821 86.9466C48.6031 87.8631 49.9261 87.7996 50.2575 86.847L59.837 59.306L98.1464 55.7144C99.2953 55.6067 99.5501 54.042 98.4948 53.5752L67.8662 40.0279L85.0727 7.39505C85.6019 6.39135 84.4745 5.32749 83.5032 5.91398L52.0499 24.9047L39.6912 1.95291C39.2117 1.0624 37.8908 1.21341 37.6247 2.18919Z"
                fill="#FED045"
                stroke="black"
                stroke-width="1.61453"
            />
        </svg>
    );
};
