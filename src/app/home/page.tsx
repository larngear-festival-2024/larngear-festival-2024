import Button from '@/components/button';
import Logo from '@/components/logo';
import Tape from '@/components/tape';
import TimerCard from '@/components/timercard';

export default function Home() {
    return (
        <div className="flex h-screen w-full flex-col items-center justify-between">
            {/* Main */}
            <div className="mb-[71px] mt-[64px] flex h-[709px] w-[347px] flex-grow flex-col items-center justify-start border-2">
                <div className="border-3 mt-4 flex justify-center">
                    <Logo />
                </div>
                <div className="relative flex h-[211px] w-[307px] flex-col items-center border-2 p-[32px]">
                    <div className="absolute">
                        <Tape size={300} />
                    </div>
                </div>
                <div className="z-20">
                    <Button className="-mt-[66px] h-[65px] w-[263px] justify-center bg-project-dark-blue text-4xl text-white">
                        เริ่มต้น
                    </Button>
                </div>

                <div className="flex flex-col items-center">
                    <div className="mt-8 flex flex-row space-x-4">
                        <TimerCard bgClass="bg-project-light-blue" text="00" />
                        <TimerCard bgClass="bg-project-yellow" text="00" />
                        <TimerCard bgClass="bg-project-pink" text="00" />
                        <TimerCard bgClass="bg-project-dark-green" text="00" />
                    </div>

                    <div className="mt-4 flex h-[32px] w-[283px] bg-project-yellow">
                        hms
                    </div>
                </div>
            </div>

            {/* Footer */}
            <div className="inline-flex h-[52px] w-full flex-col items-start justify-start gap-2.5 rounded-tl-lg rounded-tr-lg bg-project-yellow px-[104px] py-4">
                footer
            </div>
        </div>
    );
}
