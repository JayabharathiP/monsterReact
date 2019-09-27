import React, { Component } from 'react';
import './App.css';
import { Cardlist } from './Component/card-list/card-list.component';
import { SearchBox } from './Component/search-box/search-box.component';
import { Card } from './Component/card/card.component';

class App extends Component {
 constructor(){
   super();

   this.state = {
     monster : [ ],
     searchField : ''
   };
  //  this.handleChange = this.handleChange.bind(this);
 }

 componentDidMount(){
   fetch('http://jsonplaceholder.typicode.com/users')
   .then(Response => Response.json()
   .then(user => this.setState({monster : user})))
 }
 handleChange = e => {
  this.setState({searchField : e.target.value});
 }
  render() {
    const { monster, searchField } = this.state;
    const filteredMonsters = monster.filter(monster =>
      monster.name.toLowerCase().includes(searchField.toLowerCase())
      )

    return (
      <div className="App">
        <h1>Monster Rolodex</h1>
      <SearchBox placeholder='search monster' handleChange = {this.handleChange}/>
      <Cardlist monster={filteredMonsters}/>
 </div>
    );
  }
}

export default App;
