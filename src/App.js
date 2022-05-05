
import './App.css';
import { Route, Routes } from 'react-router-dom';
import {Login} from './pages/Login'
import {Livraria} from './pages/Livraria'


function App() {


  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Login/>}/>
        <Route path='/Livraria' element={<Livraria/>}/>
      </Routes>
    </div>
  );
}

export default App;
