import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import NavigationBar from './components/NavigationBar';
import { AboutUs } from './components/AboutUs';
import { FertilizerrGuide } from './components/FertilizerGuide';
import { Login } from './components/Login';
import { Signup } from './components/Signup';
import { Home } from './components/Home';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<NavigationBar/>}>
        <Route path="/Home" element={<Home/>}></Route>
          <Route path="/AboutUs" element={<AboutUs/>}></Route>
          <Route path="/FertilizerGuide" element={<FertilizerrGuide/>}></Route>
          <Route path="/Login" element={<Login/>}></Route>
          <Route path="/Signup" element={<Signup/>}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

