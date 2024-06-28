import PropTypes from 'prop-types';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Drawer, Collapse ,List, ListItem, ListItemText, ListItemIcon, IconButton, Divider } from '@mui/material';
import { Home as HomeIcon, Person as PersonIcon, Settings as SettingsIcon, Menu as MenuIcon, ExpandLess , ExpandMore,  List as ListIcon, Add as AddIcon } from '@mui/icons-material';
import './homeStyles.css';

const Home = ({ menuOpen, toggleMenu }) => {
   
    const [openUsers, setOpenUsers] = useState(false );
    
    const handleToggleUsers = () => {
        setOpenUsers(!openUsers);
    };

    const isAuthenticated = localStorage.getItem('token') !== null;

    const menuItems = [
        { 
            text: 'Home', 
            icon: <HomeIcon />, 
            path: '/' 
        },
        isAuthenticated && { 
            text: ' Users', 
            icon: <PersonIcon />,
            subMenu: [
                { 
                    text: 'User List', 
                    path: '/admin/users/list',
                    icon: < ListIcon/> 
                },
                { 
                    text: 'Register Users', 
                    path: '/admin/users/register',
                    icon: < AddIcon/>
                }
            ] 
        },
        isAuthenticated && { 
            text: 'Tools', 
            icon: <SettingsIcon />, 
            path: '/admin/Tools' 
        },
    ].filter(Boolean);

    return (
        <div className='home'>
            <Drawer anchor='left' open={menuOpen} onClose={toggleMenu}>
                <div className='drawer-header'>
                    <IconButton onClick={toggleMenu}>
                        <MenuIcon />
                    </IconButton>
                </div>
                <Divider />
                <List>
                    {menuItems.map((item, index) => (
                    <div key={index}>
                        <ListItem button onClick={
                                item.subMenu ? 
                                handleToggleUsers : toggleMenu
                            }
                            component={ item.subMenu ? 'div' : Link } 
                            to={ item.subMenu ?  '#' : item.path }
                        >
                        <ListItemIcon>{item.icon}</ListItemIcon>
                            <ListItemText primary={item.text} />
                            {item.subMenu ? (openUsers ? <ExpandLess /> : <ExpandMore />) : null}
                        </ListItem>
                            {item.subMenu && (
                                <Collapse in={openUsers} timeout='auto' unmountOnExit>
                                    <List component='div' disablePadding>
                                        {item.subMenu.map((subItem, subIndex) => (
                                            <ListItem button component={Link} to={subItem.path} key={subIndex} onClick={toggleMenu}>
                                                <ListItemIcon>{subItem.icon}</ListItemIcon>
                                                <ListItemText inset primary={subItem.text} />
                                            </ListItem>
                                        ))}
                                    </List>
                                </Collapse>
                            )}
                    </div>
                    ))}
                </List>
            </Drawer>
            <div className='content'>
                <h1>Home</h1>
                <p>Bienvenido a la página principal</p>
            </div>
        </div>
    );
};

Home.propTypes = {
    menuOpen: PropTypes.bool.isRequired,
    toggleMenu: PropTypes.func.isRequired,
};

export default Home;
