import * as React from "react";
import { ContactItem } from '../../components/ContactItem/ContactItem';
import { contactItems, IContactItem } from '../../components/ContactItem/ContactItem.data';

interface Styles {
    [key: string]: React.CSSProperties;
}

const styles: Styles = {
    container: {
        alignItems: 'center',
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        minHeight: `calc(100vh - 130px)`
    }
};

const Contact: React.FC<{}> = (): JSX.Element => {
    return (
        <div style={styles.container}>
            {contactItems.map((contactItem: IContactItem, index: number) => {
                const { backgroundColor, icon, link, title} = contactItem;
                return (
                    <ContactItem
                        key={index}
                        backgroundColor={backgroundColor}
                        icon={icon}
                        link={link}
                        title={title}
                    />
                );
            })}
        </div>
    );
};

export default Contact;
