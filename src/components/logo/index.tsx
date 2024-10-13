import Image from 'next/image';
import React from 'react';

/**
 * Logo component that displays an image with a specified size.
 * @param {number} size - The size of the logo image (width) (for height will be calculated from aspect ratio) .
 */

export default function Logo({ size }: { size: number }) {
    return <Image src="logo.svg" alt="logo" width={size} height={size} />;
}
