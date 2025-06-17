import { useEffect, useState } from "react";

export const useParallaxBackground = (onParallaxComplete) => {
    const [moonOpacity, setMoonOpacity] = useState(0);
    const [parallaxDone, setParallaxDone] = useState(false);

    useEffect(() => {
        const maxScroll = window.innerHeight * 12;

        const handleScroll = () => {
            if (parallaxDone) return;

            const scrollTop = window.scrollY;
            const clampedScroll = Math.min(scrollTop, maxScroll);
            const opacity = clampedScroll / maxScroll;

            console.log({ scrollTop, clampedScroll, opacity, parallaxDone });

            setMoonOpacity(opacity);

            if (opacity >= 0.9) {
                setParallaxDone(true);
                setMoonOpacity(1);
                document.body.style.overflow = 'hidden';

                window.scrollTo({ top: maxScroll, behavior: 'auto' });

                onParallaxComplete && onParallaxComplete();
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
            document.body.style.overflow = "auto";
        };
    }, [parallaxDone, onParallaxComplete]);

    return {
        moonOpacity,
        parallaxDone,
    }
}