import logo from './logo.svg';
import './App.css';
import './bookmy.css';

import ReactDOM from 'react-dom';
import { BrowserRouter, Routes,Route } from 'react-router-dom';
import Layout from './Component/Layout';
import Movies from './Component/Movies';
import Stream from './Component/Stream';

import Plays from './Component/Plays';
import Sports from './Component/Sports';
import Activitites from './Component/Activitites';
import Buzz from './Component/Buzz';
import Events from './Component/Events';
import Listyourshow from './Component/Listyourshow';
import Corporates from './Component/Corporates';
import Offers from './Component/Offers';
import GiftCards from './Component/GiftCards';
import Firstbody from './Component/Contents/Firstbody';


function App() {
  return (

    <BrowserRouter>
    <Routes>
      <Route path='/'element={<Layout/>}>
        <Route index element={<Firstbody/>}/>
        <Route path='Movies' element={<Movies/>}/>
        <Route path='Stream' element={<Stream/>}/>
        <Route path='Events' element={<Events/>}/>
        <Route path='Plays' element={<Plays/>}/>
        <Route path='Sports' element={<Sports/>}/>
        <Route path='Activities'element={<Activitites/>}/>
        <Route path='Buzz' element={<Buzz/>}/>
        <Route path='Listyourshow' element={<Listyourshow/>}/>
        <Route path='Corporates' element={<Corporates/>}/>
        <Route path='Offers' element={<Offers/>}/>
        <Route path='Gifts'element={<GiftCards/>}/>
      
        
        
      
        
        





      </Route>
    </Routes>
    </BrowserRouter>
  
  );
}

export default App;
