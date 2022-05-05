import './App.css';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import Main from './pages/Main';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/registro' element={<SignUp />} />
        <Route path='/main' element={<Main />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
