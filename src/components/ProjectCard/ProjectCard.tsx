import * as _ from 'lodash';
import * as React from 'react';
import { injectIntl, useIntl } from 'react-intl';

declare type RenderLinks = () => JSX.Element;
declare type RenderTechnologies = () => JSX.Element;

interface Image {
    src: string;
    alt: string;
}

export interface CardData {
    img: Image;
    techStack: string;
    linkToWeb?: string;
    linkToCode?: string;
}

// tslint:disable-next-line: no-empty-interface
interface Props extends CardData {}

const classPrefix: 'project-card' = 'project-card';

export const ProjectCard: React.FC<Props> = (props: Props): JSX.Element => {
    const {img, techStack, linkToCode, linkToWeb } = props;
    const { formatMessage } = useIntl();
    const renderTechnologies: RenderTechnologies = (): JSX.Element =>  {
        return (
            <div className={`${classPrefix}__technologies-container`}>
                <h3 className={`${classPrefix}__technologies-title`}>
                    {formatMessage({id: 'projects.card.title.technology'})}:
                </h3>
                <div className={`${classPrefix}__tech-stack`}>{formatMessage({id: techStack})}</div>
            </div>
        );
    };

    const renderLinks: RenderLinks = (): JSX.Element =>  {
        const linkClassName: string = `${classPrefix}__link`;
        return (
            <div className={`${classPrefix}__links-container`}>
                {!_.isNil(linkToCode) &&
                    <a
                        href={linkToCode}
                        className={linkClassName}
                        target='_blank'
                    >
                        {formatMessage({id: 'projects.card.link.full.code'})}
                    </a>
                }
                {!_.isNil(linkToWeb) &&
                    <a
                        href={linkToWeb}
                        className={linkClassName}
                        target='_blank'
                    >
                        {formatMessage({id: 'projects.card.link.live'})}
                    </a>
                }
            </div>
        );
    };

    return (
        <div className={`${classPrefix}__container`}>
            <img className={`${classPrefix}__image`} src={img.src} alt={formatMessage({id: img.alt})} />
            <div className={`${classPrefix}__layer`}>
                <h2 className={`${classPrefix}__title`}>{formatMessage({id: img.alt})}</h2>
                {renderLinks()}
                {renderTechnologies()}
            </div>
        </div>
    );
};
