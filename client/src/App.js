
import './App.css';
import Dashboard from './components/Dashboard';
import Error from './components/Error';
import Header from './components/Header';
import Signup from './components/Signup';
import Login from './components/login'
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
        <Routes>
          <Route path='/' element={<Login/>}/>
          <Route path='/signup' element={<Signup/>}/>
          <Route path='/dash' element={<Dashboard/>}/>
          <Route path='*' element={<Error/>}/>

        </Routes>
        
        {/* <Header/> */}
    </>
  );
}

export default App;
