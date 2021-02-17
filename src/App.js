import logo from './logo.svg';
import './App.css';
import FormWrapper from './FormWrapper';
import Login from './Login';
import Register from './Register';
import ResetPassword from './ResetPassword';
import Home from './Home';
import Chat from './Chat';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

// bootstrap css
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      {/* routes */}
    <Router>
      <Switch>
      {/* Home Path */}
      <Route exact path="/">
        <FormWrapper>
          <Login />
        </FormWrapper>
      </Route>
      <Route path="/login">
        <Redirect to="/" />
      </Route>

      <Route path="/register">
        <FormWrapper>
          <Register />
        </FormWrapper>
      </Route>
      <Route path="/password_reset">
        <FormWrapper>
          <ResetPassword />
        </FormWrapper>
      </Route>
      <Route path="/home">
        <FormWrapper>
          <Home />
        </FormWrapper>
      </Route>
      
      <Route path="/chat">
        <Chat />
      </Route>
      </Switch>
    </Router>
    </div>
  );
}

export default App;
