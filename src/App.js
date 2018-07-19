import React, { Component } from "react";
import "./App.css";

import Form from "./components/Form";
const API_KEY = "8736c5284972cf436c829548a186d37a";

class App extends Component {
 
  // 1.because we use arrow func then we dont need to bind the func!
  getRecipe =async  (e) => {
        const recipeName = e.target.elements.recipeName.value
        e.preventDefault()
        const api_call = await fetch(`https://cors-anywhere.herokuapp.com/http://food2fork.com/api/search?key=${API_KEY}&q=shredded%20chicken&count=5`);
       // 2.to grapb the value of written value of our fetch func we should use keyword [await]  again 
       //  3.and also we have to convert the result that we get from the fetch to json
       // 4.so the new method to convert it is like here in the blow
        const data = await api_call.json()
        // 5. whatever comes back from the  API will store in the data variable and also convert to json
        console.log(data)
        /* 6. so because I'm useing the  local server the website that I wanna fetch the data from
        doesnt let me to get access to it so to fix the problem there is a trick 
        we could add this url at the very begining of our url https://cors-anywhere.herokuapp.com/
        so it tricks the website that we are a live server 
        */
      
      
  }
  render() {
    return (
      <div className="App">
          <header className="App-header">
            <h1 className="App-title">Recipe Search</h1>
          </header>
          <Form getRecipe= {this.getRecipe} />
      </div>
    );
  }
}

export default App;
