//Modal container is handled here
import React from 'react';
import { useStyles } from './styles';
import { toggleModal } from './state/actions/modalActions';
import { Grid, Button } from '@material-ui/core';
import { useSelector } from 'react-redux';
import Form from '../Form/Form';
import './Modal.css';

const Modal = () => {
    const classes = useStyles();
    const modal = useSelector(state => state.modal);
    const dispatch = useDispatch();
    return (
        <Grid container className={classes.container} justify={'center'} alignItems={'center'}> 
            <Grid item xs={12}>
                <div>
                    <Button onClick={() => dispatch(toggleModal(false))}>X</Button>
                    <Form />
                </div>
            </Grid>
        </Grid>
       );
};

export default Modal;


