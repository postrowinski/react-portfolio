import { Button, Drawer, Icon, Menu } from 'antd';
import { IconProps } from 'antd/lib/icon';
import { ClickParam } from 'antd/lib/menu';
import { Location } from 'history';
import * as React from "react";
import { useState } from 'react';
import { FormattedMessage } from 'react-intl';
import { Link, useLocation } from "react-router-dom";
import * as PATHS from './paths';

interface IMenuItem {
    path: string;
    label: string;
    icon?: IconProps;
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

declare type FunctionNoParamsVoid = () => void;
declare type FunctionHandleClick = (e: ClickParam) => void;
declare type FunctionRenderMenuItem = (menuItem: IMenuItem) => JSX.Element;
declare type FunctionRenderMenu = (type: 'horizontal' | 'drawer') => JSX.Element;

export const AppMenu: React.FC<{}> = (): JSX.Element => {
    const location: Location = useLocation();
    const [current, setCurrent] = useState<string>(location.pathname);
    const [drawerVisible, setDrawerVisible] = useState<boolean>(false);

    const showDrawer: FunctionNoParamsVoid = (): void => setDrawerVisible(true);

    const onClose: FunctionNoParamsVoid = (): void => setDrawerVisible(false);

    const handleClick: FunctionHandleClick = (e: ClickParam): void => setCurrent(e.key);

    const renderMenuItem: FunctionRenderMenuItem = (menuItem: IMenuItem): JSX.Element => {
        const {path, label, icon} = menuItem;
        return (
            <MenuItem key={path} onClick={onClose}>
                <Link to={path}>
                    {icon && <Icon {...icon} />}
                    <FormattedMessage id={label} />
                </Link>
            </MenuItem>
        );
    };

    const renderMenu: FunctionRenderMenu = (type: 'horizontal' | 'drawer'): JSX.Element => {
        const horizontalType: boolean = type === 'horizontal';
        return (
            <>
                <Menu
                    onClick={handleClick}
                    selectedKeys={[current]}
                    mode={horizontalType ? 'horizontal' : 'inline'}
                    theme={horizontalType ? 'dark' : undefined}
                    className={horizontalType ? 'horizontal-menu' : ''}
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
