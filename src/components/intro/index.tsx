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
import { Icon } from '@iconify/react';
import GifContainer from '@/components/intro/GifContainer';
import TapToContinueButton from '@/components/intro/TapToContinueButton';
import { useRouter } from 'next/navigation';
import { StaticImageData } from 'next/image';

interface IntroPageProps extends ComponentPropsWithoutRef<'section'> {
    message: ReactNode;
    imgUrl?: StaticImageData;
    nextPage: string;
    previousPage: string;
}

const IntroPage = ({
    className,
    message,
    imgUrl,
    nextPage,
    previousPage,
}: IntroPageProps) => {
    const router = useRouter();
    const [canContinue, setCanContinue] = useState(false);
    const [showMessage, setShowMessage] = useState(false);

    useEffect(() => {
        const messageTimer = setTimeout(() => {
            setShowMessage(true);
        }, 1000);

        const continueTimer = setTimeout(() => {
            setCanContinue(true);
        }, 3000);

        return () => {
            clearTimeout(messageTimer);
            clearTimeout(continueTimer);
        };
    }, []);
    return (
        <section
            className={cn(
                'flex min-h-screen flex-col justify-center px-4 py-6',
                className
            )}
        >
            <button onClick={() => router.push(previousPage)}>
                <Icon
                    fontSize={48}
                    icon="akar-icons:circle-chevron-left-fill"
                    className="-mb-4 text-project-dark-blue"
                />
            </button>
            <Border className="flex flex-col items-center space-y-16 p-8 pt-0">
                <Logo size={94} />
                <GifContainer imageUrl={imgUrl} />
                <div
                    className={`transition-opacity duration-1000 ${showMessage ? 'opacity-100' : 'opacity-0'}`}
                >
                    {message}
                </div>
                <TapToContinueButton
                    handleNextpage={() => router.push(nextPage)}
                    showTapToContinue={canContinue}
                />
            </Border>
        </section>
    );
};

export default IntroPage;
