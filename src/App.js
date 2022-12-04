import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

import Header from './Components/HeaderAndFooter/Header';
import Footer from'./Components/HeaderAndFooter/Footer';
import Main from './Components/MainBodyWrapper/Main';
import Iphone from './Components/NavComponents/Iphone';
import Ipad from './Components/NavComponents/Ipad';
import Watch from './Components/NavComponents/Watch';
import Tv from './Components/NavComponents/Tv';
import Music from './Components/NavComponents/Music';
import Support from './Components/NavComponents/Support';
import ProductPages from './Components/LearnMoreComponents/ProductPages';
import Four04 from './Components/Four04(Error)/Four04';
import Mac from './Components/NavComponents/Mac';
import Search from './Components/NavComponents/Search';
import Cart from './Components/NavComponents/Cart';
import 'bootstrap/dist/css/bootstrap.min.css';

// import Apple from './Components/NavComponents/Apple';
// import YouTubeVideo from './Components/YoutubeComponent/YoutubeVideo';


function App() {
  return (
    <div>
      
    <Router>
    <Header/>
      <Routes>
      {/* Home */}
      <Route path='/' element={<Main/>}/>
      {/* <Route path='/' element={<YouTubeVideo/>}/> */}
      {/* Iphone */}
      <Route path='/Iphone' element={<Iphone/>}/>
      {/* Dynamic pages */}
      <Route path='/Iphone/:productID' element={<ProductPages/>}/>
      <Route path='/Ipad' element={<Ipad/>}/> 
      <Route path='/Watch' element={<Watch/>}/>
      <Route path='/Mac' element={<Mac/>}/>
      <Route path='/Tv' element={<Tv/>}/>
      <Route path='/Music' element={<Music/>}/>
      <Route path='/Support' element={<Support/>}/> 
      <Route path='/search' element={<Search/>}/> 
      <Route path='/cart' element={<Cart/>}/> 
      <Route path='/logo' element={<Main/>}/> 
      {/* 404 Error page */}
      <Route path='*' element={<Four04/>}/>
      </Routes>

      <Footer/>
    </Router>

     

    </div>
  );
}

export default App;
