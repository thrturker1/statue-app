import './App.css';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import SignupPage from './pages/SignupPage';
import LoginPage from './pages/LoginPage';
import HomePage from './pages/HomePage';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/signup" component={SignupPage} />
        <Route path="/login" component={LoginPage}/>
        <Route path="/home" component={HomePage}/>
      </Switch>
    </Router>
  );
}

export default App;
