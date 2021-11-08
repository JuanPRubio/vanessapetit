import { useRef, useState, useEffect } from "react";

const useWindowResize = () => {
    const timer = useRef();
    const [size, setDimensions] = useState({
        windowHeight: window.innerHeight,
        windowWidth: window.innerWidth,
    })

    useEffect(() => {
        const updateWidth = () => {
            clearTimeout(timer.current);

            timer.current = window.setTimeout(() => {
                setDimensions({
                    windowHeight: window.innerHeight,
                    windowWidth: window.innerWidth,
                });
            }, 200);
        }

        window.addEventListener("resize", updateWidth);

        return () => window.removeEventListener("resize", updateWidth);
    }, []);

    return {
        windowHeight: size.windowHeight,
        windowWidth: size.windowWidth
    }
};

export default useWindowResize;