import Image from 'next/image';
import Logo from '@public/logo.svg';
import ChooseStamp from './ChooseStamp';
import { envClientSchema } from '@/env/clientEnvSchema';

interface ShareProps {
    name: string;
    tapecolor: string;
    backgroundcolor: string;
    stamps: number[];
}

export default function Share(props: ShareProps) {
    const { name, tapecolor, stamps, backgroundcolor } = props;

    return (
        <section
            className="grid w-full flex-col items-center gap-6 pt-4"
            id="ticket-transparent-container"
        >
            <main className="flex w-full flex-col items-center rounded-2xl border-2 border-white pb-8 pt-4 font-sov text-3xl text-white">
                <section className="grid w-full grid-cols-2">
                    <div className="ml-4 rounded-xl bg-white" />
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
                    {name.slice(0, 16)}
                </section>
                <ChooseStamp tapeColor={tapecolor} stamps={stamps} />
            </main>
            <div className="to-hide -mb-8 grid gap-x-3 p-4 text-center">
                <a
                    href={`${envClientSchema.NEXT_PUBLIC_BASE_URL}/api/generate-image?name=${name.slice(0, 16)}&ticketColor=${backgroundcolor}&tapeColor=${tapecolor}&slot1=${stamps[0]}&slot2=${stamps[1]}&slot3=${stamps[2]}&slot4=${stamps[3]}&slot5=${stamps[4]}&slot6=${stamps[5]}`}
                >
                    <button className="h-12 w-full rounded-lg border-2 border-black bg-project-red-orange text-3xl text-white">
                        แชร์เลย!
                    </button>
                </a>
            </div>
        </section>
    );
}
