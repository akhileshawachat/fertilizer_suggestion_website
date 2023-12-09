import {  Route, Routes } from 'react-router-dom';
import './App.css';
import NavigationBar from './components/NavigationBar';
import { AboutUs } from './components/AboutUs';
import  FertilizerRecommendationApp  from './components/FertilizerRecommendationApp';
import  Login  from './components/Login';
import Signup  from './components/Signup';
import { Home } from './components/Home';
import Footer from './components/Footer';
import { News } from './components/News';
import { ToastContainer } from 'react-bootstrap';
function App() {
  return (
    <div>
      <ToastContainer />
    
      <Routes>
        <Route path="/" element={<NavigationBar/>}>
        <Route path="/Home" element={<Home/>}></Route>
          <Route path="/AboutUs" element={<AboutUs/>}></Route>
          <Route path='/news' element={<News/>}></Route>
          <Route path="/Fertilizer-recommendation" element={<FertilizerRecommendationApp/>}></Route>
          <Route path="/Login" element={<Login/>}></Route>
          <Route path="/Signup" element={<Signup/>}></Route>
        </Route>
      </Routes>
    <br></br>

    <Footer></Footer>
    </div>
  );
}

export default App;

