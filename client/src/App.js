import React from 'react';
import { 
  BrowserRouter as Router, 
  Switch, 
  Route, 
  Link,
  Redirect,
  NavLink
} from 'react-router-dom';
//import PostsListPage from './pages/PostsListPage';
import PostFormPage from './pages/PostFormPage';
import ShowPostPage from './pages/ShowPostPage';
import AboutUsPage from './pages/AboutUsPage';
import LoginPage from './pages/LoginPage';
import PrivateRoute from './components/PrivateRoute';
import AuthButton from './components/AuthButton';
import Homepage from './pages/Homepage/Homepage.js';
import SignIn from './pages/signin.jsx';
import theme from './theme';
import { ThemeProvider } from '@material-ui/styles';
import Dashboard from './pages/Dashboard';
import SignUp from './pages/SignUp';
import ProductList from './pages/ProductList';
import UserList from './pages/UserList';
import Typography from './pages/Typography';
import Account from './pages/Account';
import Settings from './pages/Settings';
import UnderDevelopment from './pages/UnderDevelopment';
import NotFound from './pages/NotFound';
import Icons from './pages/Icons';

import './App.css';


/*
Changes:
-removed mb-3 from className
*/
function Navigation(props) {
  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-dark shadow ">
      <Link className="navbar-brand" to="/">Bread</Link>
      <ul className="navbar-nav mr-auto">
        <li className="nav-item">
          <NavLink className="nav-link" exact to="/posts/new">
            Create a Micro Post
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" exact to="/about-us">
            About Us
          </NavLink>
        </li>
      </ul>
      <AuthButton />
    </nav>
  );
}

//                <Route path="/" component={PostsListPage} />


//Removed           <Navigation />  from App return( )
class App extends React.Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <Router>
          <div className="container-fluid text-center">
            <div className="row justify-content-center">
              <Switch>
                <Route path="/login" component={LoginPage} />
                <Route path="/sign-in" component={SignIn} />
                <PrivateRoute path="/posts/new" component={PostFormPage} />
                <Route path="/posts/:id" component={ShowPostPage} />
                <Route path="/about-us" component={AboutUsPage} />
                <Route path="/dashboard" component={Dashboard} />
                <Route path="/sign-up" component={SignUp} />
                <Route path="/users" component={UserList}/>
                <Route path="/products" component={ProductList}/>
                <Route path="/typography" component={Typography}/>
                <Route path="/account" component={Account}/>
                <Route path="/settings" component={Settings}/>
                <Route path="/sign-up" component={SignUp}/>
                <Route path="/sign-in" component={SignIn}/>
                <Route path="/under-development" component={UnderDevelopment}/>
                <Route  path="/not-found" component={NotFound}/>
                <Route  path="/icons" component={Icons}/>
                <Route path="/" component={Homepage} />
              </Switch>
            </div>
          </div>
        </Router>
        </ThemeProvider>
    );
  }
}


export default App;
