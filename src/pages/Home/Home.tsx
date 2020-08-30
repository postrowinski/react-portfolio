import * as React from "react";
import { FormattedMessage } from "react-intl";

export const Home: React.FC<{}> = (): JSX.Element => (
    <div className='home__container'>
        <h1 className='home__title'>
            <FormattedMessage id='home.title' />
        </h1>
        <h2 className='home__sub-title'>
            <FormattedMessage id='home.sub.title' />
        </h2>
    </div>
);