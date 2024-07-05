import  { useState, useEffect } from 'react';
import { Container, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button, TextField } from '@mui/material';
import userService from '../../services/userService';
import EditUser from './userEditfield';
import './UserStyles/userListStyles.css'

const UserList = () => {
    const [users, setUsers] = useState([]);
    const [editingUser, setEditingUser] = useState(null);
    const [editMode, setEditMode] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');

    
    useEffect(() => {
        fetchUsers();
    }, []);

    // Función para obtener la lista de usuarios desde el backend
    const fetchUsers = async () => {
        try {
            const response = await userService.getUsers();
            setUsers(response.data);
        } catch (error) {
            console.error('Error fetching users:', error.response || error.message);
            alert('Failed to fetch users. Please try again later.');
            
        }
    };
    const handleEdit = (id) => {
        const userToEdit = users.find(user => user._id === id);
        setEditingUser(userToEdit);
        setEditMode(true);
    };
    const handleCloseEdit = () => {
        setEditingUser(null);
        setEditMode(false);
    };
     const handleSearchChange = (event) => {
        setSearchQuery(event.target.value);
    };
    const filteredUsers = users.filter(user =>
        user.username.toLowerCase().includes(searchQuery.toLowerCase()) ||
        user._id.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <Container className='container'>
            <Button variant="contained" color="primary" onClick={fetchUsers} className='button'>
                Get Users
            </Button>
            <TextField
                label="Search"
                variant="outlined"
                value={searchQuery}
                onChange={handleSearchChange}
                fullWidth
                margin="normal"
            />
            <TableContainer component={Paper} className='table-container'>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell className='table-cell'>Username</TableCell>
                            <TableCell className='table-cell'>Action</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {filteredUsers.map(user => (
                            <TableRow key={user._id}>
                                <TableCell>{user.username}</TableCell>
                                <TableCell>
                                    <Button variant="outlined" className='button' onClick={() => handleEdit(user._id)}>Edit</Button>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
            {
                editMode && (
                    <EditUser
                        open={editMode}
                        onClose={handleCloseEdit}
                        user={editingUser}
                    />
                )
            }
        </Container>
    );
};

export default UserList;