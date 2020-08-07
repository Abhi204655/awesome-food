import React from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Background from './components/Background';
import Main from './components/pages/Main';
import Detail from './components/pages/Detail';
import './App.css';

class App extends React.Component {
  state = {
    dishes: [],
    url: 'http://starlord.hackerearth.com/recipe',
    text: ''
  }

  textChange = (e) => {
    this.setState({
      text: e.target.value
    })
    let newDish = this.state.dishes.filter(dish => dish.name.toLowerCase().includes(e.target.value));
    this.setState({
      dishes: newDish
    })
  }

  async componentDidMount() {
    const res = await axios.get(this.state.url);
    console.log(res.data);
    this.setState({
      dishes: res.data
    })
  }

  render() {
    const { dishes } = this.state;
    return (
      <Router>
        <div className="App">
          <Background />
          <Switch>
            <Route exact path="/">
              <Main dishes={dishes} text={this.state.text} textChange={this.textChange} />
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
