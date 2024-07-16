import { Container, Header, Navbar, Nav, IconButton } from 'rsuite';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import MenuIcon from '@rsuite/icons/Menu';

const AppBar = ({ isAuthenticated, onLogout, toggleMenu }) => {
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate('/login');
  };

  const handleLogout = () => {
    onLogout();
    navigate('/');
  };

  return (
    <div className='homepage'>
      <Container>
        <Header>
          <Navbar appearance='inverse' style={{ marginBottom: '20px' }}>
            <Navbar.Brand>
              <IconButton  appearance= 'link' icon={<MenuIcon />} onClick={toggleMenu} />
              <a style={{ color: '#fff' }}>Gestion</a>
            </Navbar.Brand>
            <Nav pullRight>
              {isAuthenticated ? (
                <Nav.Item onClick={handleLogout}>Logout</Nav.Item>
              ) : (
                <Nav.Item onClick={handleLogin}>Login</Nav.Item>
              )}
            </Nav>
          </Navbar>
        </Header>
      </Container>
    </div>
  );
};

AppBar.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired,
  onLogout: PropTypes.func.isRequired,
  toggleMenu: PropTypes.func.isRequired,
};

export default AppBar;
