import './App.css';
import FormWrapper from './Forms/FormWrapper';
import Login from './Forms/Login';
import Register from './Forms/Register';
import ResetPassword from './Forms/ResetPassword';
import Home from './Home/Home';
import Chat from './Chat/Chat';
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
      {/* logo */}
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
