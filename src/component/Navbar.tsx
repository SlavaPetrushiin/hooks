import React from 'react';
import {NavLink} from "react-router-dom";

interface IProps {}

const Navbar = (props: IProps) => {
    return (
        <nav className={'navbar navbar-dark bg-primary navbar-expand-lg'}>
            <div className="navbar-brand">
                Navbar
            </div>
            <ul className={'navbar-nav'}>
                <li className="nav-item">
                    <NavLink className={'nav-link'} exact to="/">Главная</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className={'nav-link'} to="/about">Информация</NavLink>
                </li>
            </ul>
        </nav>
    )
};

export default Navbar;