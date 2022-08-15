import './App.css';
import Visualizer from './components/Visualizer';
import { BrowserRouter as Router } from 'react-router-dom';
function App() {
  return (
    <>
      <Router>
        <Visualizer />
      </Router>
    </>
  );
}

export default App;
