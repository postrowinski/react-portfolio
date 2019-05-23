import * as React from 'react';
import { useContext } from 'react';
import FlagIconFactory, { FlagIcon } from 'react-flag-icon-css';
import { IntlContext, LanguageContext, localeData } from "./LanguageContext";

const Flag: typeof FlagIcon = FlagIconFactory(React, {useCssModules: false});

export const LanguageSwitch: React.FC<{}> = (): JSX.Element => {
    const {switchLanguage, locale} = useContext<LanguageContext>(IntlContext);
    return (
        <>
            {locale === 'en' ?
                <span onClick={(): void => switchLanguage('pl', localeData.pl)}>
                    <Flag code='pl' size='2x' />
                </span> :
                <span onClick={(): void => switchLanguage('en', localeData.en)}>
                    <Flag code='gb' size='2x' />
                </span>
            }
        </>
    );
};
