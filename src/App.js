import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login/Login';
import NotFound from './Pages/NotFound/NotFound';
import Header from './Pages/Shared/Header/Header';
import Footer from './Pages/Shared/Footer/Footer';
import ServiceDetails from './Pages/ServiceDetails/ServiceDetails';
import AuthProvider from './context/AuthProvider';
import PrivateRoute from './Pages/PrivateRoute/PrivateRoute';
import Contact from './Pages/Contact/Contact';
import MyOrder from './Pages/MyOrder/MyOrder';
import AllOrders from './Pages/AllOrders/AllOrders';
import AddNewService from './Pages/AddNewService/AddNewService';


function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Header></Header>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>
            <Route path="/my-order">
              <MyOrder></MyOrder>
            </Route>
            <Route path="/all-order">
              <AllOrders></AllOrders>
            </Route>
            <Route path="/add-new-service">
              <AddNewService></AddNewService>
            </Route>
            <Route path="/contact">
              <Contact></Contact>
            </Route>
            {/* private route */}
            <PrivateRoute path="/service-details/:serviceId">
              <ServiceDetails></ServiceDetails>
            </PrivateRoute>
            <Route path="/login">
              <Login></Login>
            </Route>
            {/* path not found */}
            <Route path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
          <Footer></Footer>
        </Router>
      </AuthProvider>

    </div>
  );
}

export default App;
