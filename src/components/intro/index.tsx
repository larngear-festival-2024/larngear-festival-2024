import React, { ComponentPropsWithoutRef, ReactNode } from 'react';
import Border from '@/components/border';
import Logo from '@/components/logo';

import { cn } from '@/lib/utils';
import Link from 'next/link';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import GifContainer from '@/components/intro/GifContainer';

interface IntroPageProps extends ComponentPropsWithoutRef<'section'> {
    message: ReactNode;
    nextPage: string;
    previousPage: string;
}

const IntroPage = ({
    className,
    message,
    nextPage,
    previousPage,
}: IntroPageProps) => {
    return (
        <section className={cn('px-4 py-6', className)}>
            <Link href={previousPage}>
                <ChevronLeft
                    size={33}
                    className="rounded-full border-2 border-project-dark-blue bg-project-dark-blue text-white"
                />
            </Link>
            <Link href={nextPage}>
                <Border className="flex h-[716px] flex-col items-center justify-end space-y-16 p-8">
                    <Logo size={94} />
                    <GifContainer />
                    {message}
                    <div className="flex w-full animate-bounce items-center justify-end space-x-1">
                        <div className="flex flex-col items-center font-sov text-base font-normal text-white">
                            <p>Tap to</p>
                            <p>continue</p>
                        </div>
                        <ChevronRight size={33} color="white" />
                    </div>
                </Border>
            </Link>
        </section>
    );
};

export default IntroPage;
