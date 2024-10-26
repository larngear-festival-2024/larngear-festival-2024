import { Icon } from '@iconify/react';
import Link from 'next/link';

export default function Footer() {
    return (
        <div className="flex w-full flex-row items-center justify-center gap-2.5 rounded-tl-lg rounded-tr-lg bg-project-yellow px-[104px] py-4 font-sov text-xl text-black">
            <Link
                href="https://www.instagram.com/larngearfest2024/"
                className="mx-auto flex flex-row items-center justify-center gap-2.5"
            >
                <span>
                    <Icon
                        icon="akar-icons:instagram-fill"
                        style={{ fontSize: '24px' }}
                    />
                </span>
                <p>@larngearfest2024</p>
            </Link>
        </div>
    );
}
