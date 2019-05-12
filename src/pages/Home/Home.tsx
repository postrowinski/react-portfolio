import * as React from "react";
import { FormattedMessage } from "react-intl";

const Home: React.FC<{}> = (): JSX.Element => (
    <div className='container-flex-centralized'>
        <FormattedMessage id='nav.home' />
    </div>
);

export default Home;
