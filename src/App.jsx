import { useState, useEffect } from 'react';
import { BrowserRouter,  Navigate,  Route, Routes } from 'react-router-dom';
import Menu from './components/Home/menu'; 
import Login from './components/Login/Login';
import UserForm from './components/Forms/formUsers/registerForm';
import UserList from './components/User/userList';
import AppBar from './helpers/AppBar'
import ProtectedRoute from './helpers/protectedRouter';
import RegisterPerson from './components/Forms/formPerson/regiterPerson';
import RegisterUnit from './components/Forms/formUnits/registerUnit';
import RegisterRole from './components/Forms/formRoles/registerRole';
import RegisterPermission from './components/Forms/formPermissions/registerPermission';

import './styles/styles.css'

function App() {
    
    const[isAuthenticated, setIsAuthenticated] =useState(false);
    const [menuOpen, setMenuOpen] =useState(false);
   
    useEffect(()=>{
        const token = localStorage.getItem('token');
        setIsAuthenticated(!!token);
    },[]);

    const handleLogout= () =>{
        localStorage.removeItem('token');
        setIsAuthenticated(false);
    };
    const toggleMenu = () =>{
        setMenuOpen(!menuOpen);
    };
    const handleLogin = () =>{
        setIsAuthenticated(true);
    };

    return (
        <div>            
            <BrowserRouter>
                <AppBar 
                    isAuthenticated={isAuthenticated}
                    onLogout={handleLogout} 
                    toggleMenu={toggleMenu} 
                />
                <Menu menuOpen={menuOpen} toggleMenu={toggleMenu}/>
                <div style={{marginTop: '64px'}}>
                    <Routes>
                        <Route path='/' element={
                            <ProtectedRoute isAuthenticated={isAuthenticated}>
                                <div className='center-content'> bienvenidos a home</div>
                            </ProtectedRoute>
                        } />
                        <Route path='/login' element ={
                            isAuthenticated ? 
                            <Navigate to = '/'/> : 
                            <div className='center-content'><Login onLogin={handleLogin}/></div>
                            
                        }/>
                       <Route path='/admin/users/register' 
                            element={
                                <ProtectedRoute 
                                    isAuthenticated={isAuthenticated}>
                                    <div className='center-content'>
                                        <UserForm  menuOpen={menuOpen} toggleMenu={toggleMenu} />

                                    </div>
                                        
                                </ProtectedRoute>} /> 
                        <Route path='/admin/users/list' 
                            element={
                                <ProtectedRoute 
                                    isAuthenticated={isAuthenticated}>
                                    <div className='center-contet'>
                                        <UserList  menuOpen={menuOpen} toggleMenu={toggleMenu} />
                                    </div>
                                   
                                </ProtectedRoute>} /> 
                            <Route path='/register-person' 
                                element={
                                    <ProtectedRoute 
                                        isAuthenticated={isAuthenticated}>
                                        <div className='center-contet'>
                                            <RegisterPerson menuOpen={menuOpen} toggleMenu={toggleMenu} />
                                        </div>                                  
                                    </ProtectedRoute>}
                            /> 
                            <Route path='/register-unit' 
                                element={
                                    <ProtectedRoute 
                                        isAuthenticated={isAuthenticated}>
                                        <div className='center-contet'>
                                            <RegisterUnit menuOpen={menuOpen} toggleMenu={toggleMenu} />
                                        </div>                                  
                                    </ProtectedRoute>}
                            /> 
                            <Route path='/register-role' 
                                element={
                                    <ProtectedRoute 
                                        isAuthenticated={isAuthenticated}>
                                        <div className='center-contet'>
                                            <RegisterRole menuOpen={menuOpen} toggleMenu={toggleMenu} />
                                        </div>                                  
                                    </ProtectedRoute>}
                            /> 
                            <Route path='/register-permission' 
                                element={
                                    <ProtectedRoute 
                                        isAuthenticated={isAuthenticated}>
                                        <div className='center-contet'>
                                            <RegisterPermission menuOpen={menuOpen} toggleMenu={toggleMenu} />
                                        </div>                                  
                                    </ProtectedRoute>}
                            /> 
                    </Routes>
                    
                </div>
            </BrowserRouter>            
        </div>
    );
}

export default App;
