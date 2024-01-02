import { useEffect} from 'react'
import {BrowserRouter, Route, Routes, Link, Outlet, useParams} from 'react-router-dom';
import './App.css'
import Login from './admin/login'
import Home from './user/home';
import Service from './admin/service';
import Meeting from './admin/meeting';
import bussinesData from './dataStore/bussinesData';
import serviceData from './dataStore/serviceData';
import meetingData from './dataStore/meetingData';
function App() {
  useEffect(()=>{
    bussinesData.initialBusiness();
    serviceData.initialServices();
    meetingData.initialMeetings();
  },[])
  return (
    <>
      <BrowserRouter>
     <Routes>
     <Route path={"/"} element={<Home />}></Route>
     <Route path={"admin"} element={<Login />}>
      <Route path={"services"} element={<Service/>}></Route>
      <Route path={"meetings"} element={<Meeting/>}></Route>
     </Route>
     </Routes>
     </BrowserRouter>
    </>
  )
}

export default App
