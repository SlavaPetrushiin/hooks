import React from 'react';
import Navbar from "./component/Navbar";
import Home from './pages/Home';
import { Route, Switch } from 'react-router-dom';
import About from "./pages/About";
import Profile from "./pages/Profile";

function App() {
  return (
      <React.Fragment>
          <Navbar/>
          <div className={'container pt-4'}>
              <Switch>
                  <Route path={'/'} exact render={() => <Home/>}/>
                  <Route path={'/about'} render={() => <About/>}/>
                  <Route path={'/profile/:name'} render={() => <Profile/>}/>
              </Switch>
          </div>
      </React.Fragment>
  );
}

export default App;
