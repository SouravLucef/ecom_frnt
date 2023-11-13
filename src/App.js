
import './App.css';
import Nav from './Nav'
import { BrowserRouter } from 'react-router-dom';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Nav/>
      <h1>Home Page</h1>
      </BrowserRouter>
    </div>
  );
}

export default App;
