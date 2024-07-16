
import { Form, ButtonToolbar, Button, Grid, Row, Col } from 'rsuite';

const RegisterForm = () => (

  <Grid>
    <Row>
      <Col xs ={8} />
      <Col xs ={16}>
        <Form>
          <Form.Group controlId='firstName'>
              <Form.ControlLabel>Nombre</Form.ControlLabel>
              <Form.Control name='firstName' />
              <Form.HelpText>El nombre es requerido</Form.HelpText>
          </Form.Group>
          <Form.Group controlId='lastName'>
              <Form.ControlLabel>Apellido</Form.ControlLabel>
              <Form.Control name='lastName' />
              <Form.HelpText>El apellido es requerido</Form.HelpText>
          </Form.Group>
          <Form.Group controlId='CI'>
              <Form.ControlLabel>CI</Form.ControlLabel>
              <Form.Control name='CI' type='number' />
              <Form.HelpText>CI es requerido</Form.HelpText>
          </Form.Group>
          <Form.Group controlId='phone'>
              <Form.ControlLabel>Telefono</Form.ControlLabel>
              <Form.Control name='phone' type='number' />
              <Form.HelpText>el telefono es requerido</Form.HelpText>
          </Form.Group>
          <Form.Group controlId='email'>
              <Form.ControlLabel>Correo Electronico</Form.ControlLabel>
              <Form.Control name='email' type='email' />
              <Form.HelpText tooltip>Email is required</Form.HelpText>
          </Form.Group>
          <Form.Group controlId='address'>
              <Form.ControlLabel>Direccion</Form.ControlLabel>
              <Form.Control name='address' />
              <Form.HelpText>Ladireccion es requerida</Form.HelpText>
          </Form.Group>
          <Form.Group>
              <ButtonToolbar>
                <Button appearance='primary'>Submit</Button>
                <Button appearance='default'>Cancel</Button>
              </ButtonToolbar>
          </Form.Group>
          </Form>
      </Col>
    </Row>
   
  </Grid>
);

RegisterForm.displayName = 'RegisterForm';

export default RegisterForm;
