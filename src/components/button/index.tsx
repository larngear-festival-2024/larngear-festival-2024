import { cn } from '@/lib/utils';
import React, { ReactNode } from 'react';

interface ButtonProps {
    className?: string;
    children?: ReactNode;
}

/**
 * Button component that renders a styled button element.
 *
 * @param {string} className - Optional additional class names to apply to the button.
 * @param {ReactNode} children - Optional children elements to be rendered inside the button.
 */

export default function Button({ className, children }: ButtonProps) {
    return (
        <button
            className={cn(
                'rounded-md border-2 border-black bg-project-light-blue px-4',
                className
            )}
        >
            {children}
        </button>
    );
}
