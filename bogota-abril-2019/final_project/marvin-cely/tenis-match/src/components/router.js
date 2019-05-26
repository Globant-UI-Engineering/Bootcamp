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
    exact: false, 
    path: '/new-match',
    component: NewMatchPage,
  },
  {
    exact: false, 
    path: '/matches',
    component: MatchesPage,
  },
  {
    exact: false, 
    path: '/players',
    component: PlayersPage,
  }
];

export default routesPages;