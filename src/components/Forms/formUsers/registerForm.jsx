import { useState } from 'react';
import { TextField, Button, Grid, Typography } from '@mui/material';
import '../styles/registerFormStyles.css';

const RegisterForm = () => {
    const [formData, setFormData] = useState({
        username: '',
        password: '',
        person: '',
        role:'',
        unit:''
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Aquí puedes enviar los datos al backend para registrar al usuario
        console.log(formData);
        // Lógica para enviar los datos al backend
    };

    return (
        <form onSubmit={handleSubmit} className='form-wrapper'> 
            <Grid container spacing={2} justifyContent="center">
                <Grid item xs={12}>
                    <Typography variant="h4" className='form-title'>Registro de Usuario</Typography> 
                </Grid>
                <Grid item xs={12} md={6} className='form-field'> {/* Aplicar clase de estilos */}
                    <TextField
                        label='Nombre de usuario'
                        name='username'
                        variant="outlined"
                        fullWidth
                        value={formData.username}
                        onChange={handleChange}
                        required
                    />
                </Grid>
                <Grid item xs={12} md={6} className='form-field'> 
                    <TextField
                        label="Correo electrónico"
                        name="email"
                        type="email"
                        variant="outlined"
                        fullWidth
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                </Grid>
                <Grid item xs={12} className="form-field"> 
                    <TextField
                        label="Contraseña"
                        name='password'
                        type='password'
                        variant='outlined'
                        fullWidth
                        value={formData.password}
                        onChange={handleChange}
                        required
                    />
                </Grid>
                <Grid item xs={12} className="form-button"> 
                    <Button type='submit' variant='contained' color='primary' fullWidth>
                        Registrarse
                    </Button>
                </Grid>
            </Grid>
        </form>
    );
};

export default RegisterForm;
