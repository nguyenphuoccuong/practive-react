import './App.css'
import BannerComponent from './Banner/BannerComponent'
import HeaderComponent from './header/HeaderComponent'
import ContentComponent from './Content/ContentContainer'
import BookComponent from './Content/BookComponent'
import NewsComponent from './Content/NewsComponent'

import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Dropdown from 'react-bootstrap/Dropdown';
import UseStateComponent from './usestateComponent'
import { Form } from 'react-bootstrap'
import FormComponent from './FormComponent'
import OptimizeFormComponent from './OptimizeComponent'

function App() {

  return (
    <>
    <Button variant="primary">Primary</Button>{'nut bam '}
    <Dropdown>
      <Dropdown.Toggle variant="success" id="dropdown-basic">
        Dropdown Button
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item href="trang chu">Action</Dropdown.Item>
        <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>

    {/* useState */}
    <UseStateComponent/>
    <OptimizeFormComponent/>
      
    

      {/* <div className="wrapper">
        <BannerComponent/>
        <HeaderComponent/>
        <ContentComponent/>
        <BookComponent/>
        <NewsComponent/>
      </div> */}
    </>
  )
}

export default App
