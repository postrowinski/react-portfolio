import { Icon, Timeline } from 'antd';
import { IconProps } from 'antd/lib/icon';
import * as _ from 'lodash';
import * as React from 'react';
import { FormattedMessage, InjectedIntlProps, injectIntl } from 'react-intl';
import { Item } from './TimelineProgress.data';

const { Item: TimeLineItem} = Timeline;

interface Props extends InjectedIntlProps {
    data: Item[];
    messagesPrefix: string;
}

class TimelineProgress extends React.Component<Props, {}> {
    private renderDot = (dot?: IconProps): JSX.Element | undefined => {
        if (_.isNil(dot)) {
            return undefined;
        }
        return (
            <Icon {...dot} />
        );
    }

    private renderTimeLineItem = (item: Item, index: number): JSX.Element => {
        const { color, date, dot } = item;
        return (
            <TimeLineItem key={index} color={color} dot={this.renderDot(dot)}>
                <FormattedMessage id={`${this.props.messagesPrefix}.${index + 1}`} />
                <span style={{paddingLeft: 6, fontWeight: 700}}>
                    {date}
                </span>
            </TimeLineItem>
        );
    }

    public render(): JSX.Element {
        const { data } = this.props;
        return (
            <Timeline mode='alternate'>
                {data.map((item: Item, index: number) => this.renderTimeLineItem(item, index))}
            </Timeline>
        );
    }
}

export default injectIntl(TimelineProgress);
