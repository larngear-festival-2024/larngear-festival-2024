import Image from 'next/image';
import Logo from '@public/logo.svg';
import ChooseStamp from './ChooseStamp';
interface ShareProps {
    name: string;
    tapecolor: string;
    stamps: string[];
    handleShareNormal: () => void;
    handleShareTransparent: () => void;
}

export default function Share(props: ShareProps) {
    const {
        name,
        tapecolor,
        stamps,
        handleShareNormal,
        handleShareTransparent,
    } = props;

    return (
        <section
            className="grid w-full flex-col items-center gap-6 pt-4"
            id="ticket-transparent-container"
        >
            <main className="flex w-full flex-col items-center rounded-2xl border-2 border-white pb-8 pt-4 font-sov text-3xl text-white">
                <section className="grid w-full grid-cols-2">
                    <div className="ml-4 h-full rounded-xl bg-white" />
                    <div className="grid place-items-center">
                        <Image alt={Logo} src={Logo} width={105} height={118} />
                        <hr className="mt-2 w-full border-2 border-white" />
                        <h1 className="text-center text-4xl">
                            16:30
                            <br />
                            onward
                        </h1>
                    </div>
                </section>
                <section>
                    <h1 className="text-6xl">
                        7<span className="text-lg">th</span> November
                    </h1>
                </section>
                <section className="mb-8 grid w-full place-items-center bg-white py-1 text-4xl text-project-dark-blue">
                    {name.slice(0, 20)}
                </section>
                <ChooseStamp tapeColor={tapecolor} stamps={stamps} />
            </main>
            <div className="to-hide -mb-8 grid grid-cols-2 gap-x-3 p-4 text-center">
                <button
                    className="h-12 w-full rounded-lg border-2 border-black bg-project-red-orange text-3xl text-white"
                    onClick={handleShareNormal}
                >
                    แชร์ทั้งหมด!
                </button>
                <button
                    className="h-12 w-full rounded-lg border-2 border-black bg-project-light-blue text-3xl text-white"
                    onClick={handleShareTransparent}
                >
                    แชร์กรอบ!
                </button>
            </div>
        </section>
    );
}
