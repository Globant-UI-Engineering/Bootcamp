import { primaryColor, secundaryColor } from '../Style.jsx';

const productCardStyle = theme => ({
    card: {
       width: 240,
       maxHeight: 443,
    },
    image: {
        height: 240
    },
    title: {
        fontSize: 18,
       fontWeight: '600',
    },
    subtitle: {
        marginBottom: 12,
    },
    price: {
        marginLeft: theme.spacing.unit,
        fontWeight: '600',
    },
    actionContainer: {
        justifyContent: 'center',
    },
    action: {
        justifyContent: 'space-between',
        borderTop: '1px #eee solid'
    },
    button: {
    },
    
});

export default productCardStyle;