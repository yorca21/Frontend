import { Sidenav, Nav,  Drawer } from 'rsuite';
import { useState } from 'react';
import DashboardIcon from '@rsuite/icons/legacy/Dashboard';
import AdminIcon from '@rsuite/icons/Admin';
import EditIcon from '@rsuite/icons/Edit';
import ListIcon from '@rsuite/icons/List';
import TaskIcon from '@rsuite/icons/Task'
import GearCircleIcon from '@rsuite/icons/legacy/GearCircle';
import PropTypes from 'prop-types'
import { useNavigate } from 'react-router-dom';
const Menu = ({ menuOpen, toggleMenu }) => {
  
  const [activeKey, setActiveKey] = useState('1');
  const navigate = useNavigate();

  const handleSelect = (eventKey) => {
    setActiveKey(eventKey);
    
    switch (eventKey) {
      case '1':
        navigate('/');
        break;
      case '2-1':
        navigate('/admin/users/register');
        break;
      case '2-2':
        navigate('/admin/users/list');
        break;
      case '3-1':
        navigate('/register-person');
        break;
      case '3-2':
        navigate('/register-unit');
        break;
      case '3-3':
        navigate('/register-role');
        break;
      case '3-4':
        navigate('/register-permission');
        break;
      default:
        break;
    }
  };
  return (
    <Drawer placement="left" open={menuOpen} onClose={toggleMenu}>
      <Drawer.Body>
        <div style={{ width: 240 }}>
         
          <hr />
          <Sidenav  defaultOpenKeys={['3', '4']}>
            <Sidenav.Body>
              <Nav activeKey={activeKey} onSelect={handleSelect}>
                <Nav.Item eventKey='1' icon={<DashboardIcon />}>
                  Dashboard
                </Nav.Item>
                <Nav.Menu placement='rightStart' eventKey='2' title='Usuario' icon={<AdminIcon />}>
                  <Nav.Item eventKey='2-1' icon={<EditIcon />}>Registrar</Nav.Item>
                  <Nav.Item eventKey='2-2' icon={<ListIcon />}>Listar</Nav.Item>
                </Nav.Menu>
                <Nav.Menu placement='rightStart' eventKey='3' title='Formularios' icon={<TaskIcon />}>
                  <Nav.Item eventKey='3-1'>Registro de Personas</Nav.Item>
                  <Nav.Item eventKey='3-2'>Registro de Unidades</Nav.Item>
                  <Nav.Item eventKey='3-3'>Registro de Roles</Nav.Item>
                  <Nav.Item eventKey='3-4'>Registro de Permisos</Nav.Item>
                </Nav.Menu>
                <Nav.Menu
                  placement="rightStart"
                  eventKey="4"
                  title="Settings"
                  icon={<GearCircleIcon />}
                >
                  <Nav.Item eventKey="4-1">Applications</Nav.Item>
                  <Nav.Item eventKey="4-2">Channels</Nav.Item>
                  <Nav.Item eventKey="4-3">Versions</Nav.Item>
                  <Nav.Menu eventKey="4-5" title="Custom Action">
                    <Nav.Item eventKey="4-5-1">Action Name</Nav.Item>
                    <Nav.Item eventKey="4-5-2">Action Params</Nav.Item>
                  </Nav.Menu>
                </Nav.Menu>
              </Nav>
            </Sidenav.Body>
            
          </Sidenav>
        </div>
      </Drawer.Body>
    </Drawer>
  );
};
Menu.propTypes = {
  menuOpen: PropTypes.bool.isRequired,
  toggleMenu: PropTypes.func.isRequired,
};

export default Menu;
