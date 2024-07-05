import { useState } from 'react';
import { Dialog, DialogTitle, DialogContent, DialogActions, Button, TextField } from '@mui/material';
import PropTypes from 'prop-types';
import userService from '../../services/userService';

const EditUser = ({ open, onClose, user }) => {
    const [username, setUsername] = useState(user.username);

    const handleUsernameChange = (event) => {
        setUsername(event.target.value);
    };

    const handleSave = () => {
      
        console.log('Saving changes for the user:', user._id, username);

      userService.updateUser(user._id, { username })
        .then(response => {
             console.log('Updated user:', response.data);
          })
           .catch(error => {
                console.error('Error updating user:', error);
       });

        onClose(); 
    };

    return (
        <Dialog open={open} onClose={onClose}>
            <DialogTitle>Edit User</DialogTitle>
            <DialogContent>
                <TextField
                    label="Username"
                    value={username}
                    onChange={handleUsernameChange}
                    fullWidth
                    autoFocus
                />
            </DialogContent>
            <DialogActions>
                <Button onClick={onClose}>Cancel</Button>
                <Button onClick={handleSave} color="primary">Save</Button>
            </DialogActions>
        </Dialog>
    );
};
EditUser.propTypes = {
    open: PropTypes.bool.isRequired,
    onClose: PropTypes.func.isRequired,
    user: PropTypes.object.isRequired,
};
export default EditUser;
