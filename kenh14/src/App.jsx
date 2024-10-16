import { useState } from 'react'
import './index.css'
import './App.css'
import HeaderComponent from './Component/HeaderComponent/HeaderComponent'
import {topHeadData} from './data'
function App() {

  return (
    <>
      <div className='wrapper'>
          <HeaderComponent data={topHeadData}/>
      </div>
    </>
  )
}

export default App
