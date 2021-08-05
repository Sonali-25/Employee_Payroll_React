import './App.css';
import PayrollForm from './components/payroll-form/payroll-form';
import {BrowserRouter as Router,Switch,Route, Redirect} from "react-router-dom";
import HomePage from './components/home/employee-home';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
        <Route exact path = "/home"><HomePage /></Route>
          <Route exact path = "/payroll-form"><PayrollForm /></Route>
          <Route exact path=""><Redirect exact from="/" to="/home" /></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
