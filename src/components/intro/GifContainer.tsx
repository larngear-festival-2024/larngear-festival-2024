import React, { ComponentPropsWithoutRef } from 'react';
import { cn } from '@/lib/utils';
import Image, { StaticImageData } from 'next/image';

interface GifContainerProps extends ComponentPropsWithoutRef<'figure'> {
    imageUrl?: StaticImageData;
}

const GifContainer: React.FC<GifContainerProps> = ({ imageUrl, className }) => {
    return (
        <figure
            className={cn(
                'flex h-64 w-64 items-center justify-center border-4 border-white bg-white shadow-lg',
                className
            )}
        >
            {imageUrl ? (
                <Image src={imageUrl} alt="gif" width={256} height={256} />
            ) : (
                <div className="text-9xl">gif</div>
            )}
        </figure>
    );
};

export default GifContainer;
