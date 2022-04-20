import { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

import CardList from "./components/card-list/card-list-component";
import SearchBox from "./components/search-box/search-box-component";

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
      searchField: "",
    };
    console.log("constructor");
  }

  /* 
Lifecycle method #1 
ComponentDidmount: This is the moment your information gets placed on the DOM
Any time you have a "Class" component and you need to leverage an API call do so inside this method
*/
  componentDidMount() {
    console.log("componentDidMount");
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

  /*
   * Optimization #2
   * created named function to not call too many anonymous fn's
   */
  onSearchChange = (e) => {
    /** Getting your search to filter through names and display names when typing
     1. Initiate your variables 
     2. Set it to filter the monsters in state for each monster that includes the event target value
     * */
    console.log({ startingArray: this.state.monsters });
    const searchField = e.target.value.toLocaleLowerCase();

    this.setState(
      () => {
        /*
        Added searchField to state (Line 11) created const 
        searchField = e.target.value.toLocalLowercase()
        and called it in the return here to return those that are 
        filtered through our search value
        */
        return { searchField };
      },
      () => {
        /**Looking to see what the array is currently with the state NOTE:
         * You'll first see "endingArray logged"
         */
        console.log(this.state.searchField, {
          endingArray: this.state.monsters,
        });
      }
    );
  };

  render() {
    console.log("render");
    /*
     * Optimization #1
     * Variables are being initialized to shorten our code and
     * to know where they come from
     */
    const { monsters, searchField } = this.state;
    const { onSearchChange } = this;

    /*
     *Moved this const (filteredMonster) outside of onChange function to make it useful outside \
     * of that function as used on Line 82 below
     */
    const filteredMonsters = monsters.filter((monster) => {
      return monster.name.toLocaleLowerCase().includes(searchField);
    });

    return (
      <div className="App">
        <h1 className='main-title'>Monster's Rolodex</h1>

        {/*  This shows doing it manually compared 
        to doing it with the map() method below 
        
        <h1>{this.state.monsters[0].name}</h1>
        <h1>{this.state.monsters[1].name}</h1>
        <h1>{this.state.monsters[2].name}</h1>
        */}

        {/* Input searchBox component*/}
        <SearchBox
          className={"monsters-search-box"}
          onChangeHandler={onSearchChange}
          placeholder={"search monsters"}
        />

        {/* Remember map() returns a new array */}
        {/* Remember to place the "key" attribute in the highest possible element 
      on the return */}
        {/* 
   {filteredMonsters.map((monster) => {
          return (
            <div key={monster.id}>
              <h1>{monster.name}</h1>
            </div>
          );
        }
      )
    } 
      */}
        {/** 
      Component updates (render/re-render) when you call setState or change props values 
        The lines below replace the commented out function above
        "filteredMonsters.map()"
    */}
        <CardList monsters={filteredMonsters} />
      </div>
    );
  }
}

export default App;
