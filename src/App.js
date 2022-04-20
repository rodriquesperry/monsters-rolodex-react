import { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  
  constructor() {
    super();

    this.state = {
      monsters: [],
    };
    console.log(1);
  }

/* 
Lifecycle method #1 
ComponentDidmount: This is the moment your information gets placed on the DOM
Any time you have a "Class" component and you need to leverage an API call do so inside this method
*/
  componentDidMount() {
    console.log(3);
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) =>
        this.setState(
          () => {
            return { monsters: users };
          },
          () => {
            console.log(this.state);
          }
        )
      );
  }

  render() {
    console.log(2);
    return (
      <div className="App">
        {/*  This shows doing it manually compared 
        to doing it with the map() method below 
        
        // Remember map() returns a new array 
        
        <h1>{this.state.monsters[0].name}</h1>
        <h1>{this.state.monsters[1].name}</h1>
        <h1>{this.state.monsters[2].name}</h1>
        */}

        {/* Remember to place the "key" 
        attribute in the highest possible element on the return */}
        {this.state.monsters.map((monster) => {
          return (
            <div key={monster.id}>
              <h1>{monster.name}</h1>
            </div>
          );
        })}
      </div>
    );
  }
}

export default App;
