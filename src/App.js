import './App.css';
import {Link, Route} from 'wouter'
import {Home} from './pages/Home'
import { SearchResults } from './pages/SearchResults';
import { Details } from './pages/Details';

function App() {

  return (
    <div className="App">
      <section className="App-content">
        <Link to="/"><img src="logo-giffy.png" alt=""/></Link>
        <Route component={Home} path="/"/>        
        <Route component={SearchResults} path="/search/:keyword"/>
        <Route component={Details} path="gif/:id"/>
      </section>
    </div>
  );
}

export default App;

