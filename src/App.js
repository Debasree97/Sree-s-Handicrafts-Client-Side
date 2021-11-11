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
            <PrivateRoute path="/orderproduct/:id">
              <ProductDetails></ProductDetails>
            </PrivateRoute>
            <Route path="/dashboard">
              <Dashboard></Dashboard>
            </Route>
            <Route path="/review">
              <Review></Review>
            </Route>
            <Route path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
          <Footer></Footer>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
