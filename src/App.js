
import './App.css';
import Navbar from './Navbar';
import Home from './Home';
import {Route,BrowserRouter as Router,Routes } from 'react-router-dom';
import Ajouter from './Ajouter';
import BlogDetails from './BlogDetails';
import Nofound from './No found';

function App() {



  return (


  <Router>

<div className="container">

<Navbar/>

<Routes>

<Route path="/Home"  element={<Home/>}/> 

<Route path="/Ajouter" element={<Ajouter/>}/>

<Route path="/blogs/:id" element={<BlogDetails/>}/>

<Route path="*" element={<Nofound/>}/>


</Routes>

</div>


  </Router>
  )
 
}

export default App;
