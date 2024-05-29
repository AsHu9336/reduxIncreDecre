import React from 'react'
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import 'bootstrap-icons/font/bootstrap-icons.css'
import { useSelector, useDispatch } from 'react-redux'
import { Increment , Decrement } from './Action/index'


export default function App() {

  const mystate = useSelector((state) => state.ActionReducer
  )

  const dispatch = useDispatch()
  return (
    <>
      <h1 className='text-center'>Increment or Decrement </h1>
      <h1 className='text-center'> Using Redux</h1>
      <div className='container d-flex align-item-center justify-content-center'>
        <div>
          <button className="btn btn-outline-success bi bi-dash-lg m-2" onClick={() => dispatch(Decrement())} type="submit"></button>
        </div>
        <div>
          <h1 >{mystate}</h1>
        </div>
        <div>

          <button className="btn btn-outline-success bi bi-align-middle m-2" onClick={()=> dispatch(Increment())} type="submit" ></button>
        </div>
      </div>

    </>
  )
}
