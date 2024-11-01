export const BorderTop = ({ color }: { color?: string }) => {
    return (
        <svg
            style={{
                width: '100%',
            }}
            viewBox="0 0 358 62"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <mask
                id="path-1-outside-1_550_863"
                maskUnits="userSpaceOnUse"
                x="-3.99997"
                y="-1"
                width="366"
                height="724"
                fill="black"
            >
                <rect
                    fill="white"
                    x="-3.99997"
                    y="-1"
                    width="366"
                    height="724"
                />
                <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M0 63C33.6155 62.9611 60.8539 36.1131 60.8539 3H297C297 36.1371 324.278 63 357.927 63L358 63V719H0V63Z"
                />
            </mask>
            <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M0 63C33.6155 62.9611 60.8539 36.1131 60.8539 3H297C297 36.1371 324.278 63 357.927 63L358 63V719H0V63Z"
                fill={color || '#552CB8'}
            />
            <path
                d="M0 63L-0.00462183 59L-4 59.0046V63H0ZM60.8539 3V-1H56.8539V3H60.8539ZM297 3H301V-1H297V3ZM357.927 63L357.927 67L357.929 67L357.927 63ZM358 63H362V58.9977L357.998 59L358 63ZM358 719V723H362V719H358ZM0 719H-4V723H0V719ZM0.00462183 67C35.7692 66.9586 64.8539 38.3782 64.8539 3H56.8539C56.8539 33.848 31.4617 58.9636 -0.00462183 59L0.00462183 67ZM297 -1H60.8539V7H297V-1ZM357.927 59C326.429 59 301 33.8704 301 3H293C293 38.4038 322.127 67 357.927 67V59ZM357.998 59L357.925 59L357.929 67L358.002 67L357.998 59ZM362 719V63H354V719H362ZM0 723H358V715H0V723ZM-4 63V719H4V63H-4Z"
                fill="black"
                mask="url(#path-1-outside-1_550_863)"
            />
        </svg>
    );
};
