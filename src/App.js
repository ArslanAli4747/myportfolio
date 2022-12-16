
import './App.scss';
import { Route, Routes } from 'react-router-dom';
import Layout from './components/Layouts/Layout';
import Home from './components/Home/Home';
import About from './components/About/About';
import Contact from './components/Contact/Contact';

function App() {
  
  return (
  <div className='main'>
  <Routes>
    <Route path='/' element={<Layout/>}>
      <Route index element={<Home>  </Home>}></Route>
      <Route path='/about' element={<About/>}></Route>
      <Route path='/contact' element={<Contact/>}></Route>  
    </Route>
  </Routes>
  </div>
  );
}

export default App;
