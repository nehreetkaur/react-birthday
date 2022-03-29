import React, { useState } from "react";
import List from "./List";
import data from "./data";

import "./App.css";
function App() {
  // state variable
  const [people,setPeople]=useState(data)

  return (
    <main>
      <section className='container'>

        <h3> {people.length}  Birthday today</h3>
        <List people={people}/>
        <button onClick={()=>setPeople([])}>clear all</button>
      </section>
      
    </main>
  );
}

export default App;
