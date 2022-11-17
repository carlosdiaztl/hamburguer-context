import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom';
import { contexto } from '../../router/Router';
import './style.scss'


const Receipt = () => {
  const{ listaHamburguesas,setListaHamburguesas}=useContext(contexto)
  console.log(listaHamburguesas);
  const navigate=useNavigate()
 const back=()=>{
  navigate("/")
 }
 const newBuy=()=>{
  setListaHamburguesas([])
  navigate("/")
 }
 const datos = listaHamburguesas.map((item,index)=>(
  item.price
 ))
 const  totalApagar= datos.reduce((prev,act)=>prev+act,0)
  return (
    <div className="container receipt">Receipt
    <button className="button" onClick={back}> volver</button>
    <button className="button"  onClick={newBuy}> Nueva compra </button>
    {listaHamburguesas.map((item,index)=>(
       
       <section key={index}> 
       <span>{item.hamburguesa}{index+1} </span>
       <span>{item.price}$ </span>
       <span>{item.ingredientes.map((item,index)=>(
          <p key={`${index}-${item.price}`} >{item.ingrediente}: {item.price}$ </p>
       ))} </span>
       </section>

      
   ))}
   <h2 className="receipt-row"> total{totalApagar} </h2>

  
    </div>
  )
}

export default Receipt