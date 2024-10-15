import React, { useEffect, useState } from 'react';

interface ShareProps {
    name: string;
}

export default function Share(props: ShareProps) {
    const { name } = props;
    const [date, setDate] = useState<string | null>(null);

    useEffect(() => {
        const getCurrentDate = () => {
            const date = new Date();
            const day = String(date.getDate()).padStart(2, '0');
            const month = String(date.getMonth() + 1).padStart(2, '0');
            const year = date.getFullYear();
            return `${day}/${month}/${year}`;
        };
        setDate(getCurrentDate);
    }, [date]);

    return (
        <main className="flex h-52 flex-col items-center gap-5 text-3xl text-white">
            <div className="rounded-xl bg-yellow-400 px-8 py-5 text-purple-700">
                {name}
            </div>
            <div>Date: {date}</div>
            <div>Seat: 70</div>
        </main>
    );
}
