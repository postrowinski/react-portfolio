import * as React from 'react';
import { FormattedMessage } from 'react-intl';

interface Props {
    title: string;
}

const Header: React.FC<Props> = (props: Props): JSX.Element => {
    return (
        <div className='app-header'>
            <FormattedMessage id={props.title} />
        </div>
    );
};

export { Header as AppHeader };
