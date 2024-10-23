import React, { ReactNode, ComponentPropsWithoutRef } from 'react';
import './style.css';
import { cn } from '@/lib/utils';

interface BorderProps extends ComponentPropsWithoutRef<'div'> {
    children: ReactNode;
    className?: string;
    innerClassName?: string;
}

export default function Border({
    children,
    className,
    innerClassName,
}: BorderProps) {
    return (
        <div className={cn('cliped-border', className)}>
            <div className={cn('cliped-content', innerClassName)}>
                {children}
            </div>
        </div>
    );
}
