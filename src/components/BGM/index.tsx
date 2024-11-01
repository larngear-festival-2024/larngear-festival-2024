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
            if (window.location.pathname === '/') sound.stop();
        } else {
            if (
                window.location.pathname.startsWith('/intro') ||
                window.location.pathname === '/card'
            )
                sound.play();
        }
    }, [isPlaying]);

    return <></>;
};

export default BGM;
