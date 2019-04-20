import * as React from 'react';
import FlagIconFactory, { FlagIcon } from 'react-flag-icon-css';
import { IntlContext, LanguageContext, localeData } from "./LanguageContext";

const Flag: typeof FlagIcon = FlagIconFactory(React, {useCssModules: false});

class LanguageSwitch extends React.Component<{}, {}> {
    public render(): JSX.Element {
        return (
            <IntlContext.Consumer>{({ switchLanguage, locale }: LanguageContext): JSX.Element => (
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
            )}
            </IntlContext.Consumer>
        );
    }
}

export default LanguageSwitch;
