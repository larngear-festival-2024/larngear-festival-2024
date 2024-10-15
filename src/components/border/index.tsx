import React, { ReactNode } from 'react';
import './style.css';

export default function Border({ children }: { children: ReactNode }) {
    return (
        <div className="cliped-border">
            <div className="cliped-content">{children}</div>
        </div>
    );
}
