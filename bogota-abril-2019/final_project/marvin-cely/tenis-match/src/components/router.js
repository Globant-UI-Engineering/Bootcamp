import HomePage from './HomePageComponent/HomePage';
import NewMatchPage from './NewMatchPageComponent/NewMatchPage';
import PlayersPage from './PlayersPageComponent/PlayersPage';
import TournamentsPage from './TournamentPageComponent/TournamentsPage';
import ScoresPage from './ScoresPageComponent/ScoresPage';

const routesPages = [{    
    icon: 'fas fa-home',
    title: 'Inicio',
    exact: true, 
    path: '/',
    component: HomePage,
  },
  // {
  //   icon: 'fas fa-plus',
  //   title: 'Nuevo Partido',
  //   exact: false, 
  //   path: '/new-match',
  //   component: NewMatchPage,
  // },
  {
    icon: 'fas fa-users',
    title: 'Jugadores',
    exact: false, 
    path: '/players',
    component: PlayersPage,
  },
  {
    icon: 'fas fa-bullhorn',
    title: 'Puntuación',
    exact: false, 
    path: '/scores',
    component: ScoresPage,
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