import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
    heading: {
        color: '#133a78',
    },
    image: {
        marginLeft: '15px',
    },
    button: {
        backgroundColor: '#133a78',
        color: '#fff',
        borderRadius: 15,
        padding: '10px 20px',
        fontSize: '1.2rem',
        fontWeight: 'bold',
        border: 'none',
        cursor: 'pointer',
        '&:hover': {
            backgroundColor: '#133a78',
        },
    },
    [theme.breakpoints.down('sm')]: {
        mainContainer: {
            flexDirection: 'column-reverse',
        }
    }
}));
