import IntroPage from '@/components/intro';
import IntroGif from '@public/intro/intro-2.gif';

const Intro2Page = () => {
    return (
        <IntroPage
            message={
                <div className="text-nowrap text-center text-4xl font-normal text-white">
                    <p>ทันใดนั้นเอง...</p>
                    <p>มีอะไรบางอย่าง...</p>
                    <p>หล่นออกจากกระเป๋า</p>
                </div>
            }
            imgUrl={IntroGif}
            nextPage="/intro-3"
            previousPage="/intro-1"
        />
    );
};

export default Intro2Page;
