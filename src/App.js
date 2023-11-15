
import './App.css';
import Nav from './Nav'
import { BrowserRouter,Routes ,Route} from 'react-router-dom';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Nav/>
      <Routes>
      <Route path="/" element={<h1>Home Page</h1>}></Route>
        <Route path="/catagories" element={<h1>Categories</h1>}></Route>
        <Route path="/addproduct" element={<h1>Add Products</h1>}></Route>
        <Route path="/logout" element={<h1>Logout</h1>}></Route>
        <Route path="/profile" element={<h1>Profile</h1>}></Route>
      </Routes>
      {/* <h1>Home Page</h1> */}
      </BrowserRouter>
    </div>
  );
}

export default App;
