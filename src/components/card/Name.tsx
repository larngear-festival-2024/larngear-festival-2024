import React from 'react';

interface NameProps {
    name: string;
    handleKeyPressed: (e: React.KeyboardEvent<HTMLInputElement>) => void;
    handleNameChanged: (e: string) => void;
}

export default function Name(props: NameProps) {
    const { name, handleKeyPressed, handleNameChanged } = props;

    return (
        <input
            type="text"
            value={name}
            onChange={(e) => handleNameChanged(e.target.value)}
            onKeyPress={handleKeyPressed}
            className="h-9 w-72 rounded-2xl border-2 border-black p-2 text-center"
            placeholder="ชื่อของคุณ"
        />
    );
}
