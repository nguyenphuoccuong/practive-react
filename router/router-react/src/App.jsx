import { Link, Route, Routes } from 'react-router-dom'
import './App.css'
import AboutComponent from './Component/AboutComponent'
import ContactComponet from './Component/ContactComponent'
import HomeComponent from './Component/HomeComponent'
import ProductComponent from './Component/ProductComponent'
import NotFoundComponent from './Component/NotComponent'
import LayoutComponent from './Component/LayoutComponent'

function App() {

  return (
    <>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </nav>

      <Routes>
        <Route path='/' element={<LayoutComponent />}>
          <Route index element={<HomeComponent />} />
          <Route path='/about' element={<AboutComponent />} />
          <Route path='/contact' element={<ContactComponet />} />
          <Route path='/product/:id/:name/:price' element={<ProductComponent />} />
          <Route path='*' element={<NotFoundComponent />} />
        </Route>
      </Routes>

    </>
  )
}

export default App
