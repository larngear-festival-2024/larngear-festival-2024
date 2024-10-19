import React, { ReactNode, ComponentPropsWithoutRef } from 'react';
import './style.css';
import { cn } from '@/lib/utils';

interface BorderProps extends ComponentPropsWithoutRef<'div'> {
    children: ReactNode;
}

export default function Border({ children, className }: BorderProps) {
    return (
        <div className={'cliped-boder'}>
            <div className={cn('cliped-content', className)}>{children}</div>
        </div>
    );
}
