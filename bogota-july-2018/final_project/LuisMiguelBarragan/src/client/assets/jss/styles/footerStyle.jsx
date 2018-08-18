import { secundaryColor, defaultFont } from '../Style.jsx';

const footerStyle = () => ({
    footerContainer: {
        backgroundColor: secundaryColor,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100px',
        paddingTop: 1,
    },
    titleFooter: {
        color: '#fff',
        fontSize: 16,
        ...defaultFont
    }
});

export default footerStyle;