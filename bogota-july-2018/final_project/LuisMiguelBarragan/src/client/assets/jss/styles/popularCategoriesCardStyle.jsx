import { primaryColor, secundaryColor } from '../Style.jsx';

const popularCategoriesCardStyle = theme => ({
    container: {
        width: '1100px',
        "&  div > div":{
            [theme.breakpoints.up("xs")]: {
                height: 100,
            },
            [theme.breakpoints.up("sm")]: {
                height: 200,
            },
            [theme.breakpoints.up("md")]: {
                height: 250,
            },
        },
        "& div:first-child > div": {
            backgroundColor: secundaryColor,
            position: 'relative',
        },
        "& div:nth-child(2) > div": {
            backgroundColor: primaryColor,
            position: 'relative',
        },
        "& div:nth-child(3) > div": {
            backgroundColor: primaryColor,
            position: 'relative'
        },
        "& div:last-child > div": {
            backgroundColor: secundaryColor,
            position: 'relative'
        }
    },
    cardTitle: {
        position: 'absolute',
        fontSize: 25,
        fontWeight: '600',
        color: '#fff',
        top: '40%',
        left: '0',
        right: '0',
        margin: 'auto',
        width: '300px',
        textAlign: 'center'
    }
});

export default popularCategoriesCardStyle