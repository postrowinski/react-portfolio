import * as _ from 'lodash';
import * as React from "react";
import { useState } from 'react';
import {IntlProvider} from "react-intl";

declare type MessageRecord = Record<string, string>;

interface LocalData {
    en: MessageRecord;
    pl: MessageRecord;
}

export const localeData: LocalData = {
    en: require('../../locales/messeges_en.json'),
    pl: require('../../locales/messeges_pl.json')
};

declare type SwitchLanguage = (locale: string, messages: MessageRecord) => void;
export interface LanguageContext {
    switchLanguage: SwitchLanguage;
    locale: string;
}

export const Context: React.Context<LanguageContext> = React.createContext({} as LanguageContext);

interface Props {
    children: React.ReactNode;
}

const langaugeStorageKey: string = 'language';
const storageLangauge: string = localStorage.getItem(langaugeStorageKey);

export const IntlProviderWrapper: React.FC<Props> = ({ children }: Props): JSX.Element => {
    const defaultLocale: string = _.isNil(storageLangauge) ? 'en' : storageLangauge;
    // tslint:disable-next-line: max-line-length
    const defaultMessages: MessageRecord = _.isNil(storageLangauge) ? localeData[`en`] : localeData[`${storageLangauge}`];
    const [locale, setLocale] = useState<string>(defaultLocale);
    const [messages, setMessages] = useState<MessageRecord>(defaultMessages);
    // tslint:disable-next-line:variable-name
    const switchLanguage: SwitchLanguage = (_locale: string, _messages: MessageRecord): void => {
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
};
