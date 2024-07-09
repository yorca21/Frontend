import PropTypes from 'prop-types';
import { Container, Header, Sidebar, Sidenav, Nav, Content, Footer } from 'rsuite';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import 'rsuite/dist/rsuite.min.css';

const Dashboard = ({ children }) => {
    return (
        <Router>
            <Container>
                <Sidebar>
                    <Sidenav>
                        <Sidenav.Header>
                            <div style={{ padding: 20, fontSize: 16, fontWeight: 'bold' }}>
                                Dashboard
                            </div>
                        </Sidenav.Header>
                        <Sidenav.Body>
                            <Nav>
                                <Nav.Item as={Link} to="/" icon={<i className="rs-icon rs-icon-home" />}>
                                    Home
                                </Nav.Item>
                                <Nav.Item as={Link} to="/users" icon={<i className="rs-icon rs-icon-user" />}>
                                    Users
                                </Nav.Item>
                                <Nav.Item as={Link} to="/roles" icon={<i className="rs-icon rs-icon-group" />}>
                                    Roles
                                </Nav.Item>
                                <Nav.Item as={Link} to="/permissions" icon={<i className="rs-icon rs-icon-unlock" />}>
                                    Permissions
                                </Nav.Item>
                            </Nav>
                        </Sidenav.Body>
                    </Sidenav>
                </Sidebar>

                <Container>
                    <Header>
                        <h2>Admin Dashboard</h2>
                    </Header>
                    <Content>
                        <Switch>
                            <Route exact path="/">
                                {children}
                            </Route>
                            <Route path="/users">
                                <Users />
                            </Route>
                            <Route path="/roles">
                                <Roles />
                            </Route>
                            <Route path="/permissions">
                                <Permissions />
                            </Route>
                        </Switch>
                    </Content>
                    <Footer>
                        <div style={{ textAlign: 'center' }}>Footer Content</div>
                    </Footer>
                </Container>
            </Container>
        </Router>
    );
};
Dashboard.propTypes = {
    children: PropTypes.func.isRequired,
};
// Example components for routing
const Users = () => <div>Users Component</div>;
const Roles = () => <div>Roles Component</div>;
const Permissions = () => <div>Permissions Component</div>;

export default Dashboard;
