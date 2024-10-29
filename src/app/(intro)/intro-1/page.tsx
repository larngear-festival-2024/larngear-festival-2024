import IntroPage from '@/components/intro';
import IntroGif from '@public/intro/intro-1.gif';
const Intro1Page = () => {
    return (
        <IntroPage
            message={
                <div className="text-nowrap text-center text-4xl font-normal text-white">
                    <p>คุณกำลังไป</p>
                    <p>งานเทศกาลที่ยิ่งใหญ่แห่งหนึ่ง</p>
                    <p>อย่างเร่งรีบ</p>
                </div>
            }
            imgUrl={IntroGif}
            nextPage="/intro-2"
            previousPage="/"
        />
    );
};

export default Intro1Page;
