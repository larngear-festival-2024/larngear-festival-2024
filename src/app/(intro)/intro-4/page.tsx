import React from 'react';
import IntroPage from '@/components/intro';

const Intro4Page = () => {
    return (
        <IntroPage
            message={
                <div className="space-y-4 text-nowrap text-center text-4xl font-normal text-white">
                    <p>
                        ก่อนที่จะตัดสินใจ
                        <span className="text-project-yellow">ปลอมแปลง</span>
                    </p>
                    <p className="text-7xl">ตั๋วเข้างาน</p>
                    <p>ขึ้นมาใหม่</p>
                </div>
            }
            nextPage="/game-1"
        />
    );
};

export default Intro4Page;
