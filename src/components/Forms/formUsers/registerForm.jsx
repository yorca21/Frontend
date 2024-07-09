import { useState, useEffect } from 'react';
import userService from '../../../services/userService';
import unitService from '../../../services/unitService';
import personService from '../../../services/personService';
import permissionService from '../../../services/permissionService';
import roleService from '../../../services/roleService';
import { Form , Button, Container, Col, Row, SelectPicker, Stack } from 'rsuite';
import { TagPicker } from 'rsuite';
/*import VisibleIcon from '@rsuite/icons/Visible';
import UnvisibleIcon from '@rsuite/icons/Unvisible';*/
import 'rsuite/dist/rsuite.min.css';


const UserForm = () => {

    const [people, setPeople] = useState([]);
    const [units, setUnits] = useState([]);
    const [roles, setRoles] = useState([]);
    const [permissions, setPermissions] = useState([])

    const [formData, setFormData] = useState({
        username: '',
        password: '',
        person: '',
        unit: '',
        role:[] , 
        permissions:[] 
    });
    const [showPassword,/*setShowPassword*/] = useState(false);
    
    useEffect(() => {
        
        const fetchData = async () => {
            try {
                const [peopleData, unitsData, rolesData, permissionsData] = await Promise.all([
                    personService.getPersons(),
                    unitService.getUnits(),
                    roleService.getRoles(),
                    permissionService.getPermissions()
                ]);
                setPeople(peopleData.data);
                setUnits(unitsData.data);
                setRoles(rolesData.data);
                setPermissions(permissionsData.data);
            } catch (error) {
                console.log(error)
                console.log({ type: 'error', text: 'Error al cargar los datos' });
            }
        };
        fetchData();

        window.addEventListener('beforeunload', handleBeforeUnload);
        return () => {
            window.removeEventListener('beforeunload', handleBeforeUnload);
        };
    }, []);


    const handleBeforeUnload = (e) => {
        e.preventDefault();
        e.returnValue = '';
    };

    const handleChange = (value, e) => {
        setFormData({
            ...formData,
            [e.target.name]: value
        })
    }

    const handleChange2 = (value, name) => {
        setFormData({
            ...formData,
            [name]: value
        })
    }
    /*const handleClickShowPassword = () => {
        setShowPassword(!showPassword);
    };*/

     const handleSubmit = async (e) => {
        e.preventDefault();
        if (confirm('¿Está seguro de registrar?')) {
            try {
                const response = await userService.createUser(formData);
                if (response) {
                    alert('El registro se ha completado.');
                    setFormData({
                        username: '',
                        password: '',
                        person: '',
                        unit: '',
                        role: [],
                        permissions: []
                    });
                } else {
                    alert('No se recibió una respuesta válida del servidor.');
                }
            } catch (error) {
                alert(error.response?.data?.msg || 'Error en el registro');
            }
        }
    };

    return (

            <Container>
                <Row>
                    <Col>
                        <h4>Registro de Usuario</h4>
                         
                        <Form  onSubmit={handleSubmit}>
                            <Form.Group controlId='username'>
                                <Form.ControlLabel>Nombre de Usuario</Form.ControlLabel>
                                <Form.Control 
                                    name='username' 
                                    type='text' 
                                    autoComplete='off' 
                                    value={formData.username} 
                                    onChange={handleChange} 
                                />
                            </Form.Group>

                            <Form.Group controlId='password'>
                                <Form.ControlLabel>Password</Form.ControlLabel>
                                <Form.Control
                                    name='password'
                                    type={showPassword ? 'text' : 'password'}
                                    autoComplete='off'
                                    value={formData.password}
                                    onChange={ handleChange}
                            
                                />
                            </Form.Group>
                            <Form.Group controlId='people'>
                                <Form.ControlLabel>Persona</Form.ControlLabel>
                                <Stack spacing={10} direction='column' alignItems='flex-start'>
                                    <SelectPicker data={people.map((person) => (
                                        {
                                            label: `${person.firstName} ${person.lastName}`,
                                            value: person._id,
                                        }
                                    ))}  style={{ width: 224}} value={formData.person} onChange={(value, event) => handleChange2(value, 'person', event )} name = 'person' />
                                </Stack>
                                <Form.HelpText>Seleccione la persona para el usuario</Form.HelpText>                                
                            </Form.Group>

                            <Form.Group controlId='units'>
                                <Form.ControlLabel>Unidad</Form.ControlLabel>
                                <Stack spacing={10} direction='column' alignItems='flex-start'>
                                    <SelectPicker data={units.map((unit) => (
                                            {
                                                label: unit.name,
                                                value: unit._id,
                                            }
                                        ))} style={{ width: 224 }} value={formData.unit} onChange={(value, event) => handleChange2(value, 'unit', event)} name='unit'  />
                                </Stack>
                                <Form.HelpText>Seleccione una Unidad</Form.HelpText>
                            </Form.Group>

                            <Form.Group controlId='role'>
                                <Form.ControlLabel>Roles</Form.ControlLabel>
                                    <TagPicker data={roles.map((role) => (
                                        {
                                            label: role.name,
                                            value: role._id,
                                        }
                                    ))} style={{ width: 300 }} value={formData.role} onChange={(value, event) => handleChange2(value, 'roles', event)} name='roles' />     
                                    
                            </Form.Group>

                            <Form.Group controlId='permission'>
                                <Form.ControlLabel>Permisos</Form.ControlLabel>
                                <TagPicker data={permissions.map((permission) => (
                                    {
                                        label: permission.name,
                                        value: permission._id,
                                    }
                                ))} style={{ width: 300 }} value={formData.permissions} onChange={(value, event) => handleChange2(value, 'permissions', event)} name='permissions' />
                            
                            </Form.Group>
                            <Form.Group>
                                <Button type='submit' appearance='primary'>
                                          Registrar 
                                </Button>
                            </Form.Group>
                        </Form>
                    </Col>
                </Row>
            
            </Container>
    );
};

export default UserForm;