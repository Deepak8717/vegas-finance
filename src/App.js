import logo from './logo.svg';
import './App.css';
import Web3 from 'web3';

function App() {

  //eslint-disable-next-line
  const web3Instance = new Web3('http://localhost:8545');

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Web3 is imported correctly and is working with Webpack 5
        </p>
      </header>
    </div>
  );
}

export default App;
