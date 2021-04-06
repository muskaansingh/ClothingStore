import './App.css';
import Header from './Components/Header';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import ProductListing from './Components/ProductListing';
import ProductDetails from './Components/ProductDetails';

function App() {
  return (
    <div className="App">
        <Router>
          <Header/>
            <Switch>
              <Route path="/" exact component={ProductListing}/>
              <Route path="/product/:productId" exact component={ProductDetails}/>
              <Route>404 not found!</Route>
            </Switch>
        </Router>
    </div>
  );
}

export default App;
