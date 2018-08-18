import { primaryColor, secundaryColor, dangerColor } from '../Style.jsx';

const labelProductStatusStyle = theme => ({
    labelOutOfStock: {
        textAlign: 'center',
        marginBottom: 20,
        backgroundColor: secundaryColor,
        '& > span': {
            color: dangerColor,
            padding: '5px 0',
            fontWeight: '600'
        }
    },
    labelInStock: {
        textAlign: 'center',
        marginBottom: 20,
        backgroundColor: secundaryColor,
        '& > span': {
            color: primaryColor,
            padding: '5px 0',
            fontWeight: '600'
        }
    },
});

export default labelProductStatusStyle;