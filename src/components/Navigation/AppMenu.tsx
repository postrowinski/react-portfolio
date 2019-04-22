import { Button, Drawer, Icon, Menu } from 'antd';
import { ClickParam } from 'antd/lib/menu';
import * as React from "react";
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

interface State {
    current: string;
    drawerVisible: boolean;
}

interface Props extends RouteComponentProps<{}>, InjectedIntlProps {

}

class AppMenu extends React.Component<Props, State> {
    public state: State = {
        current: this.props.history.location.pathname,
        drawerVisible: false
    };

    private showDrawer = (): void => {
        this.setState({
            drawerVisible: true,
        });
    }

    private onClose = (): void => {
        this.setState({
            drawerVisible: false,
        });
    }

    private handleClick = (e: ClickParam): void => {
        this.setState({
            current: e.key,
        });
    }

    private renderMenuItem = (menuItem: IMenuItem): JSX.Element => {
        const {path, label, icon} = menuItem;
        return (
            <MenuItem key={path} onClick={this.onClose}>
                <Link to={path}>
                    {icon && <Icon type={icon} />}
                    <FormattedMessage id={label} />
                </Link>
            </MenuItem>
        );
    }

    private renderMenu = (type: 'horizontal' | 'drawer'): JSX.Element => {
        const { current } = this.state;
        return (
            <>
                <Menu
                    onClick={this.handleClick}
                    selectedKeys={[current]}
                    mode={type === 'horizontal' ? 'horizontal' : 'inline'}
                    theme={type === 'horizontal' ? 'dark' : undefined}
                    className={type === 'horizontal' ? 'horizontal-menu' : ''}
                >
                    {navData.map((item: IMenuItem): JSX.Element => this.renderMenuItem(item))}
                </Menu>
            </>
        );
    }

    public render(): JSX.Element {
        const { drawerVisible } = this.state;
        return (
            <>
                {this.renderMenu('horizontal')}
                <Button
                    type='primary'
                    className='drawer-menu'
                    size='large'
                    style={{margin: '3px 0', width: 60}}
                    onClick={this.showDrawer}
                >
                    <Icon type='menu' style={{fontSize: 24}} />
                </Button>
                <Drawer
                    title='Menu'
                    placement='left'
                    closable={false}
                    onClose={this.onClose}
                    visible={drawerVisible}
                >
                   {this.renderMenu('drawer')}
                </Drawer>
            </>
        );
    }
}

export default withRouter(injectIntl(AppMenu));
