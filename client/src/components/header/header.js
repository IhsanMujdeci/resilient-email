import React from 'react'
import AppBar from '@material-ui/core/AppBar';
import './header.scss'
import { ReactComponent as Logo } from '../../images/cabcharge-white.svg'

export const Header = () => (
    <AppBar className="header cab-charge-gradient">
        <Logo className="cab-charge-logo"/>
    </AppBar>
);





