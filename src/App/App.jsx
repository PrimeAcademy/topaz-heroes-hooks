import React, { useState, useEffect } from 'react';
import Header from '../Header/Header';
import HeroList from '../HeroList/HeroList';
import './App.css';

function App() {

  const [heroList, setHeroList] = useState([
    {
      superheroName: 'Prof X',
      onDuty: true,
      alias: 'Xavier',
      power: 'does stuff'
    }
  ])

  // called from Item
  const avengersAssemble = (hero) => {
    console.log('Avengers Assemble!', hero);
  }

  // JSX
  return (
    <div className="App">

      <Header />

      {/* list of super heroes */}
      {/* lefthand side of props becomes props.the_name */}
      <main>
        <HeroList
          heroList={heroList}
          avengersAssemble={avengersAssemble} />
      </main>


    </div>
  );

}

export default App;
