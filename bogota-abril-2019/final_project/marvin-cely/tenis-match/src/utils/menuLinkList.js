const menuLinkList = [{
    to: "/new-match",
    id: "navegacion-nuevo-partido-tab",
    role: "tab",
    ariaControls: "navegacion-nuevo-partido",
    icon: 'fas fa-plus',
    title: 'Nuevo Partido'
  },
  {
    to: "/matches",
    id: "navegacion-partidos-tab",
    role: "tab",
    ariaControls: "navegacion-partidos",
    icon: 'fab fa-font-awesome-flag',
    title: 'Partidos'
  },
  {
    to: "/players",
    id: "navegacion-jugadores-tab",
    role: "tab",
    ariaControls: "navegacion-jugadores",
    icon: 'fas fa-users',
    title: 'Jugadores'
  },
  {
    to: "/ranking",
    id: "navegacion-ranking-tab",
    role: "tab",
    ariaControls: "navegacion-ranking",
    icon: 'fas fa-level-up-alt',
    title: 'Ranking'
  }
];
export default menuLinkList;