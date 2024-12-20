import React from 'react';

interface NameProps {
    name: string;
    handleNameChanged: (e: string) => void;
}

export default function Name(props: NameProps) {
    const { name, handleNameChanged } = props;

    return (
        <div className="flex flex-col items-center gap-6">
            <h1 className="text-3xl text-white">บัตรนี้แสดงตนถึง</h1>
            <input
                type="text"
                value={name}
                required
                onChange={(e) => handleNameChanged(e.target.value)}
                className="h-9 w-72 rounded-xl border-2 border-black p-2 text-center text-2xl"
                placeholder="ชื่อของคุณ"
            />
            <h1 className="text-3xl text-white">เปลี่ยนสีตั๋วงาน</h1>
        </div>
    );
}
