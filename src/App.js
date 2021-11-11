import { BrowserRouter,Switch,Route } from 'react-router-dom';
import './App.css';
import AuthProvider from './contexts/AuthProvider/AuthProvider';
import About from './Pages/About/About';
import ExploreProduct from './Pages/ExploreProduct/ExploreProduct';
import Home from './Pages/Homepage/Home/Home';
import Review from './Pages/Homepage/Review/Review';
import Login from './Pages/Login/Login/Login';
import PrivateRoute from './Pages/Login/PrivateRoute/PrivateRoute';
import Register from './Pages/Login/Register/Register';
import NotFound from './Pages/NotFound/NotFound';
import ProductDetails from './Pages/OrderProduct/ProductDetails/ProductDetails';
import Navigation from './Pages/Shared/Header/Navigation';

function App() {
  return (
    <div>
      <AuthProvider>
        <BrowserRouter>
          <Navigation></Navigation>
          <Switch>
            <Route path="/home">
              <Home></Home>
            </Route>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/register">
              <Register></Register>
            </Route>
            <Route path="/login">
              <Login></Login>
            </Route>
            <Route path="/exploreproduct">
              <ExploreProduct></ExploreProduct>
            </Route>
            <Route path="/orderproduct/:id">
              <ProductDetails></ProductDetails>
            </Route>
            <Route path="/review">
              <Review></Review>
            </Route>
            <PrivateRoute path="/about">
              <About></About>
            </PrivateRoute>
            <Route path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
