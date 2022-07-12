import { useState } from 'react'
import { BrowserRouter } from 'react-router-dom'
import Navbar from '../components/Navbar/Navbar'
import './App.css'


function App() {
 

  return (
    <div className="App" >
      <BrowserRouter>
        <Navbar/>
        {<Routes>
        <Route path="/" element={<Home />}/>
         <Route path="/Activity" element={<Activity />} /> 
         <Route path="/Nutrition" element={<Nutrition />} />
         <Route path="/Exercise" element={<Exercise />} /> 
         <Route path="/Sleep" element={<Sleep />} />
         <Route path="/Signup" element={<Signup />} />
        </Routes>}
      </BrowserRouter>
      <Navbar/>

    </div>
  )
}

export default App


