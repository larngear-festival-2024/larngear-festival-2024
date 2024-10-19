import React from 'react';
import IntroPage from '@/components/intro';

const Intro2Page = () => {
    return (
        <IntroPage
            message={
                <div className="text-nowrap text-center text-4xl font-normal text-white">
                    <span className="text-nowrap text-project-yellow">
                        ทุกฝีก้าวของคุณมีความหมาย
                    </span>
                    <p>ไม่ว่าจะเป็น</p>
                    <p>ระยะที่ใกล้กับงานมากขึ้น</p>
                    <p>หรือว่า..</p>
                </div>
            }
            nextPage="/intro-3"
        />
    );
};

export default Intro2Page;
