import { Icon, Timeline } from 'antd';
import { IconProps } from 'antd/lib/icon';
import * as _ from 'lodash';
import * as React from 'react';
import { FormattedMessage } from 'react-intl';
import { Item } from './TimelineProgress.data';

const { Item: TimeLineItem } = Timeline;

interface Props {
    data: Item[];
    messagesPrefix: string;
}

declare type FunctionRenderDot = (dot?: IconProps) => JSX.Element;
declare type FunctionRenderTimeLineItem = (item: Item, index: number) => JSX.Element;

export const TimelineProgress: React.FC<Props> = (props: Props): JSX.Element => {
    const {data, messagesPrefix} = props;
    const renderDot: FunctionRenderDot = (dot?: IconProps): JSX.Element => {
        if (_.isNil(dot)) {
            return undefined;
        }
        return (
            <Icon {...dot} />
        );
    };

    const renderTimeLineItem: FunctionRenderTimeLineItem = (item: Item, index: number): JSX.Element => {
        const { color, date, dot } = item;
        return (
            <TimeLineItem key={index} color={color} dot={renderDot(dot)}>
                <FormattedMessage id={`${messagesPrefix}.${index + 1}`} />
                <span style={{paddingLeft: 6, fontWeight: 700}}>
                    {date}
                </span>
            </TimeLineItem>
        );
    };

    return (
        <Timeline mode='alternate'>
            {data.map((item: Item, index: number) => renderTimeLineItem(item, index))}
        </Timeline>
    );
};
