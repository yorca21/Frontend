
import { useState } from 'react';
import { Form, ButtonToolbar, Button, Grid, Row, Col } from 'rsuite';
import personService from '../../../services/personService';

const RegisterForm = () => {
  
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    CI:'',
    phone:'',
    email:'',
    address: ''
  });

  const handleChange = (value, name) => {
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async () => {
    
    if (confirm('¿Está seguro realizar el registro?')) {
      try {
        const response = await personService.createPerson(formData);
        if (response) {
          alert('El registro se ha completado.');
          setFormData({
              firstName: '',
              lastName: '',
              CI:'',
              phone:'',
              email:'',
              address: ''
          });
        } else {
          alert('No se recibió una respuesta válida del servidor.');
        }
      } catch (error) {
        alert(error.response?.data?.msg || 'Error en el registro');
      }
    }
  };
 
  return(

    <Grid>
      <Row>
        <Col xs ={6} />
        <Col xs ={10}>
          <h4>Registro de Personal</h4>
          <Form fluid onSubmit={handleSubmit}>
            <Form.Group controlId='firstName'>
                <Form.ControlLabel>Nombre</Form.ControlLabel>
                <Form.Control 
                    name='firstName'
                    type='text'
                    value={formData.firstName}
                    onChange={(value)=> handleChange( value, 'firstName')} 
                />
                <Form.HelpText>El nombre es requerido</Form.HelpText>
            </Form.Group>
            <Form.Group controlId='lastName'>
                <Form.ControlLabel>Apellido</Form.ControlLabel>
                <Form.Control 
                    name='lastName'
                    type='text'
                    value={formData.lastName}
                    onChange={(value)=> handleChange(value, 'lastName')} />
                <Form.HelpText>El apellido es requerido</Form.HelpText>
            </Form.Group>
            <Form.Group controlId='CI'>
                <Form.ControlLabel>CI</Form.ControlLabel>
                <Form.Control 
                    name='CI' 
                    type='number'
                    value={formData.CI}
                    onChange={(value)=> handleChange(value, 'CI')} 
                />
                <Form.HelpText>CI es requerido</Form.HelpText>
            </Form.Group>
            <Form.Group controlId='phone'>
                <Form.ControlLabel>Telefono</Form.ControlLabel>
                <Form.Control 
                    name='phone' 
                    type='number'
                    value={formData.phone}
                    onChange={(value)=> handleChange(value, 'phone')}
                />
                <Form.HelpText>el telefono es requerido</Form.HelpText>
            </Form.Group>
            <Form.Group controlId='email'>
                <Form.ControlLabel>Correo Electronico</Form.ControlLabel>
                <Form.Control 
                    name='email' 
                    type='email'
                    value={formData.email}
                    onChange={(value)=> handleChange(value ,'email')}
                />
                <Form.HelpText tooltip>Email is required</Form.HelpText>
            </Form.Group>
            <Form.Group controlId='address'>
                <Form.ControlLabel>Direccion</Form.ControlLabel>
                <Form.Control 
                    name='address'
                    type='text'
                    value={formData.address}
                    onChange={(value)=> handleChange(value , 'address')}
                />
                <Form.HelpText>Ladireccion es requerida</Form.HelpText>
            </Form.Group>
            <Form.Group>
                <ButtonToolbar>
                  <Button appearance='primary' type='submit'>Enviar</Button>
                  <Button appearance='default' type='botton'>Cancelar</Button>
                </ButtonToolbar>
            </Form.Group>
            </Form>
        </Col>
      </Row>
     
    </Grid>
  );
};
  
  
  

RegisterForm.displayName = 'RegisterForm';

export default RegisterForm;
