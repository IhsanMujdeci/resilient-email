import React from 'react'
import AppBar from '@material-ui/core/AppBar';
import './header.component.scss'
import { ReactComponent as Logo } from '../../images/cabcharge-white.svg'

export const HeaderComponent = () => (
    <AppBar className="header cab-charge-gradient">
        <Logo className="cab-charge-logo"/>
    </AppBar>
);





