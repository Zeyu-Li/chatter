import './App.css';
import FormWrapper from './Forms/FormWrapper';
import Login from './Forms/Login';
import Register from './Forms/Register';
import ResetPassword from './Forms/ResetPassword';
import Home from './Home/Home';
import Chat from './Chat/Chat';
import {ProtectedRoute, UnprotectedRoute} from './ProtectedRoute';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { useAuth } from './Firebase/useAuth';

// bootstrap css
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const {user} = useAuth()

  return (
    <div className="App">
      {/* logo */}
      {/* routes */}
    <Router>
      <Switch>
      {/* Home Path */}
      <UnprotectedRoute isAuth={!!user} exact path="/">
        <FormWrapper>
          <Login />
        </FormWrapper>
      </UnprotectedRoute>
      <Route path="/login">
        <Redirect to="/" />
      </Route>

      <UnprotectedRoute isAuth={!!user} path="/register">
        <FormWrapper>
          <Register />
        </FormWrapper>
      </UnprotectedRoute>
      <UnprotectedRoute isAuth={!!user} path="/password_reset">
        <FormWrapper>
          <ResetPassword />
        </FormWrapper>
      </UnprotectedRoute>
      <ProtectedRoute isAuth={!!user} path="/home">
        <FormWrapper>
          <Home />
        </FormWrapper>
      </ProtectedRoute>
      
      <ProtectedRoute isAuth={!!user} path="/chat">
        <Chat />
      </ProtectedRoute>
      </Switch>
    </Router>
    </div>
  );
}

export default App;
