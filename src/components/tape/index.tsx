import Image from 'next/image';
import React from 'react';

/**
 * Logo component that displays an image with a specified size.
 * @param {number} size - The width of the logo image (px) (for height will be calculated from aspect ratio) .
 */

export default function Tape({ size = 200 }: { size?: number }) {
    return <Image src="tape.svg" alt="tape" width={size} height={size} />;
}
