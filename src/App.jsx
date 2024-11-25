import {Route, Routes} from 'react-router-dom'
import './App.css'
import Footer from './components/Footer'
import Header from './components/Header'
import Home from './Pages/Home'
import Landingpage from './Pages/Landingpage'
import Watchhistory from './Pages/Watchhistory'



function App() {

  return (
    <>

    <Header/>

    <Routes>
      <Route path='/' element={<Landingpage/>}/>
      <Route path='/home' element={<Home/>}/>
      <Route path='/watchhistory' element={<Watchhistory/>}/>
    </Routes>

    <Footer/>
      
    </>
  )
}

export default App
