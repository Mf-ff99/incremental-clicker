import Main from './main'
import Nav from './Components/NavBar/NavBar'
import {useSelector} from 'react-redux'

import './App.css';

function App() {
  console.log()
  
  return (
    <main>
      <header>
        <Nav />
      </header>

    <div className="App">

      <Main />
    </div>
    </main>
  );
}

export default App;
