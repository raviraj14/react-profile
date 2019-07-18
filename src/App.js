import React, { Component } from 'react';
import './App.css';
import { CardList } from './components/card-list/Card-list.component';
import { SearchBox } from './components/search/Search.component';

class App extends Component{
  constructor(){
    super();

    this.state = {
      employee:[],
      searchFiled: ''
    }
  }
  componentDidMount(){
     fetch('https://jsonplaceholder.typicode.com/users')
    .then(emp => emp.json())
    .then(empjson => this.setState({ employee: empjson}));
    
  }
  render(){
    const { employee, searchFiled} = this.state;
    const filteremployee = employee.filter(employee =>
       employee.name.toLowerCase().includes(searchFiled.toLocaleLowerCase()));
    return (
      <div className="App">
        <SearchBox
        placeholder ="Find the Employee....."
        handelchange = {e => this.setState({ searchFiled: e.target.value })} 
        />
        <CardList employee={filteremployee}/>
      </div>
    );
  }
}
export default App;
