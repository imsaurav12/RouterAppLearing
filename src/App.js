import './App.css';
import { NavLink, Route, Routes } from 'react-router-dom';
import Labs from './components/Labs';
import NotFound from './components/NotFound';
import Support from './components/Support';
import Home from './components/Home'
import About from './components/About';
import { Link } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <nav>
        <ul>
          <li><NavLink to="/">Home </NavLink></li>  {/*NavLink lagane se jispr click krege uspr active class dal jayegi incpect krne se pta lagega*/}
          <li><NavLink to="/about">About </NavLink></li>
          <li><Link to="/labs">Labs </Link></li>
          <li><Link to="/support">Support</Link></li>
        </ul>
      </nav>
     <Routes>
      <Route path="/" element={<Home/>}>
        <Route path="/about" element={<About/>}/>
        <Route path="/support" element={<Support/>}/>
        <Route path="/labs" element={<Labs/>}/>
        <Route path="*" element={<NotFound/>}/>
      </Route>
    </Routes>
    </div>
  );
}

export default App;
