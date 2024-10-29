import IntroPage from '@/components/intro';
import IntroGif from '@public/intro/intro-4.gif';

const Intro4Page = () => {
    return (
        <IntroPage
            message={
                <div className="text-nowrap text-center text-4xl font-normal text-white">
                    <p>คุณจึงรีบทำตั๋วงานขึ้นมาใหม่</p>
                    <p>ในรูปแบบของคุณเอง!!!</p>
                </div>
            }
            imgUrl={IntroGif}
            previousPage="/intro-3"
            nextPage="/card"
        />
    );
};

export default Intro4Page;
