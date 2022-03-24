//Modal container is handled here
import React from 'react';
import { useStyles } from './styles';
import { toggleModal } from './state/actions/modalActions';
import { Grid, Button } from '@material-ui/core';
import { useSelector } from 'react-redux';
import './Modal.css';

const Modal = () => {
    const classes = useStyles();
    const { modalOpen} = useSelector(state => state.modal);
    return (
        <Grid container className={classes.container} justify={'center'} alignItems={'center'}> 
            <Grid item xs={12}>
                <div>
                    <Button onClick={() => toggleModal(false)}>Close</Button>
                </div>
            </Grid>
        </Grid>
       );
};

export default Modal;


