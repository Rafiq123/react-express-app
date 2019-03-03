import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import { withStyles } from '@material-ui/core/styles';
import FormControl from '@material-ui/core/FormControl';
import { connect } from 'react-redux';

//action
import { updateUserDialogState, addOrUpdateUser, resetFormData } from '../../actions';

const styles = theme => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    formControl: {
        width: '100%'
    },
    selectEmpty: {
        marginTop: theme.spacing.unit * 2,
    },
});

class FormDialog extends Component {
    constructor(props) {
        super(props);

        this.state = {
            name: '',
            role: ''
        };
    };

    handleClose = () => {
        this.setState({ open: false }, () => {
            this.props.updateUserDialogState(false);
        });
    };

    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }

    handleSubmit = () => {
        let userData = {
            data: {
                "name": this.state.name,
                "role": this.state.role
            },
            open: false
        }
        this.props.addOrUpdateUser(userData);
        this.handleResetForm();
    }

    handleResetForm = () => {
        this.setState({ name : '', role : ''});
    }

    render() {
        const { name, role } = this.state;
        const { classes } = this.props;
        return (
            <div>
                <Dialog
                    fullWidth
                    open={this.props.open}
                    onClose={this.handleClose}
                    onEntering={this.handleResetForm}
                    aria-labelledby="form-dialog-title"
                >
                    <DialogTitle id="form-dialog-title">New User</DialogTitle>
                    <DialogContent>
                        <TextField
                            autoFocus
                            margin="dense"
                            name="name"
                            label="Email Address"
                            type="email"
                            onChange={this.handleChange}
                            value={name}
                            fullWidth
                        />

                        <FormControl className={classes.formControl}>
                            <Select
                                value={role}
                                onChange={this.handleChange}
                                name="role"
                                className={classes.selectEmpty}
                                fullWidth
                            >
                                <MenuItem value="" >
                                    Role
                                </MenuItem>
                                <MenuItem value="admin">Admin</MenuItem>
                                <MenuItem value="super user">Super User</MenuItem>
                                <MenuItem value="user">User</MenuItem>
                            </Select>
                        </FormControl>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={this.handleClose} color="primary">
                            Cancel
                         </Button>
                        <Button onClick={this.handleSubmit} color="primary">
                            Submit
                         </Button>
                    </DialogActions>
                </Dialog>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    open: state.usersList.open,
    userInfo: state.usersList.item
});


export default connect(mapStateToProps, { updateUserDialogState, addOrUpdateUser, resetFormData })(withStyles(styles)(FormDialog));