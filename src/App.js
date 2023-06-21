import './App.css';
import CardForm from './components/CardForm/CardForm';
import Navbar from './components/Navbar/Navbar';
import { Routes, BrowserRouter, Route } from 'react-router-dom';
function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<CardForm />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
