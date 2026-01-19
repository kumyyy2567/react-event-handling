import { useState } from 'react'
import './App.css'
import FormEvents from './components/FormEvents'

function App() {
  return (
    <div className="app-container">
      <h1>React Form Events Demo</h1>
      <p>Explore onChange, onBlur, and onFocus events</p>
      <FormEvents />
    </div>
  )
}

export default App
