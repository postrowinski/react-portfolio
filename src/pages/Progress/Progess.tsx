import * as _ from 'lodash';
import * as React from 'react';
import TimelineProgress from '../../components/TimelineProgress/TimelineProgress';
import { timelineProgressData } from '../../components/TimelineProgress/TimelineProgress.data';

export const Progress: React.FC<{}> = (): JSX.Element =>
    <TimelineProgress data={timelineProgressData} messagesPrefix='progress' />;
