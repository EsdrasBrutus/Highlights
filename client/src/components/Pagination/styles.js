import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
    ul: {
        justifyContent: 'space-around',
        padding: 0,
        margin: 20,
        display: 'flex',
        backgroundColor: '#fafafa',
        borderRadius: '5px',
        '& > *': {
            margin: theme.spacing(0.5),
        },
        
    }
}));
