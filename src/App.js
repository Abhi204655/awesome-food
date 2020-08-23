import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Background from './components/Background';
import Main from './components/pages/Main';
import Detail from './components/pages/Detail';
import './App.css';

class App extends React.Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Background />
          <Switch>
            <Route exact path="/">
              <Main />
            </Route>
            <Route exact path="/:id">
              <Detail />
            </Route>
          </Switch>
        </div>
      </Router>
    );
  }
}


export default App;
