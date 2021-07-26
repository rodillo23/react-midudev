import './App.css';
import {Link, Route} from 'wouter'
import {Home} from './pages/Home'
import { SearchResults } from './pages/SearchResults';
import { Details } from './pages/Details';
import StaticContext from './context/StaticContext'

import {GifsContextProvider} from './context/GifsContext'

function App() {

  return (
    <StaticContext.Provider value={2}>
      <div className="App">
        <section className="App-content">
          
          <Link to="/">
            <img src="logo-giffy.png" alt=""/>
          </Link>
          
          <GifsContextProvider>
            <Route component={Home} path="/"/>        
            <Route component={SearchResults} path="/search/:keyword"/>
            <Route component={Details} path="/gif/:id"/>
          </GifsContextProvider>
        </section>
      </div>
    </StaticContext.Provider>
  );
}

export default App;

