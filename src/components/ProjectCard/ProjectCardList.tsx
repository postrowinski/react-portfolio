import { Row } from 'antd';
import * as React from 'react';
import { AppHeader } from '../Header/Header';
import { CardData, ProjectCard } from './ProjectCard';

interface Props {
    title: string;
    data: CardData[];
}

export const ProjectCardList: React.FC<Props> = (props: Props): JSX.Element => {
    const {title, data} = props;
    return (
        <>
            <AppHeader title={title} />
            <Row type='flex' gutter={16} justify='center'>
                {data.map((card: CardData, index: number) => <ProjectCard key={index} {...card} />)}
            </Row>
        </>
    );
};
