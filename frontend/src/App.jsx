import React from 'react'
import Home from './Home/Home'
import Library from './courses/Explore'
import { Route, Routes } from 'react-router-dom'
import SignUp from './components/SignUp'

const App = () => {
  return (
    <>
    <div>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/explore' element={< Library />}/>
        <Route path='/signup' element={< SignUp />}/>
      </Routes>
    </div>
    </>
  )
}

export default App
