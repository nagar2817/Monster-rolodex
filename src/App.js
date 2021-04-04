import logo from './logo.svg';
import './App.css';
import React , {Component} from 'react'
import { CardList } from './Components/cardList/cardList.Components'
import {Input} from "./Components/Searchbox/SearchBox.Components"

class App extends Component{
  constructor(){
    super();
    this.state= {
      monsters : [],
      SearchBox : ""
    }
  }
  componentDidMount(){
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(res=>res.json())
    .then(data=>{this.setState({monsters:data})});
  }
  handleChange = (e)=>{
    this.setState({SearchBox: e.target.value});
  }
  render(){
    const {monsters,SearchBox} = this.state;
    const FillteredMonster = monsters.filter(monster=>monster.name.toLowerCase().includes(SearchBox.toLowerCase()));
    return(
      <div className="App">
        <h1 className="title">Monster Rolodex</h1>
      <Input placeholder="Search Monster" handleChange={this.handleChange}/>
      
      <CardList monsters={FillteredMonster} />
      </div>
    );
  }
}

export default App;
