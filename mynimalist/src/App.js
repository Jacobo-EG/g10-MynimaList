import './App.css';
import Login from './paginas/Login';
import SignUp from './paginas/SignUp';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/registro' element={<SignUp />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
