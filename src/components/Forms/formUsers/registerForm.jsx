import { useState, useEffect } from 'react';
import userService from '../../../services/userService';
import { TextField, Button, Container, Typography, Grid, IconButton, InputAdornment } from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import './registerFormStyles.css';  

const UserForm = () => {
    const [formData, setFormData] = useState({
        username: '',
        password: '',
        person: '',
        unit: '',
        role: ''
    });
    const [showPassword, setShowPassword] =useState(false);
    
    useEffect(() => {
        
        window.addEventListener('beforeunload', handleBeforeUnload);
        return () => {
            window.removeEventListener('beforeunload', handleBeforeUnload);
        };
    }, []);

    const handleBeforeUnload = (e) => {
        e.preventDefault();
        e.returnValue = ''; 
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };
    const handleClickShowPassword = () => {
        setShowPassword(!showPassword);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await userService.createUser(formData);
            console.log('User created successfully:', response.data);

            setFormData({
                username: '',
                password: '',
                person: '',
                unit: '',
                role: ''
            });
        } catch (error) {
            console.error('Error creating user:', error);
        }
    };
    return (
        <Container maxWidth='sm' className='container'>
            <Typography variant='h4' component='h1' gutterBottom className='title'>
                Registro de Usuario
            </Typography>
            <form onSubmit={handleSubmit} className='form-grid'>                 
                <TextField
                     label='Username'
                     name='username'
                     value={formData.username}
                     onChange={handleChange}
                     fullWidth
                     required
                     className='text-field'
                     InputLabelProps={{
                        className :  'textfield_label'
                     }}
                     InputProps={{
                        className: 'textfield_input'
                    }}
                />
                 <TextField
                     label='Password'
                     type='password'
                     name='password'
                     value={formData.password}
                     onChange={handleChange}
                     fullWidth
                     required
                     className='text-field'
                     InputLabelProps={{
                        className :  'textfield_label'
                     }}
                    InputProps={{
                        className:'textfield_input',
                        endAdornment: (
                            <InputAdornment posittion ='end'>
                                <IconButton
                                    aria-label='toggle password visibility'
                                    onClick={handleClickShowPassword}
                                    edge='end'
                                >
                                    {showPassword ? <VisibilityOff />: <Visibility/>}
                                </IconButton>
                            </InputAdornment>      
                        )
                     }}              
                />                      
                <TextField
                    label='Person'
                    name='person'
                    value={formData.person}
                    onChange={handleChange}
                    fullWidth
                    required
                    className='text-field'
                    InputLabelProps={{
                       className :  'textfield_label'
                    }}
                    InputProps={{
                       className: 'textfield_input'
                   }}
                />
                 <TextField
                    label='Unit'
                    name='unit'
                    value={formData.unit}
                    onChange={handleChange}
                    fullWidth
                    required
                    className='text-field'
                    InputLabelProps={{
                       className :  'textfield_label'
                    }}
                    InputProps={{
                       className: 'textfield_input'
                   }}
                />
                <TextField
                     label='Role'
                     name='role'
                     value={formData.role}
                     onChange={handleChange}
                     fullWidth
                     required
                     className='text-field'
                     InputLabelProps={{
                        className :  'textfield_label'
                     }}
                     InputProps={{
                        className: 'textfield_input'
                    }}
                 />
                 <Grid item xs={12} className='button-container'>
                    <Button type='submit' variant='contained' color='primary' fullWidth className='button'>
                                Crear Usuario
                    </Button>
                </Grid>
            </form>
        </Container>
    );
};

export default UserForm;