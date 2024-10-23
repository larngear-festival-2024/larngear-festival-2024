'use client';
import React, {
    ComponentPropsWithoutRef,
    ReactNode,
    useState,
    useEffect,
} from 'react';
import Border from '@/components/border';
import Logo from '@/components/logo';
import { cn } from '@/lib/utils';
import { ChevronLeft } from 'lucide-react';
import GifContainer from '@/components/intro/GifContainer';
import TapToContinueButton from '@/components/intro/TapToContinueButton';
import { useRouter } from 'next/navigation';

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
    const router = useRouter();
    const [canContinue, setCanContinue] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setCanContinue(true);
        }, 3000);

        return () => clearTimeout(timer);
    }, []);
    return (
        <section className={cn('px-4 py-6', className)}>
            <button onClick={() => router.push(previousPage)}>
                <ChevronLeft
                    size={33}
                    className="rounded-full border-2 border-project-dark-blue bg-project-dark-blue text-white"
                />
            </button>
            <div onClick={() => router.push(nextPage)}>
                <Border className="flex flex-col items-center space-y-16 p-8">
                    <Logo size={94} />
                    <GifContainer />
                    {message}
                    <TapToContinueButton showTapToContinue={canContinue} />
                </Border>
            </div>
        </section>
    );
};

export default IntroPage;
