import React, { useState } from 'react';
import NavbarButton from './NavbarButton';
import {
    HomeIcon,
    TriangleLeftIcon,
    TriangleRightIcon,
    ThreeBarsIcon,
} from '@primer/octicons-react';
import { LocalStorageKeys } from '../Tokens/Constants';
import {
    Grid,
    AppBar,
    Toolbar,
    IconButton,
    Menu,
    MenuItem,
    useMediaQuery,
    Divider,
} from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { useSpring, animated, config } from 'react-spring';
import Text from '../Text';
import './navbar.css';
import { useNavigate } from 'react-router-dom';

/**
 * - Made under the assumption that navbar is there on all pages
 *   (non-signed in people should have a partial navbar)
 *
 * TODO: (most need auth and db)
 * - add profile picture + name support maybe (experiment)
 * - notification indicator support
 * - redux sign in support
 * - make the logo a navlink
 */

const DivIconvWrapper = (props: any) => (
    <div style={{ transform: 'scale(0.8)', display: 'inline-block' }}>{props.icon}</div>
);

function Navbar(props: object) {
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const navigate = useNavigate();
    const goToPage = (page: string) => {
        navigate(page);
    };

    const [isCollapsed, setIsCollapsed] = useState(
        LocalStorageKeys.NAVBAR_COLLAPSED in localStorage
            ? localStorage.getItem(LocalStorageKeys.NAVBAR_COLLAPSED) === 'true'
            : false,
    );
    const toggleCollapsed = () => {
        const newCollapsed = !isCollapsed;
        localStorage.setItem(LocalStorageKeys.NAVBAR_COLLAPSED, newCollapsed.toString());
        setIsCollapsed(newCollapsed);
    };

    const outerWidthStyle = useSpring({
        width: isCollapsed ? '47px' : '201px',
        config: config.stiff,
    });

    const collapseButtonStyle = useSpring({
        marginRight: isCollapsed ? '10px' : '0px',
        config: config.stiff,
    });

    const subtitleStyle = useSpring({
        opacity: isCollapsed ? 0 : 1,
        config: {
            ...config.default,
            clamp: true,
        },
    });

    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const theme = useTheme();
    const isDesktop = useMediaQuery(theme.breakpoints.up('sm'));

    const opacityAnim = useSpring(isCollapsed ? { opacity: 0 } : { opacity: 1 });
    const opacityAnimReversed = useSpring(isCollapsed ? { opacity: 1 } : { opacity: 0 });

    return isDesktop ? (
        <animated.div className="NBOuter" style={outerWidthStyle}>
            <div className="NBNavHeader">
                {isCollapsed ? (
                    <animated.div className="NBLogoOuter" style={opacityAnimReversed}>
                        <div style={{ fontSize: '18px' }}>TD.</div>
                        <div style={{ height: 79, width: 1 }} />
                    </animated.div>
                ) : (
                    <animated.div
                        className="NBLogoOuter"
                        style={{
                            height: 102,
                            ...opacityAnim,
                        }}>
                        <div style={{ position: 'absolute', width: 150 }}>
                            <div style={{ fontSize: '18px' }}>The technical designer.</div>
                            <div style={{ height: 20, width: 1 }} />
                            <div style={{ fontSize: '14px' }}>Bikramjit Dasgupta</div>
                            <div style={{ fontSize: '14px', color: '#B3B3B3' }}>NM3217 Blog</div>
                        </div>
                    </animated.div>
                )}
                <div style={{ height: 20, width: 1 }} />

                <Grid container sx={{ flexGrow: 1, justifyContent: 'flex-end', height: '40px' }}>
                    <animated.div
                        className="NBCollapseButton"
                        style={collapseButtonStyle}
                        onClick={toggleCollapsed}>
                        <div className="NBCollapseButtonInner">
                            {isCollapsed ? (
                                <TriangleRightIcon size={20} />
                            ) : (
                                <TriangleLeftIcon size={20} />
                            )}
                        </div>
                    </animated.div>
                </Grid>
            </div>

            <div>
                <NavbarButton
                    icon={<DivIconvWrapper icon={<HomeIcon size={16} />} />}
                    text={'Home'}
                    to={'/'}
                    isCollapsed={isCollapsed}
                />

                <animated.div className="NBSubtitle" style={subtitleStyle}>
                    {!isCollapsed && (
                        <Text type="Navbar Subtitle" text="ASSIGNMENTS" forceColor="#ABABAB" />
                    )}
                </animated.div>
                <NavbarButton
                    icon={<DivIconvWrapper icon={<ThreeBarsIcon size={16} />} />}
                    text={'Assignment 1'}
                    to={'/assignment/1'}
                    isCollapsed={isCollapsed}
                    isOverride
                    iconOverride={<div style={{ fontSize: 12 }}>A1</div>}
                />
            </div>
        </animated.div>
    ) : (
        <AppBar>
            <Toolbar sx={{ backgroundColor: '#FFF' }}>
                <IconButton id="mobile-menu" sx={{ color: '#4A4A4A' }} onClick={handleClick}>
                    <ThreeBarsIcon />
                </IconButton>

                <Menu
                    id="mobile-menu"
                    open={open}
                    onClose={handleClose}
                    anchorOrigin={{
                        vertical: 'top',
                        horizontal: 'left',
                    }}>
                    {/* Edit here for mobile navbar */}

                    <MenuItem onClick={() => goToPage('/')}>
                        <HomeIcon size={12} />
                        &nbsp;&nbsp;Home
                    </MenuItem>

                    <Divider />
                    <MenuItem onClick={() => goToPage('/assignment/1')}>
                        <ThreeBarsIcon size={12} />
                        &nbsp;&nbsp;Assignment 1
                    </MenuItem>
                </Menu>
            </Toolbar>
        </AppBar>
    );
}

export default Navbar;
