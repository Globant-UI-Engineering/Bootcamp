import slider from '../../../img/slider.jpg';
import { secundaryColor } from '../../Style.jsx';

const homeStyle = theme => ({
    container: {
        marginBottom: 20,
    },
    slider: {
        backgroundImage: `url(${slider})`,
        backgroundPosition: 'center left',
        backgroundSize: 'cover',
        //backgroundColor: '#000',
        minHeight: 250,
        [theme.breakpoints.up("sm")]: {
            minHeight: '360px',
        },
        [theme.breakpoints.up("md")]: {
            minHeight: '400px',
        },
        [theme.breakpoints.up("lg")]: {
            minHeight: '500px',
        },
    },
    slider2: {
        //backgroundImage: `url(${slider})`,
        //backgroundPosition: 'center left',
        //backgroundSize: 'cover',
        backgroundColor: '#eee',
        minHeight: 150,
        [theme.breakpoints.up("sm")]: {
            minHeight: '180px',
        },
        [theme.breakpoints.up("md")]: {
            minHeight: '200px',
        },
        [theme.breakpoints.up("lg")]: {
            minHeight: '250px',
        },
    },
    containerCategories: {
        margin: '30px 0'
    },
    categoriesTitle: {
        display: 'flex',
        justifyContent: 'center',
        fontSize: '24px',
        fontWeight: '600',
        marginBottom: '20px',
        color: {secundaryColor}   
    }
});
export default homeStyle;