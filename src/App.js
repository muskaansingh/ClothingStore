import './App.css';
import Header from './Components/Header';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import ProductListing from './Components/ProductListing';
import ProductDetails from './Components/ProductDetails';
import Cart from './Components/Cart';

function App() {
  return (
    <>
      <Header/>
        <Router>
            <Switch>
              <Route path="/" exact component={ProductListing}/>
              <Route path="/product/:productId" exact component={ProductDetails}/>
              <Route path="/product/:productId/cart" exact component={Cart}/>
              <Route>404 not found!</Route>
            </Switch>
        </Router>
    </>

  );
}

export default App;
