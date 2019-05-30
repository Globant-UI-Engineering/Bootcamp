import HomePage from './HomePageComponent/HomePage';
import NewMatchPage from './NewMatchPageComponent/NewMatchPage';
import MatchesPage from './MatchesPageComponent/MatchesPage';
import PlayersPage from './PlayersPageComponent/PlayersPage';

const routesPages = [{    
    exact: true, 
    path: '/',
    component: HomePage,
  },
  {
    icon: 'fas fa-plus',
    title: 'Nuevo Partido',
    exact: false, 
    path: '/new-match',
    component: NewMatchPage,
  },
  {
    icon: 'fab fa-font-awesome-flag',
    title: 'Partidos',
    exact: false, 
    path: '/matches',
    component: MatchesPage,
  },
  {
    icon: 'fas fa-users',
    title: 'Jugadores',
    exact: false, 
    path: '/players',
    component: PlayersPage,
  }
];

export default routesPages;