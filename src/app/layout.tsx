import React from 'react';
import type { Metadata } from 'next';
import localFont from 'next/font/local';
import './globals.css';
import Background from '@/components/background';

const bangkok = localFont({
    src: [
        { path: './fonts/bangkok/bold.ttf', weight: '700', style: 'normal' },
        {
            path: './fonts/bangkok/bold-italic.ttf',
            weight: '700',
            style: 'italic',
        },
        { path: './fonts/bangkok/regular.ttf', weight: '400', style: 'normal' },
        {
            path: './fonts/bangkok/regular-italic.ttf',
            weight: '400',
            style: 'italic',
        },
    ],
    variable: '--font-bangkok',
});

const sov = localFont({
    src: [
        { path: './fonts/sov/bold.ttf', weight: '700', style: 'normal' },
        { path: './fonts/sov/italic.ttf', weight: '400', style: 'italic' },
        { path: './fonts/sov/regular.ttf', weight: '400', style: 'normal' },
    ],
    variable: '--font-sov',
});

export const metadata: Metadata = {
    title: 'LG festival 2024',
    description: 'Larngear festival 2024, Chulalongkorn university',
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body
                className={`${bangkok.variable} ${sov.variable} font-bangkok antialiased`}
            >
                <div className="mx-auto min-h-dvh max-w-md overflow-hidden">
                    <Background>{children}</Background>
                </div>
            </body>
        </html>
    );
}
