import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Drawer, List, ListItem, ListItemText, ListItemIcon, IconButton, Divider } from '@mui/material';
import { Home as HomeIcon, Person as PersonIcon, Settings as SettingsIcon, Menu as MenuIcon } from '@mui/icons-material';
import '../styles/homeStyles.css';

const Home = ({ menuOpen, toggleMenu }) => {
   
    const isAuthenticated = localStorage.getItem('token') !== null;

    const menuItems = [
        { 
            text: 'Home', 
            icon: <HomeIcon />, 
            path: '/' 
        },
        isAuthenticated && { 
            text: 'Register Users', 
            icon: <PersonIcon />, 
            path: '/admin/users' 
        },
        isAuthenticated && { 
            text: 'Settings', 
            icon: <SettingsIcon />, 
            path: '/admin/settings' 
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
                        <ListItem button component={Link} to={item.path} key={index} onClick={toggleMenu}>
                            <ListItemIcon>{item.icon}</ListItemIcon>
                            <ListItemText primary={item.text} />
                        </ListItem>
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
