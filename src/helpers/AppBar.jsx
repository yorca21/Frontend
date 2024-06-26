import PropTypes from 'prop-types';
import { AppBar, Toolbar, IconButton, Typography, Button } from '@mui/material';
import { Menu as MenuIcon } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';

const CustomAppBar = ({ isAuthenticated, onLogout, toggleMenu }) => {
    
    const navigate = useNavigate();

    const handleLogin = () => {
        navigate('/login');
    };

    const handleLogout = () => {
        
        onLogout();
        navigate('/');
    };

    return (
        <AppBar position='fixed' style={{ backgroundColor: 'transparent', boxShadow: 'none' }}>
            <Toolbar>
                <IconButton edge='start' color='inherit' aria-label='menu' onClick={toggleMenu}>
                    <MenuIcon />
                </IconButton>
                <Typography variant='h6' style={{ flexGrow: 1 }}>
                    Gestion
                </Typography>
                {isAuthenticated ? (
                    <Button color='inherit' onClick={handleLogout}>Logout</Button>
                ) : (
                    <Button color='inherit' onClick={handleLogin}>Login</Button>
                )}
            </Toolbar>
        </AppBar>
    );
};
CustomAppBar.propTypes = {
    isAuthenticated: PropTypes.bool.isRequired,
    onLogout: PropTypes.func.isRequired,
    toggleMenu: PropTypes.func.isRequired,
};

export default CustomAppBar;
