'use client';

import { cn } from '@/lib/utils';
import { ChevronRight } from 'lucide-react';
import React from 'react';

interface TapToContinueButtonProps {
    showTapToContinue: boolean;
    handleNextpage: () => void;
}

const TapToContinueButton: React.FC<TapToContinueButtonProps> = ({
    showTapToContinue,
    handleNextpage,
}) => {
    return (
        <button
            className={cn(
                'invisible flex w-full animate-fade-in-bounce items-center justify-end space-x-1',
                {
                    visible: showTapToContinue,
                }
            )}
            onClick={handleNextpage}
        >
            <div className="flex flex-col items-center font-sov text-base font-normal text-white">
                <p>Tap to</p>
                <p>continue</p>
            </div>
            <ChevronRight size={33} color="white" />
        </button>
    );
};

export default TapToContinueButton;
