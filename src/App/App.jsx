import { useSelector } from 'react-redux';
import Header from '../Header/Header';
import HeroList from '../HeroList/HeroList';
import './App.css';

import { HeroForm } from '../HeroForm/HeroForm.jsx';

function App() {
  const heroList = useSelector(store => store.heroList);

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
        <div>
          <HeroForm />
        </div>
        <HeroList
          heroList={heroList}
          avengersAssemble={avengersAssemble} />
      </main>


    </div>
  );

}

export default App;
