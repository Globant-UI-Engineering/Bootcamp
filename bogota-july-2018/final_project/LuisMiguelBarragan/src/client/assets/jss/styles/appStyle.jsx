import { drawerWidth } from '../Style.jsx';

const appStyle = theme => ({
    wrapper: {
        position: "fixed",
        top: "0",
        height: "100%",
        width: "100%"
    },
    mainPanel: {
        [theme.breakpoints.up("md")]: {
            width: `calc(100% - ${drawerWidth}px)`
        },
        overflow: "auto",
        position: "relative",
        top: 0,
        float: "right",
        maxHeight: "100%",
        width: "100%",
        overflowScrolling: 'touch'
    },
    content: {
        height: "100%",
        width: "calc(100% - 48px)",
        backgroundColor: theme.palette.background.default,
        padding: theme.spacing.unit * 3,
    },
    toolbar: theme.mixins.toolbar,
    
});

export default appStyle;