import { Switch, Route, Redirect } from 'react-router-dom';
import Welcome from './pages/Welcome';
import Products from './pages/Products';
import ProductDetail from './pages/ProductDetail';
import MainHeader from './components/MainHeader';

function App() {
  return (
    <div>
      <MainHeader />
      <main>
        <Switch>
          <Route exact path="/">
            <Redirect to="/welcome" />
          </Route>
          <Route path="/welcome">
            <Welcome />
          </Route>
          <Route exact path="/products/">
            <Products />
          </Route>
          <Route path="/products/:productId">
            <ProductDetail />
          </Route>
          {/* To get access to history, location and match objects. If not this, we need useParams hook to get params */}
          {/* <Route path="/products/:id" component={Products} /> */}
        </Switch>
      </main>
    </div>
  );
}

export default App;

//our-domain.com/welcome => Welcome Component
//our-domain.com/products=> Products Component
//our-domain.com/product-detail/<product-id> => Product value
