import { useState, useEffect } from 'react';
import permissionService from '../../../services/permissionService';
import { Form, Button, Container, Col, Row, Notification, useToaster, TagPicker, Grid } from 'rsuite';
import 'rsuite/dist/rsuite.min.css';
import Textarea from '../../../helpers/Textarea';

const RegisterRole = () => {
    const [permissions, setPermissions] = useState([]);
    const [formData, setFormData] = useState({
        name: '',
        description: '',
        permissions: []
    });
    // para mensajes
    const toaster = useToaster();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const permissionsData = await permissionService.getPermissions();
                setPermissions(permissionsData.data);
            } catch (error) {
                toaster.push(
                    <Notification type='error' header='Error' closable>
                        Error al cargar los datos
                    </Notification>,
                    { placement: 'topEnd' }
                );
            }
        };
        fetchData();
    }, []);

    const handleChange = (value, name) => {
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = async () => {
        if (confirm('¿Está seguro de registrar?')) {
            try {
                const response = await permissionService.createPermission(formData);
                if (response) {
                    alert('El registro se ha completado.');
                    setFormData({
                        name: '',
                        description: '',
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
        <Grid>
            <Row >
                <Col xs={8}/>
                <Col xs= {8}>
                    <h4>Registro de Roles</h4>
                    <Form fluid onSubmit={handleSubmit}>
                        <Form.Group controlId='name'>
                            <Form.ControlLabel>Rol</Form.ControlLabel>
                            <Form.Control 
                                name='name' 
                                type='text' 
                                value={formData.name} 
                                onChange={(value) => handleChange(value, 'name')} 
                            />
                        </Form.Group>
                        <Form.Group controlId='description'>
                            <Form.ControlLabel>Descripción</Form.ControlLabel>
                            <Form.Control
                                rows={5}
                                name='description'
                                accepter={Textarea}
                                value={formData.description}
                                onChange={(value) => handleChange(value, 'description')}
                            />
                        </Form.Group>
                        <Form.Group controlId='permissions'>
                            <Form.ControlLabel>Permisos</Form.ControlLabel>
                            <TagPicker 
                                data={permissions.map((permission) => ({
                                    label: permission.name,
                                    value: permission._id
                                }))}
                                style={{ width: 300 }}
                                value={formData.permissions}
                                onChange={(value) => handleChange(value, 'permissions')}
                                name='permissions'
                            />
                        </Form.Group>
                        <Form.Group>
                            <Button appearance='primary'>Enviar</Button>
                            <Button appearance='default'>Cancelar</Button>
                        </Form.Group>
                    </Form>
                </Col>
            </Row>
        </Grid>  
    </Container>
      
    );
};

export default RegisterRole;
