import { Form, ButtonToolbar, Button, Grid, Row, Col } from 'rsuite';
import Textarea from '../../../helpers/Textarea';

const RegisterPermission = () => (
  <Grid>
    <Row>
      <Col xs={8} />
      <Col>
        <Form>
            <Form.Group controlId='name'>
              <Form.ControlLabel>Nombre</Form.ControlLabel>
              <Form.Control name='name' />
              <Form.HelpText>El nombre es requerido</Form.HelpText>
            </Form.Group>
            <Form.Group controlId='description'>
              <Form.ControlLabel>Descripción</Form.ControlLabel>
              <Form.Control rows={5} name='description' accepter={Textarea} />
              <Form.HelpText>La descripción es requerida</Form.HelpText>
            </Form.Group>
            <Form.Group>
              <ButtonToolbar>
                <Button appearance='primary'>Enviar</Button>
                <Button appearance='default'>Cancelar</Button>
              </ButtonToolbar>
            </Form.Group>
        </Form>
      </Col>
    </Row>
  </Grid>
);


RegisterPermission.displayName = 'RegisterPermission';

export default RegisterPermission;
