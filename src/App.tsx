import 'babel-polyfill';
// tslint:disable-next-line:ordered-imports
import { Layout, Row } from 'antd';
import 'antd/dist/antd.less';
import * as React from "react";
import { hot } from 'react-hot-loader/root';
import { FormattedMessage } from 'react-intl';
import { HashRouter as Router } from 'react-router-dom';
import './assets/scss/app.scss';
import { IntlProviderWrapper } from './components/Language/LanguageContext';
import { LanguageSwitch } from './components/Language/LanguageSwitch';
import AppMenu from './components/Navigation/AppMenu';
import { Routing } from './components/Navigation/Routing';

const { Header, Content, Footer } = Layout;

const App: React.FC<{}> = (): JSX.Element => (
    <IntlProviderWrapper>
        <Router>
            <Layout style={{minHeight: '100vh'}}>
                <Header>
                    <div className='container'>
                        <Row type='flex' justify='space-between' align='middle'>
                            <AppMenu />
                            <LanguageSwitch />
                        </Row>
                    </div>
                </Header>
                <div style={{ background: '#F1F1F1', flex: 1, display: 'flex', position: 'relative' }}>
                    <Content className='container'
                        style={{
                            display: 'flex',
                            flexDirection: 'column'
                        }}
                    >
                        <Routing />
                    </Content>
                </div>
                <Footer prefixCls='app-footer'>
                    <FormattedMessage id={'footer'} />
                    <span style={{color: '#ffffff', paddingLeft: 6}}>Przemysław Ostrowiński</span>
                </Footer>
            </Layout>
        </Router>
    </IntlProviderWrapper>
);

export default hot(App);
