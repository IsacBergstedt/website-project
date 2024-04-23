import logo from './logo.svg';
import './App.css';

import moment from 'moment';
import MainHeader from './components/MainHeader';
import UntrackedComponent from './components/UntrackedComponent';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <MainHeader title="Hej alla" description="Detta är vårt nya projekt" />
        <UntrackedComponent /> 
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React {moment().format("YY-MM-DD")}
        </a>
      </header>
    </div>
  );
}

export default App;
