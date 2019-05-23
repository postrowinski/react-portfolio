import * as _ from 'lodash';
import * as React from "react";
import { useState } from 'react';
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

declare type SwitchLanguage = (locale: string, messages: string) => void;
export interface LanguageContext {
    switchLanguage: SwitchLanguage;
    locale: string;
}

export const Context: React.Context<LanguageContext> = React.createContext({} as LanguageContext);

addLocaleData([...en, ...pl]);

interface Props {
    children: React.ReactNode;
}

const langaugeStorageKey: string = 'language';
const storageLangauge: string = localStorage.getItem(langaugeStorageKey);

const IntlProviderWrapper: React.FC<Props> = ({ children }: Props): JSX.Element => {
    const defaultLocale: string = _.isNil(storageLangauge) ? 'en' : storageLangauge;
    const defaultMessages: string = _.isNil(storageLangauge) ? localeData[`en`] : localeData[`${storageLangauge}`];
    const [locale, setLocale] = useState<string>(defaultLocale);
    const [messages, setMessages] = useState<string>(defaultMessages);
    // tslint:disable-next-line:variable-name
    const switchLanguage: SwitchLanguage = (_locale: string, _messages: string): void => {
        setLocale(_locale);
        setMessages(_messages);
        localStorage.setItem(langaugeStorageKey, _locale);
    };

    const ContextValues: LanguageContext = {
        locale,
        switchLanguage
    };

    return (
        <Context.Provider value={ContextValues}>
            <IntlProvider locale={locale} messages={messages}>
                {children}
            </IntlProvider>
        </Context.Provider>
    );
}

export { IntlProviderWrapper, Context as IntlContext };
