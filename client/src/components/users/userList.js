import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import { connect } from 'react-redux';

import DialogBox from './userFormDialog';
import Clock from '../clock/clock';

//Actions
import { fetchUsers, updateUserDialogState } from '../../actions';

//css
import './user.css';

const styles = theme => ({
    root: {
        width: '100%',
        marginTop: theme.spacing.unit * 3,
        overflowX: 'auto',
    },
    table: {
        minWidth: 700,
    }
});


class SimpleTable extends Component {

    openDialog = () => {
        this.props.updateUserDialogState(true);
    }

    componentWillMount() {
        this.props.fetchUsers();
    }

    render() {
        const { classes } = this.props;
        return (
            <div className="user-table" >
               <Clock dateprops = {new Date()} opendialog="rafiq"/>
                <DialogBox />
                <Button variant="outlined" color="primary" onClick={this.openDialog}>
                    Add User
                </Button>
                <Paper className={classes.root}>

                    <Table className={classes.table}>
                        <TableHead>
                            <TableRow>
                                <TableCell>Id</TableCell>
                                <TableCell numeric>Name</TableCell>
                                <TableCell numeric>Role</TableCell>
                                <TableCell numeric>Action</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {this.props.users ?
                                (this.props.users.map(row => {
                                    return (
                                        <TableRow key={row._id}>
                                            <TableCell component="th" scope="row">
                                                {row._id}
                                            </TableCell>
                                            <TableCell numeric>{row.name}</TableCell>
                                            <TableCell numeric>{row.role}</TableCell>
                                            <TableCell numeric>Edit</TableCell>
                                        </TableRow>
                                    );
                                }))
                                : (
                                    <TableRow >
                                        <TableCell component="th" scope="row" colSpan="4">
                                           No Records Found!
                                        </TableCell>
                                    </TableRow>
                                )
                            }
                        </TableBody>
                    </Table>
                </Paper>
            </div>
        );
    }
}

SimpleTable.propTypes = {
    classes: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
    users: state.usersList.items
});

export default connect(mapStateToProps, { fetchUsers, updateUserDialogState })(withStyles(styles)(SimpleTable));