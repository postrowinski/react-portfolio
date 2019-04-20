import { Icon } from 'antd';
import * as React from 'react';

interface Props {
    icon: string;
    title: string;
    backgroundColor: string;
    link: string;
}

interface Styles {
    [key: string]: React.CSSProperties;
}

const linkSize: number = 100;

const styles: Styles = {
    anchor: {
        alignItems: 'center',
        borderRadius: '50%',
        display: 'flex',
        height: linkSize,
        justifyContent: 'center',
        width: linkSize,
    },
    container: {
        alignItems: 'center',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        margin: '12px 24px'
    },
    icon: {
        color: '#ffffff',
        fontSize: linkSize / 1.6
    }
};

export const ContactItem: React.FC<Props> = (props: Props): JSX.Element => {
    const { backgroundColor, icon, link, title } = props;
    return (
        <div style={styles.container}>
            <a target='blank' href={link}>
                <span style={{...styles.anchor, backgroundColor }}>
                    <Icon type={icon} style={styles.icon} />
                </span>
            </a>
            <h3>
                {title.toUpperCase()}
            </h3>
        </div>
    );
};
