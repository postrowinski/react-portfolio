import { useEffect, useState } from 'react';

declare type FunctionUseHandleResize = () => number;
declare type FunctionHandleResize = () => void;

export const useHandleResize: FunctionUseHandleResize = (): number => {
    const [windowWidth, setWindowWidth] = useState<number>(window.innerWidth);

    const handleResize: FunctionHandleResize = (): void => setWindowWidth(window.innerWidth);

    useEffect(() => {
        window.addEventListener('resize', handleResize);
        return (): void => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);
    return windowWidth;
};
