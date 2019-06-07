import HomePage from './HomePageComponent/HomePage';
import PlayersPage from './PlayersPageComponent/PlayersPage';
import MatchesPage from './MatchesPageComponent/MatchesPage';
import TournamentsPage from './TournamentPageComponent/TournamentsPage';

const routesPages = [{    
    icon: 'fas fa-home',
    title: 'Inicio',
    exact: true, 
    path: '/',
    component: HomePage,
  },
  {
    icon: 'fas fa-users',
    title: 'Jugadores',
    exact: false, 
    path: '/players',
    component: PlayersPage,
  },
  {
    icon: 'fas fa-flag',
    title: 'Partidos',
    exact: false, 
    path: '/matches',
    component: MatchesPage,
  },
  {
    icon: 'fas fa-trophy',
    title: 'Torneos',
    exact: false, 
    path: '/tournaments',
    component: TournamentsPage,
  }
];

export default routesPages;