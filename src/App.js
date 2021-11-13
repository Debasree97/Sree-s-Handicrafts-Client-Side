import { BrowserRouter,Switch,Route } from 'react-router-dom';
import './App.css';
import AuthProvider from './contexts/AuthProvider/AuthProvider';
import Dashboard from './Pages/Dashboard/Dashboard/Dashboard';
import ExploreProduct from './Pages/ExploreProduct/ExploreProduct';
import Home from './Pages/Homepage/Home/Home';
import Review from './Pages/Homepage/Review/Review';
import Login from './Pages/Login/Login/Login';
import PrivateRoute from './Pages/Login/PrivateRoute/PrivateRoute';
import Register from './Pages/Login/Register/Register';
import NotFound from './Pages/NotFound/NotFound';
import ProductDetails from './Pages/OrderProduct/ProductDetails/ProductDetails';
import Footer from './Pages/Shared/Footer/Footer';
import Navigation from './Pages/Shared/Header/Navigation';

function App() {
  return (
    <div>
      <AuthProvider>
        <BrowserRouter>
          <Switch>
            <Route path="/home">
              <Navigation></Navigation>
              <Home></Home>
              <Footer></Footer>
            </Route>
            <Route exact path="/">
              <Navigation></Navigation>
              <Home></Home>
              <Footer></Footer>
            </Route>
            <Route path="/register">
              <Navigation></Navigation>
              <Register></Register>
              <Footer></Footer>
            </Route>
            <Route path="/login">
              <Navigation></Navigation>
              <Login></Login>
              <Footer></Footer>
            </Route>
            <Route path="/exploreproduct">
              <Navigation></Navigation>
              <ExploreProduct></ExploreProduct>
              <Footer></Footer>
            </Route>
            <PrivateRoute path="/orderproduct/:id">
              <Navigation></Navigation>
              <ProductDetails></ProductDetails>
              <Footer></Footer>
            </PrivateRoute>
            <PrivateRoute path="/dashboard">
              <Dashboard></Dashboard>
            </PrivateRoute>
            <Route path="/review">
              <Review></Review>
            </Route>
            <Route path="*">
              <Navigation></Navigation>
              <NotFound></NotFound>
              <Footer></Footer>
            </Route>
          </Switch>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
