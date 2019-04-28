import * as _ from 'lodash';
import { useEffect, useState } from 'react';
import { useDebouncedCallback } from 'use-debounce';

declare type FunctionUseHandleResize = () => number;
declare type FunctionHandleResize = () => void;

export const useHandleResize: FunctionUseHandleResize = (): number => {
    const handleResize: FunctionHandleResize = (): void => setWindowWidth(window.innerWidth);
    const [windowWidth, setWindowWidth] = useState<number>(window.innerWidth);
    const [handleResizeDebounce] = useDebouncedCallback(handleResize, 200);

    useEffect(() => {
        window.addEventListener('resize', handleResizeDebounce);
        return (): void => {
            window.removeEventListener('resize',  handleResizeDebounce);
        };
    }, []);
    return windowWidth;
};
