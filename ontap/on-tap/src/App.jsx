import { useState } from 'react'
import './App.css'
import CreatCategoryComponent from './Component/CreatCategoryComponent'
import UpdateCategoryComponent from './Component/UpdateCategoryComponent'

function App() {

  return (
    <>
      <CreatCategoryComponent/>
      <UpdateCategoryComponent id="1"/>
    </>
  )
}

export default App
