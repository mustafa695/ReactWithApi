import './App.css';
import './components/Register'
import Register from './components/Register';
import Login from './components/Login';
import Users from './components/Users';
import {
  BrowserRouter as Router,
  Switch,
  Route,

} from "react-router-dom";
import Dashboard from './components/Dashboard';
import Protected from './components/Protected';

function App() {
 
  return (
    
    <Router>     
      <Switch>
          <Route exact path="/">
            <Register />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/dashboard">
            <Protected Cmp={Dashboard}/>
          </Route>
          <Route path="/user/:id">
            <Users />
          </Route>
        </Switch>
    </Router>
  );
}

export default App;
