import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import ImpossibleList from './pages/ImpossibleList';
import ChallengeList from './pages/ChallengeList';
import ClassicList from './pages/ClassicList';
import PlatformerList from './pages/PlatformerList';
import LeaderboardPage from './pages/LeaderboardPage';

const App = () => {
    return (
        <Router>
            <div className="app">
                <Navbar />
                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/impossible-list" component={ImpossibleList} />
                    <Route path="/challenge-list" component={ChallengeList} />
                    <Route path="/classic-list" component={ClassicList} />
                    <Route path="/platformer-list" component={PlatformerList} />
                    <Route path="/leaderboard" component={LeaderboardPage} />
                </Switch>
                <Footer />
            </div>
        </Router>
    );
};

export default App;