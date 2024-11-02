import { rotations, translateX, translateY } from '../route';

export const Stamp2 = ({ index }: { index: number }) => {
    return (
        <svg
            // style={{
            //     padding: `0.${Math.abs(3 - index) * 3}5rem`,
            //     transform: `translate(${translateX[index]}%, ${translateY[index]}%) rotate(${rotations[index]}deg)`,
            // }}
            // width="90"
            // height="83"
            style={{
                position: 'absolute',
                aspectRatio: '83 / 90',
                width: '70%',
                height: '70%',
                padding: `0.${Math.abs(3 - 2) * 3}rem`,
                transform: `translate(${translateX[index]}%, ${translateY[index]}%) rotate(${rotations[index]}deg)`,
            }}
            viewBox="0 0 90 83"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M44.8705 81.3702C68.9423 81.3702 88.5734 63.4022 88.5734 41.0989C88.5734 18.7957 68.9423 0.82767 44.8705 0.82767C20.7987 0.82767 1.16759 18.7957 1.16759 41.0989C1.16759 63.4022 20.7987 81.3702 44.8705 81.3702Z"
                fill="#EBA627"
                stroke="black"
                stroke-width="1.61453"
            />
            <ellipse
                cx="57.9027"
                cy="35.11"
                rx="15.6419"
                ry="25.8092"
                fill="#F8DECF"
                stroke="black"
                stroke-width="1.95524"
            />
            <ellipse
                cx="31.7022"
                cy="35.11"
                rx="15.6419"
                ry="25.8092"
                fill="#F8DECF"
                stroke="black"
                stroke-width="1.95524"
            />
            <path
                d="M50.548 34.9145C50.548 34.5576 50.5563 34.2041 50.5726 33.8545L54.9392 35.7658L55.1269 35.8479L55.0374 35.6636L51.5413 28.4568C52.8511 24.5121 55.31 21.8899 58.0978 21.8899C60.1655 21.8899 62.0514 23.3302 63.4246 25.6893C64.7967 28.0465 65.6477 31.3079 65.6477 34.9145C65.6477 38.521 64.7967 41.7825 63.4246 44.1397C62.0514 46.4987 60.1655 47.9391 58.0978 47.9391C56.0302 47.9391 54.1443 46.4987 52.7711 44.1397C51.399 41.7825 50.548 38.521 50.548 34.9145Z"
                fill="black"
                stroke="black"
                stroke-width="0.151087"
            />
            <path
                d="M23.9569 34.9145C23.9569 34.5576 23.9652 34.2041 23.9816 33.8545L28.3481 35.7658L28.5358 35.8479L28.4464 35.6636L24.9503 28.4568C26.2601 24.5121 28.7189 21.8899 31.5068 21.8899C33.5744 21.8899 35.4603 23.3302 36.8335 25.6893C38.2056 28.0465 39.0567 31.3079 39.0567 34.9145C39.0567 38.521 38.2056 41.7825 36.8335 44.1397C35.4603 46.4987 33.5744 47.9391 31.5068 47.9391C29.4392 47.9391 27.5533 46.4987 26.1801 44.1397C24.808 41.7825 23.9569 38.521 23.9569 34.9145Z"
                fill="black"
                stroke="black"
                stroke-width="0.151087"
            />
        </svg>
    );
};
