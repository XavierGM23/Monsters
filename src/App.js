import React , {Component} from 'react';
import './App.css';
import {CardList} from './components/card-list/card-list.component';
import {SearchBox} from './components/search-box/search-box.component'
import {Scroll} from './components/scroll/scroll.component'

class App extends Component {
  constructor() {
    super(); // Adopta las caracteristicas de COMPONENT

    this.state = {  // da valores al estado de APP
      monsters: [], // genera un arreglo vacio el cual se renderiza luego
      searchfield: '' // Genera una busqueda vacia la cual se renderiza luego
    };
  }

  componentDidMount() { // Actua en 4to orden
    fetch("https://jsonplaceholder.typicode.com/users") // Permite ingresar pedidos Get y trabaja con promesas
    .then(response => response.json())  //Transforma a formato JSON
    .then(users => this.setState({monsters: users})); //Asigna los usuarios del fetch a monsters
  }

  handleChange = (event) => {
    this.setState({searchfield: event.target.value});
  }


  render() {

    const { monsters, searchfield } = this.state; // Destructuring 
    const filteredMonsters = monsters.filter(monster =>  // Itera y filtra el arreglo 
      monster.name.toLowerCase().includes(searchfield.toLowerCase()) // Compara entre los 2 arreglos
    );


    return (
      <div className="App">
      <h1>Monster Rolodex</h1>

      {/* SEARCHBOX COMPONENT */}
      <SearchBox 
        placeholder='Search Robots 🤖'
        handleChange={this.handleChange}

      />
      
      <Scroll>
          {/* CARDLIST COMPONENT */}
          <CardList monsters={filteredMonsters}/>
      </Scroll>
      

      </div>
    );
  }
}

export default App;
