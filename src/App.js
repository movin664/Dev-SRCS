import NavBar from './navBar';
import Home from './Home';
import Footer from './footer';
import Members from './Members';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';


function App() {
  return (
    <Router>
      <div className="App">
        <NavBar/>
        <Switch>
          <Route exact path="/">
            <Home/>
          </Route>
          <Route path="/members">
            <Members/>
          </Route>
        </Switch>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
