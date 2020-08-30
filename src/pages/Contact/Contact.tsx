import * as React from "react";
import { ContactItem } from '../../components/ContactItem/ContactItem';
import { contactItems, IContactItem } from '../../components/ContactItem/ContactItem.data';

export const Contact: React.FC<{}> = (): JSX.Element => {
    return (
        <div className='container-flex-centralized' style={{ flexWrap: 'wrap' }}>
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
