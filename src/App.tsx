import './App.css'
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import UnderDevelopingPage from './pages/under-developing-page/under-developing-page';
import LoginPage from './pages/login-page/login-page';
import MainLayout from './layouts/main-layout';
import NavBar from './components/nav-bar/nav-bar';
import SideBar from './components/side-bar/side-bar';

function App() {
  return (
    <>
    <div>
    <Router>
    <MainLayout navbar={<NavBar/>} 
    children={
        <Routes>
          <Route path='/' element={<UnderDevelopingPage/>}/>
          <Route path='/login' element={<LoginPage/>}/>
        </Routes>
      } 
    sidebar={<SideBar/>} />
    </Router>
    </div>
    </>
  )
}

export default App


//HDLGenHub
