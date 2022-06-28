import NavBar from'./Components/NavBar';
import{BrowserRouter,Route,Routes}from 'react-router-dom'
import Admin from './Components/Admin';
import About from './Components/About';
import Signup from './Pages/Registration Page/Signup';
import Menu from './Components/Menu';
import Contact from './Components/Contact';
import'./index.css';

function App() {
  return (
    <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route path="/Admin" element={<Admin/>} exact />
        <Route path="/Accounts" element={<Signup/>} exact />
        <Route path="/Menu" element={<Menu/>} exact />
        <Route path="/about" element={<About/>} exact />
        <Route path="/Contact" element={<Contact/>} exact />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
