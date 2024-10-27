import Image from 'next/image';
import React from 'react';
import logo from '@public/logo.svg';

/**
 * Logo component that displays an image with a specified size.
 * @param {number} size - The width of the logo image (px) (for height will be calculated from aspect ratio) .
 */

export default function Logo({ size = 200 }: { size?: number }) {
    return <Image src={logo} alt="logo" width={size} height={size} />;
}
