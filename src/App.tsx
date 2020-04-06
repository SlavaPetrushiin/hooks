import React from 'react';
import Navbar from "./component/Navbar";
import Home from './pages/Home';
import {Route, Switch} from 'react-router-dom';
import About from "./pages/About";
import Profile from "./pages/Profile";
import Alert from "./component/Alert";
import {AlertState} from './context/alert/AlertState';
import {GitHubState} from "./context/github/GitHubState";

function App() {
    return (
        <GitHubState>
            <AlertState>
                <React.Fragment>
                    <Navbar/>
                    <div className={'container pt-4'}>
                        <Alert/>
                        <Switch>
                            <Route path={'/'} exact render={() => <Home/>}/>
                            <Route path={'/about'} render={() => <About/>}/>
                            <Route path={'/profile/:name'} render={() => <Profile/>}/>
                        </Switch>
                    </div>
                </React.Fragment>
            </AlertState>
        </GitHubState>
    );
}

export default App;
