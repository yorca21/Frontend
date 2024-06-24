import { BrowserRouter,  Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import Register from './components/Register';
import Home from './components/Home';

function App() {
    return (
        <div>            
            <BrowserRouter>
                <Routes>
                    <Route path='/' element = {<Home/>}/>
                    <Route path='/login' element ={<Login/>}/>
                    <Route path='/register' element ={<Register/>}/>
                </Routes>
            </BrowserRouter>
            
        </div>
    );
}

export default App;
