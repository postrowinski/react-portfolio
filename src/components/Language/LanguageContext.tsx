import * as React from "react";
import {addLocaleData, IntlProvider} from "react-intl";

// tslint:disable-next-line
const en = require('react-intl/locale-data/en');
// tslint:disable-next-line
const pl = require('react-intl/locale-data/pl');

interface LocalData {
    en: string;
    pl: string;
}

export const localeData: LocalData = {
    en: require('../../locales/messeges_en.json'),
    pl: require('../../locales/messeges_pl.json')
};

export interface LanguageContext {
    locale: string;
    messages: string;
    switchLanguage(locale: string, messages: string): void;
}

// tslint:disable-next-line:no-empty-interface
interface State extends LanguageContext {}

export const Context: React.Context<LanguageContext> = React.createContext({
    locale: 'pl',
    messages: localeData.pl,
    switchLanguage: (locale: string, messages: string): void => { /* empty block */ }
});

addLocaleData([...en, ...pl]);

class IntlProviderWrapper extends React.Component<{}, State> {
    private switchLanguage = (locale: string, messages: string): void => {
        this.setState({
            locale,
            messages,
            switchLanguage: this.switchLanguage
        });
    }

    public state: State = {
        locale: 'en',
        messages: localeData.en,
        switchLanguage: this.switchLanguage,
    };

    public render(): JSX.Element {
        const { children } = this.props;
        const { locale, messages } = this.state;
        return (
            <Context.Provider value={this.state}>
                <IntlProvider
                    key={locale}
                    locale={locale}
                    messages={messages}
                >
                    {children}
                </IntlProvider>
            </Context.Provider>
        );
    }
}

export { IntlProviderWrapper, Context as IntlContext };
