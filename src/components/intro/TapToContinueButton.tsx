'use client';

import { cn } from '@/lib/utils';
import { ChevronRight } from 'lucide-react';
import React from 'react';

interface TapToContinueButtonProps {
    showTapToContinue: boolean;
}

const TapToContinueButton: React.FC<TapToContinueButtonProps> = ({
    showTapToContinue,
}) => {
    return (
        <div
            className={cn(
                'invisible·flex·w-full·animate-fade-in-bounce items-center justify-end space-x-1',
                {
                    visible: showTapToContinue,
                }
            )}
        >
            <div className="flex flex-col items-center font-sov text-base font-normal text-white">
                <p>Tap to</p>
                <p>continue</p>
            </div>
            <ChevronRight size={33} color="white" />
        </div>
    );
};

export default TapToContinueButton;
