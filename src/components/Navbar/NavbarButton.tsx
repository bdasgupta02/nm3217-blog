import React from 'react';
import { NavLink as Link } from 'react-router-dom';
import styled from 'styled-components';
import Text from '../Text';
import { animated, useSpring, config } from 'react-spring';
import './navbar.css';

const NavLink = styled(Link)`
    font-size: 14px;
    margin-top: 7px;
    padding-bottom: 2px;
    cursor: pointer;
    text-decoration: none;
    color: #9c9c9c;
    height: 39px;
    display: flex;
    align-items: center;
    outline: 0px solid #c2c2c252;

    -webkit-transition: all 200ms ease-out;
    -moz-transition: all 200ms ease-out;
    -o-transition: all 200ms ease-out;
    -ms-transition: all 200ms ease-out;
    transition: all 200ms ease-out;

    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;

    &:hover {
        box-shadow: 5px 8px 20px #97979730;
        background-color: #e3e3e3;
        outline: 3px solid #e3e3e3;
        outline-offset: -3px;
    }

    &.active {
        box-shadow: 5px 8px 20px #c2c2c252;
        background-color: #c2c2c259;
        outline: 3px solid #c2c2c252;
        outline-offset: -3px;
        font-weight: bold;
        color: #666666;
    }
`;

function NavbarButton({
    icon,
    text,
    to,
    isCollapsed,
    isOverride = false,
    iconOverride = null,
}: {
    icon: React.ReactElement;
    text: string;
    to: string;
    isCollapsed: boolean;
    isOverride?: boolean;
    iconOverride?: any;
}) {
    const textStyle = useSpring({
        opacity: isCollapsed ? '0' : '1',
        display: 'inline-block',
        config: {
            ...config.slow,
            clamp: true,
        },
    });

    return (
        <NavLink end to={to ?? '/'}>
            <div
                style={{
                    width: '100%',
                    textAlign: 'left',
                    marginLeft: '15px',
                    flexDirection: 'row',
                    display: 'flex',
                }}>
                {isOverride ? (isCollapsed ? iconOverride : icon) : icon}
                <animated.div style={textStyle}>
                    <div style={{ position: 'absolute' }}>
                        {!isCollapsed && <Text type="Navbar" text={text} isInline />}
                    </div>
                </animated.div>
            </div>
        </NavLink>
    );
}

export default NavbarButton;
