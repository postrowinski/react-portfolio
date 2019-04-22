import { IconProps } from "antd/lib/icon";

export interface Item {
    date: string;
    dot?: IconProps;
    color?: string;
}

export const timelineProgressData: Item[] = [
    {
        date: '2016-9',
    },
    {
        date: '2016-10',
        dot: {
            style: {
                color: '#E34F27',
                fontSize: 24
            },
            type: 'html5'
        },
    },
    {
        color: 'green',
        date: '2016-10 / 2016-12',
    },
    {
        date: '2016-11',
    },
    {
        date: '2016-12 / 2017-02',
        dot: {
            style: {
                color: '#9D1616',
                fontSize: 24
            },
            type: 'safety-certificate'
        },
    },
    {
        date: '2017-02'
    },
    {
        date: '2017-02'
    },
    {
        date: '2017-03'
    },
    {
        date: '2017-04 / 2017-07',
        dot: {
            style: {
                color: '#043C17',
                fontSize: 30
            },
            type: 'safety-certificate'
        },
    },
    {
        date: '2017-08',
        dot: {
            style: {
                fontSize: 24
            },
            type: 'search'
        },
    },
    {
        date: '2017-08',
        dot: {
            style: {
                color: '#E34F27',
                fontSize: 24
            },
            type: 'meh'
        },
    },
    {
        date: '2017-09 / 2018-01',
        dot: {
            style: {
                color: '#179B5A',
                fontSize: 24
            },
            type: 'code'
        },
    },
    {
        date: '2017-10',
        dot: {
            style: {
                color: 'green',
                fontSize: 28
            },
            type: 'rise'
        },
    }
];
