import { envClientSchema } from '@/env/clientEnvSchema';
import { Howl } from 'howler';
import { useMemo, useEffect, useState } from 'react';

const sound = new Howl({
    src: [`${envClientSchema.NEXT_PUBLIC_BASE_URL}/music/ForgetMeNot.mp3`],
    loop: true,
    format: ['mp3'],
    volume: 0.1,
    autoplay: false,
    html5: true,
    onplayerror: function () {
        sound.once('unlock', function () {
            sound.play();
        });
    },
});

const BGM = () => {
    const playing = useMemo(() => {
        return sound?.playing();
    }, []);
    const [isPlaying, setPlaying] = useState(playing);

    useEffect(() => {
        setPlaying(playing);
    }, [playing]);

    useEffect(() => {
        if (isPlaying) {
            if (
                window.location.pathname ===
                `${envClientSchema.NEXT_PUBLIC_BASE_URL}`
            )
                sound.stop();
        } else {
            if (
                window.location.pathname.startsWith(
                    `${envClientSchema.NEXT_PUBLIC_BASE_URL}/intro`
                ) ||
                window.location.pathname ===
                    `${envClientSchema.NEXT_PUBLIC_BASE_URL}/card`
            )
                sound.play();
        }
    }, [isPlaying]);

    return <></>;
};

export default BGM;
