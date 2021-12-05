import './App.css';
import TestClassComponent from './Components/testClassComponent';
import { MemodFuncComponent } from './Components/testFuncComponent';
import TestPureComponent from './Components/testPureComponent';

function App() {
  return (
    <div className="App">
      <div style={{ padding: `1.5rem` }}>
        <TestClassComponent />
      </div>
      <div style={{ padding: `1.5rem` }}>
        <TestPureComponent />
      </div>
      <div style={{ padding: `1.5rem` }}>
        <MemodFuncComponent />
      </div>
    </div>
  );
}

export default App;
