import React, { useState } from 'react'
import { TextField, Button, Typography, Paper } from '@material-ui/core';
import FileBase from 'react-file-base64';
import { useStyles } from './styles';

const Form = () => {
    const classes = useStyles();

    const [postData, setPostData] = useState({
        creator: '',
        title: '',
        message: '',
        tags: '',
        selectedFile: ''
    });

    const handleSubmit = (e) => {
        e.preventDefault();
    }

  return (
    <Paper className={classes.paper} style={{ padding: '1rem' }}>
      <form autoComplete='off' noValidate className={classes.form} onSubmit={handleSubmit}>
        <Typography variant="h6">Share your Highlight</Typography>
        <TextField 
          name='creator' 
          label='Creator' 
          variant='outlined' 
          fullWidth
          value={postData.creator}
          onChange={ (e) => setPostData({ ...postData, creator: e.target.value }) }
        />
        <TextField
          name='title'
          label='Title'
          variant='outlined'
          fullWidth
          value={postData.title}
          onChange={ (e) => setPostData({ ...postData, title: e.target.value }) }
        />
        <TextField
          name='message'
          label='Message'
          variant='outlined'
          fullWidth
          multiline
          rows={4}
          value={postData.message}
          onChange={ (e) => setPostData({ ...postData, message: e.target.value }) }
        />
        <div className={classes.fileInput}>
          <FileBase
            type='file'
            multiple={false}
            onDone={({base64}) => setPostData({ ...postData, selectedFile: base64 })}
          />
        </div>
        <Button 
          type='submit'
          variant='contained'
          color='primary'
          className={classes.button}
        >
          Submit
        </Button>
      </form>
    </Paper>
  );
};

export default Form