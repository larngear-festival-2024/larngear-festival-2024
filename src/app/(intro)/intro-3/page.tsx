import React from 'react';
import IntroPage from '@/components/intro';

const Intro3Page = () => {
    return (
        <IntroPage
            message={
                <div className="space-y-8 text-nowrap text-center text-4xl font-normal text-white">
                    <p>“แย่แล้วสิ !”</p>
                    <p>คุณได้อุทานขึ้นมา</p>
                </div>
            }
            nextPage="/intro-4"
        />
    );
};

export default Intro3Page;
