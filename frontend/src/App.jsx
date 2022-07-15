import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from '../components/Navbar/Navbar'
import Home from '../components/Home/Home'
import Activity from '../components/Activity/Activity'
import Sleep from '../components/Sleep/Sleep'
import Signup from '../components/Signup/Signup'
import Exercise from '../components/Exercise/Exercise'
import Nutrition from '../components/Nutrition/Nutrition'
import './App.css'
import Login from '../components/Login/Login'


function App() {
 

  return (
    <div className="App" >
      <BrowserRouter>
        <Navbar/>
        {<Routes>
          <Route path="/" element={<Home />} /> 
         <Route path="/Activity" element={<Activity />} /> 
          <Route path="/Nutrition" element={<Nutrition />} />
          <Route path="/Exercise" element={<Exercise />} /> 
          <Route path="/Sleep" element={<Sleep />} />
         <Route path="/Signup" element={<Signup />} /> 
         <Route path="/Login" element={<Login/>} />
        </Routes>}
      </BrowserRouter>


    </div>
  )
}

export default App


