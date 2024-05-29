import React from 'react'
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import 'bootstrap-icons/font/bootstrap-icons.css'


export default function App() {
  return (
    <>
      <h1 className='text-center'>Increment or Decrement </h1>
      <h1 className='text-center'> Using Redux</h1>
      <div className='container d-flex align-item-center justify-content-center'>
        <div>
          <button class="btn btn-outline-success bi bi-dash-lg m-2" type="submit"></button>
        </div>
        <div>
          <h1>0</h1>
        </div>
        <div>

          <button class="btn btn-outline-success bi bi-align-middle m-2" type="submit"></button>
        </div>
      </div>

    </>
  )
}
