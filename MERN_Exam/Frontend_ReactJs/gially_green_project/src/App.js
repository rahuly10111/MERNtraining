
import './App.css';
import { Route, Routes, BrowserRouter } from "react-router-dom"
import NavBar from './Component/NavBar';
import LoginUser from './Component/LoginUser';
import RegistrationUser from './Component/RegistrationUser';
import DashBoard from './Component/DashBoard';
import Profile from './Component/Profile';
import Protected from './Component/Protected';
import UpdateProfile from './Component/UpdateProfile';

function App() {

  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path='/' element={<LoginUser />} />
          <Route path='/registration' element={<RegistrationUser />} />
          <Route path='/dasboard' element={<Protected Component={DashBoard} />} />
          <Route path='/profile' element={<Protected Component={Profile} />} />
          <Route path='/editprofile/:id' element={<Protected Component={UpdateProfile} />} />
        </Routes>
      </BrowserRouter>

    </>
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
  );
}

export default App;
