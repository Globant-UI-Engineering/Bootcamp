import Home from '../../views/Home/Home.jsx';
import Task from '../../views/Task/Task.jsx';
import Protein from '../../views/Category/ProteinPage.jsx';
import VitaminPage from '../../views/Category/VitaminPage.jsx';
import FoodPage from '../../views/Category/FoodPage.jsx';


import { Store, Subject } from '@material-ui/icons';

const dashboardRoutes = [
    {
        path: [
            "/",
            "/"
        ],
        exact: true,
        sidebarName: "Inicio",
        navbarName: "Hus Protein",
        icon: Store,
        component: Home
    },
    {
        path: [
            "/proteins/:category",
            "/proteins/protein"
        ],
        sidebarName: "Proteinas",
        navbarName: "Protein",
        icon: '',
        component: Protein
    },
    {
        path: [
            "/vitamins/:category",
            "/vitamins/vitamin"
        ],
        sidebarName: "Vitaminas",
        navbarName: "Vitaminas",
        icon: '',
        component: VitaminPage
    },
    {
        path: [
            "/foods/:category",
            "/foods/food"
        ],
        sidebarName: "Alimentos",
        navbarName: "Alimentos",
        icon: '',
        component: FoodPage
    },

    {
        path: [
            "/task",
            "/task"
        ],
        sidebarName: "Task",
        navbarName: "Task",
        icon: Subject,
        component: Task
    },
];

export default dashboardRoutes;