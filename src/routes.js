import Home from './pages/Home';
import ImpossibleList from './pages/ImpossibleList';
import ChallengeList from './pages/ChallengeList';
import ClassicList from './pages/ClassicList';
import PlatformerList from './pages/PlatformerList';
import LeaderboardPage from './pages/LeaderboardPage';

const routes = [
    { path: '/', component: Home, exact: true },
    { path: '/impossible-list', component: ImpossibleList },
    { path: '/challenge-list', component: ChallengeList },
    { path: '/classic-list', component: ClassicList },
    { path: '/platformer-list', component: PlatformerList },
    { path: '/leaderboard', component: LeaderboardPage },
];

export default routes;