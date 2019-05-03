import React, {Component} from 'react';
import CardList from './CardList';
import SearchBox from './searchBox';
import { robots } from './robots';
import index from './index.css';
import './app.css';


class App extends Component{
  constructor() {
    super()
    this.state = {
      robots: [],
      searchfield: ''
    }

    console.log('1');
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response=> response.json())
    .then(users => this.setState({ robots: users}));
  }

  onSearchChange = (event) => {
    this.setState({ searchfield: event.target.value })
  }

  render() {
    const filteredRobots = this.state.robots.filter(robots =>{
      return robots.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
    })
    return (
      <div className='tc'>
        <h1 className='f1'>Robofriends</h1>
        <SearchBox searchChange={this.onSearchChange}/>
        <CardList robots={filteredRobots}/>
      </div>
    );
}

}

export default App;
