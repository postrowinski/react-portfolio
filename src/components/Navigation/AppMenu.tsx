import { Button, Drawer, Icon, Menu } from 'antd';
import { ClickParam } from 'antd/lib/menu';
import * as React from "react";
import { useState } from 'react';
import { FormattedMessage, InjectedIntlProps, injectIntl } from 'react-intl';
import { Link, RouteComponentProps, withRouter } from "react-router-dom";
import * as PATHS from './paths';

interface IMenuItem {
    path: string;
    label: string;
    icon?: string;
}

const navData: IMenuItem[] = [
    {
        label: 'nav.home',
        path: PATHS.home
    },
    {
        label: 'nav.progress',
        path: PATHS.progress
    },
    {
        label: 'nav.experience',
        path: PATHS.experience
    },
    {
        label: 'nav.projects',
        path: PATHS.projects
    },
    {
        label: 'nav.contact',
        path: PATHS.contact
    },
];

const  { Item: MenuItem } = Menu;

interface Props extends RouteComponentProps<{}>, InjectedIntlProps {
}

declare type FunctionNoParamsVoid = () => void;
declare type FunctionHandleClick = (e: ClickParam) => void;
declare type FunctionRenderMenuItem = (menuItem: IMenuItem) => JSX.Element;
declare type FunctionRenderMenu = (type: 'horizontal' | 'drawer') => JSX.Element;

const AppMenu: React.FC<Props> = (props: Props): JSX.Element => {
    const [current, setCurrent] = useState<string>(props.history.location.pathname);
    const [drawerVisible, setDrawerVisible] = useState<boolean>(false);

    const showDrawer: FunctionNoParamsVoid = (): void => setDrawerVisible(true);

    const onClose: FunctionNoParamsVoid = (): void => setDrawerVisible(false);

    const handleClick: FunctionHandleClick = (e: ClickParam): void => setCurrent(e.key);

    const renderMenuItem: FunctionRenderMenuItem = (menuItem: IMenuItem): JSX.Element => {
        const {path, label, icon} = menuItem;
        return (
            <MenuItem key={path} onClick={onClose}>
                <Link to={path}>
                    {icon && <Icon type={icon} />}
                    <FormattedMessage id={label} />
                </Link>
            </MenuItem>
        );
    };

    const renderMenu: FunctionRenderMenu = (type: 'horizontal' | 'drawer'): JSX.Element => {
        return (
            <>
                <Menu
                    onClick={handleClick}
                    selectedKeys={[current]}
                    mode={type === 'horizontal' ? 'horizontal' : 'inline'}
                    theme={type === 'horizontal' ? 'dark' : undefined}
                    className={type === 'horizontal' ? 'horizontal-menu' : ''}
                >
                    {navData.map((item: IMenuItem): JSX.Element => renderMenuItem(item))}
                </Menu>
            </>
        );
    };

    return (
        <>
            {renderMenu('horizontal')}
            <Button
                type='primary'
                className='drawer-menu'
                size='large'
                style={{margin: '3px 0', width: 60}}
                onClick={showDrawer}
            >
                <Icon type='menu' style={{fontSize: 24}} />
            </Button>
            <Drawer
                title='Menu'
                placement='left'
                closable={false}
                onClose={onClose}
                visible={drawerVisible}
            >
                {renderMenu('drawer')}
            </Drawer>
        </>
    );
};

export default withRouter<any>(injectIntl<any>(AppMenu));
