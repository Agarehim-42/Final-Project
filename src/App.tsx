import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import { BrowserRouter , Routes , Route } from 'react-router-dom'
import Home from './Pages/Home'
import AboutUs from './Pages/AboutUs'
import Blogs from './Pages/Blogs'
import PracticeAreas from './Pages/PracticeAreas'
import Error404 from './Pages/Error404'
import ShortCodes from './Pages/ShortCodes'
import Testimonial from './components/Testimonial'
import Attorneys from './components/Attorneys'
import Services from './Pages/Services'




function App() {


  return (
    <>
    <BrowserRouter>
    <Header />
      <Routes>
        <Route>
        <Route path='/' element={<Home/>}/>
        <Route path='/AboutUs' element={<AboutUs/>}/>
        <Route path='/Blogs' element={<Blogs/>}/>
        <Route path='/PracticeAreas' element={<PracticeAreas/>}/>
        <Route path='*' element={<Error404/>}/>
        <Route path='Shortcodes' element={<ShortCodes/>}/>
        <Route path='Testimonial' element={<Testimonial/>}/>
        <Route path='Attorneys' element={<Attorneys/>}/>
        <Route path='Services' element={<Services/>}/>
        </Route>
      </Routes>
      <Footer/>
    </BrowserRouter>

     
    </>
  )
}

export default App
