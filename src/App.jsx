import { useState, useEffect } from 'react';
import { BrowserRouter,  Navigate,  Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Login from './components/Login';
import Register from './components/Register';
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
                        <Route path='/register' element ={<Register/>}/>
                    </Routes>
                </div>
            </BrowserRouter>            
        </div>
    );
}

export default App;
