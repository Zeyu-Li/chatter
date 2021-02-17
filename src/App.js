import logo from './logo.svg';
import './App.css';
import FormWrapper from './FormWrapper';
import Login from './Login';

// bootstrap css
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <FormWrapper>
        <Login />
      </FormWrapper>
    </div>
  );
}

export default App;
