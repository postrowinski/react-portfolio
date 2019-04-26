import { Button, Card, Icon } from 'antd';
import { ButtonType } from 'antd/lib/button';
import * as React from 'react';
import { FormattedMessage, InjectedIntlProps, injectIntl } from 'react-intl';

const { Meta } = Card;

interface Image {
    src: string;
    alt: string;
}

interface Props extends InjectedIntlProps {
    img: Image;
    title: string;
    description: string;
    content: string;
}

interface State {
    readMore: boolean;
}

class TechnologyCard extends React.Component<Props, State> {
    public state: State = {
        readMore: false
    };

    private toggleReadMore = (): void => {
        this.setState((prevState: State) => ({
            readMore: !prevState.readMore
        }));
    }

    private renderImg = (alt: string, src: string): JSX.Element => {
        const {formatMessage} = this.props.intl;
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
                    }} />
            </div>
        );
    }

    private renderContent = (content: string): JSX.Element => (
        <div style={{height: 280, display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
            <FormattedMessage id={content} />
        </div>
    )

    private renderInfoButton = (): JSX.Element => {
        const { readMore } = this.state;
        const buttonType: ButtonType = readMore ? 'danger' : 'primary';
        const iconType: string = readMore ? 'cross' : 'info-circle';
        return (
            <Button
                type={buttonType}
                size='large'
                onClick={this.toggleReadMore}
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
    }

    public render(): JSX.Element {
        const { content, description, img, title, intl} = this.props;
        const { src, alt } = img;
        const { readMore } = this.state;
        const { formatMessage } = intl;

        const cover: JSX.Element = readMore ? this.renderContent(content) : this.renderImg(alt, src);
        return (
            <Card
                style={{ width: 270, marginRight: 12, marginBottom: 20 }}
                cover={cover}
                actions={[this.renderInfoButton()]}
            >
                <Meta
                    title={formatMessage({id: title})}
                    description={formatMessage({id: description})}
                />
            </Card>
        );
    }
}

export default injectIntl(TechnologyCard);
