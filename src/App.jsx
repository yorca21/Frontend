import { useState, useEffect } from 'react';
import { BrowserRouter,  Navigate,  Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import UserForm from './components/Forms/formUsers/registerForm';
import UserList from './components/User/userList';
import CustomAppBar from './helpers/AppBar'
import ProtectedRoute from './helpers/protectedRouter';


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
                <CustomAppBar 
                    isAuthenticated={isAuthenticated}
                    onLogout={handleLogout} 
                    toggleMenu={toggleMenu} 
                />
                <div style={{marginTop: '64px'}}>
                    <Routes>
                        <Route path='/' element={
                            <ProtectedRoute isAuthenticated={isAuthenticated}>
                                <Home menuOpen={menuOpen} toggleMenu={toggleMenu} />
                            </ProtectedRoute>
                        } />
                        <Route path='/login' element ={
                            isAuthenticated ? 
                            <Navigate to = '/'/> : 
                            <Login onLogin={handleLogin}/>
                        }/>
                       <Route path='/admin/users/register' 
                            element={
                                <ProtectedRoute 
                                    isAuthenticated={isAuthenticated}><UserForm  menuOpen={menuOpen} toggleMenu={toggleMenu} />
                                </ProtectedRoute>} /> 
                        <Route path='/admin/users/list' 
                            element={
                                <ProtectedRoute 
                                    isAuthenticated={isAuthenticated}><UserList  menuOpen={menuOpen} toggleMenu={toggleMenu} />
                                </ProtectedRoute>} /> 
                    </Routes>
                    
                </div>
            </BrowserRouter>            
        </div>
    );
}

export default App;
