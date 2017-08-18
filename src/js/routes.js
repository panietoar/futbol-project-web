import PlayerList from '../components/PlayerList.vue';
import PlayerDetail from '../components/PlayerDetail.vue';
import TeamList from '../components/TeamList.vue';

export const routes = [
    { path: '', component: PlayerList },
    { path: '/player/:id', component: PlayerDetail },
    { path: '/teams', component: TeamList }
];