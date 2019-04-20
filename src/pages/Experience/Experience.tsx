import { Row } from "antd";
import * as React from "react";
import { AppHeader } from "../../components/Header/Header";
import TechnologyCard from '../../components/TechnologyCard/TechnologyCard';
import { beginnerKnowTech, goodKnowTech, TechCard } from '../../components/TechnologyCard/TechnologyCard.data';

declare type FunctionRenderCards = (cards: TechCard[], title: string) => JSX.Element;

export const Experience: React.FC<{}> = (): JSX.Element => {
    const renderCards: FunctionRenderCards = (cards: TechCard[], title: string): JSX.Element => (
        <>
            <AppHeader title={title} />
            <Row type='flex' justify='center'>
                {cards.map((card: TechCard, index: number) => (
                    <TechnologyCard
                        key={index}
                        img={card.img}
                        description={card.description}
                        content={card.content}
                        title={card.title}
                    />
                ))}
            </Row>
        </>
    );

    return (
        <>
            {renderCards(goodKnowTech, 'title.technologies')}
            {renderCards(beginnerKnowTech, 'title.technologies.beginner')}
        </>
    );
};
