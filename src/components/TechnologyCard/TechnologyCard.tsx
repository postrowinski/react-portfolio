import { Button, Card, Icon } from 'antd';
import { ButtonType } from 'antd/lib/button';
import * as React from 'react';
import { useState } from 'react';
import { FormattedMessage, useIntl } from 'react-intl';

const { Meta } = Card;

interface Image {
    src: string;
    alt: string;
}

interface Props {
    img: Image;
    title: string;
    description: string;
    content: string;
}

declare type FunctionNoParamsVoid = () => void;
declare type FunctionJSX = () => JSX.Element;

export const TechnologyCard: React.FC<Props> = (props: Props): JSX.Element => {
    const { formatMessage } = useIntl();
    const [readMore, setReadMore] = useState<boolean>(false);

    const toggleReadMore: FunctionNoParamsVoid = (): void => setReadMore(!readMore);

    const renderImg: FunctionJSX = (): JSX.Element => {
        const { alt, src } = props.img;
        return (
            <div style={{height: 280}}>
                <img
                    alt={formatMessage({id : alt})}
                    src={src}
                    style={{
                        display: 'block',
                        height: '100%',
                        objectFit: 'cover',
                        width: '100%'
                    }}
                />
            </div>
        );
    };

    const renderContent: FunctionJSX = (): JSX.Element => (
        <div
            style={{
                alignItems: 'center',
                borderBottom: '1px solid #d9d9d9',
                display: 'flex',
                fontSize: 16,
                height: 280,
                justifyContent: 'center',
                padding: '10px 15px'
            }}
        >
            <FormattedMessage id={props.content} />
        </div>
    );

    const renderInfoButton: FunctionJSX = (): JSX.Element => {
        const buttonType: ButtonType = readMore ? 'danger' : 'primary';
        const iconType: 'cross' | 'info-circle' = readMore ? 'cross' : 'info-circle';
        return (
            <Button
                type={buttonType}
                size='large'
                onClick={toggleReadMore}
                style={{
                    alignItems: 'center',
                    display: 'flex',
                    justifyContent: 'center',
                    width: 240
                }}
            >
                <Icon style={{fontSize: 22}} type={iconType} />
            </Button>
        );
    };

    const cover: JSX.Element = readMore ? renderContent() : renderImg();

    return (
        <Card
            style={{ width: 270, marginRight: 12, marginBottom: 20, display: 'flex', flexDirection: 'column' }}
            cover={cover}
            actions={[renderInfoButton()]}
            bodyStyle={{flex: 1}}
        >
            <Meta
                title={formatMessage({id: props.title})}
                description={formatMessage({id: props.description})}
            />
        </Card>
    );
};
