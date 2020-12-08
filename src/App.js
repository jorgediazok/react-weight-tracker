import './App.css';
import Form from './components/Form/Form';
import { GoogleLogin } from 'react-google-login';
require('dotenv').config();

const responseGoogle = (response) => {
  console.log(response);
};

const key = process.env.REACT_APP_AUTH_KEY;

function App() {
  return (
    <div className="App">
      <GoogleLogin
        clientId={key}
        onSuccess={responseGoogle}
        onFailure={responseGoogle}
      />
      <Form />
    </div>
  );
}

export default App;
