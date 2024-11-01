import React, { ReactNode, ComponentPropsWithoutRef } from 'react';
import './style.css';
import { cn } from '@/lib/utils';
import Image from 'next/image';
import { Colors } from '@/const/color';
import BGM from '@/components/BGM';

interface BorderProps extends ComponentPropsWithoutRef<'div'> {
    children: ReactNode;
    topBorder?: string;
    className?: string;
}

export default function Border({
    children,
    topBorder = 'bg-project-dark-blue',
    className,
}: BorderProps) {
    return (
        <div className="flex w-full flex-col items-center justify-center">
            <BGM />
            <Image
                src={Colors[topBorder as keyof typeof Colors]}
                alt="border-top"
                className="w-full"
            />
            <div
                // -mt-[4px] is magic number to merge border-top and div
                className={cn(
                    '-mt-[1px] min-h-10 w-full border-b-4 border-l-4 border-r-4 border-b-black border-l-black border-r-black bg-project-dark-blue',
                    className
                )}
            >
                {children}
            </div>
        </div>
    );
}
