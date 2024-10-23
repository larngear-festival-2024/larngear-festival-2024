import React, { ComponentPropsWithoutRef, ReactNode } from 'react';
import Border from '@/components/border';
import Logo from '@/components/logo';
import Button from '@/components/button';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import { ChevronLeft } from 'lucide-react';
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
            <Border className="flex flex-col items-center space-y-16 p-8">
                <Logo size={94} />
                <GifContainer />
                {message}
                <Link href={nextPage}>
                    <Button className="h-12 w-[263px] text-center text-4xl font-normal text-white">
                        ต่อไป !
                    </Button>
                </Link>
            </Border>
        </section>
    );
};

export default IntroPage;
