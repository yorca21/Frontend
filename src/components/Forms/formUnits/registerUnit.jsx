
import { Form, ButtonToolbar, Button, Grid, Row, Col } from 'rsuite';
import Textarea from '../../../helpers/Textarea';
import { useState } from 'react';
import unitService from '../../../services/unitService';



const RegisterUnit = () => {

   const [formData, setFormData] = useState({
    name: '',
    description: ''
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
        const response = await unitService.createUnit(formData);
        if (response) {
          alert('El registro se ha completado.');
          setFormData({
            name: '',
            description: '',
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
    <Grid>
      <Row>
        <Col xs={8}/>
        <Col xs={8}>
          <h4>Registro de Unidades</h4>
          <Form fluid onSubmit={handleSubmit}>
              <Form.Group controlId='name'>
                <Form.ControlLabel>Nombre de la Unidad</Form.ControlLabel>
                <Form.Control 
                    name='name'
                    type='text'
                    value={formData.name}
                    onChange={(value)=> handleChange(value, 'name')}
                />
                <Form.HelpText>El nombre es requerido</Form.HelpText>
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
                <Form.HelpText>La descripción es requerida</Form.HelpText>
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
RegisterUnit.displayName = 'RegisterUnit';

export default RegisterUnit;
