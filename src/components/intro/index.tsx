import React, { ComponentPropsWithoutRef, ReactNode } from 'react';
import Border from '@/components/border';
import Logo from '@/components/logo';
import Button from '@/components/button';
import { cn } from '@/lib/utils';
import Link from 'next/link';

interface IntroPageProps extends ComponentPropsWithoutRef<'section'> {
    message: ReactNode;
    nextPage: string;
}

const IntroPage = ({ className, message, nextPage }: IntroPageProps) => {
    return (
        <section className={cn('px-4 py-16', className)}>
            <Border className="flex flex-col items-center space-y-48 p-8">
                <Logo size={94} />
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
