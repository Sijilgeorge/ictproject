import logo from './logo.svg';
import './App.css';
import LandingPage from 'C:/Users/sijil george/Desktop/book/book/src/components/LandingPage.js'
import NavBar from './components/NavBar';
import { Route, Routes } from 'react-router';
import Login from './Login';
import UserProfile from './components/UserProfile';
import AdminDashboard from './components/AdminDashboard';
function App() {
  return (
    <div className="App">
      {/* <NavBar/>
      <Routes>
        <Route path='/home' element={<LandingPage/>}/>
        <Route path='/login'element={<Login/>}/>
      </Routes> */}
      <UserProfile/>
      {/* <AdminDashboard/> */}
    </div>
  );
}

export default App;
