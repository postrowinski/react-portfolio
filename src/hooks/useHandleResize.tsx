import * as _ from 'lodash';
import { useEffect, useState } from 'react';
import { useDebouncedCallback } from 'use-debounce';

declare type FunctionUseHandleResize = (windowEvent: string) => any[];
declare type FunctionHandleResize = () => void;

export const useHandleResize: FunctionUseHandleResize = (windowEvent: string): any[] => {
    const handleResize: FunctionHandleResize = (): void => setValue(window[`${windowEvent}`]);
    const [value, setValue] = useState<any>(window[`${windowEvent}`]);
    const [handleResizeDebounce] = useDebouncedCallback(handleResize, 200);

    useEffect(() => {
        window.addEventListener('resize', handleResizeDebounce);
        return (): void => {
            window.removeEventListener('resize',  handleResizeDebounce);
        };
    }, []);
    return [value];
};
