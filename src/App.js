import './App.css';
import UseRef from './components/useref/UseRef';
import UseState from './components/usestate/UseState';
import 'react-json-pretty/themes/monikai.css';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <UseRef/>
        <UseState/>

      </header>
    </div>
  );
}

export default App;
