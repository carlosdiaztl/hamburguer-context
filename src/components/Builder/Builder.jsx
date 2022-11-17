import React, { useContext, useEffect, useState } from 'react'
import {  useNavigate } from 'react-router-dom'
import Swal from 'sweetalert2'
import { contexto } from '../../router/Router'
import './style.scss'


const Builder = () => {
    const navigate=useNavigate()
    const [burguerIngredients, setBurguerIngredients] = useState([])
    const {listaHamburguesas, setListaHamburguesas}=useContext(contexto)
   
const ingredientes =[
    {ingrediente:"bacon",price:10},{ingrediente:"salad",price:2},
    {ingrediente:"cheese",price:5},{ingrediente:"meat",price:20}
]
// const temporalArray=[]
const AddIngredientes=(item,price)=>{
    if (burguerIngredients.length < 15 ) {
        console.log(item,price);
        const newIngredient={ingrediente:item,price}
        console.log(newIngredient);
       setBurguerIngredients([...burguerIngredients,
        newIngredient])
           console.log(burguerIngredients);
        
    }
    // console.log(item,price);
    // temporalArray.push(item)
    // console.log(temporalArray)
    
    
    
}


const deleteIngredient=(index)=>{
    console.log(index);
    const lista=[...burguerIngredients]
    lista.splice(index,1)
    setBurguerIngredients(lista)
    //si fuera un array este seria el metodo, pero por ser objeto debe ser con filter
//     const lista= [...burguerIngredients]
    
//    console.log(lista);
//    lista.splice(index,1)
//    setBurguerIngredients(lista)
    
}

const total=burguerIngredients.map((item,index)=>(item.price))
console.log(total);
// const total1= total.reduce((prev,act)=>(prev+act,0))
const total1 =total.reduce((previousValue, currentValue) => previousValue + currentValue,0);
console.log(total1);
// const total2=burguerIngredients.reduce((prev,act)=>prev+act,0)
// console.log(total2);

// console.log(burguerIngredients.keys.ingrediente);
    useEffect(() => {
        if (burguerIngredients.length === 7) {
            Swal.fire(
                'Creo que son mcuhos ingredientes !',
                'XD!',
                'info'
              )
            
        }
        if (burguerIngredients.length === 12) {
            Swal.fire(
                'Creo que llevas rato sin comer ? ',
                'Es de anotar que el mensajero por politicas de la empresa no se debe ingerir',
                'info'
              )
        }
        
 
    }, [burguerIngredients])

const addList=()=>{
    if (burguerIngredients.length) {
        if (listaHamburguesas.length   < 10) {
        console.log(burguerIngredients);
        const hamburguesa={
         hamburguesa:"hamburguesa",
         ingredientes:burguerIngredients,
         price:total1
        }
       
     console.log(hamburguesa);
     console.log(listaHamburguesas);
     const listaGenerada=[...listaHamburguesas,hamburguesa]
     console.log(listaGenerada);
     setListaHamburguesas(listaGenerada)
     console.log(listaHamburguesas);
     setBurguerIngredients([])
            
        }
        if (listaHamburguesas.length === 10) {
            Swal.fire(
                'LO SENTIMOS, ','EL MENSAJERO SOLO PUEDE LLEVAS HASTA 10 HAMBURGUESAS','warning'
            )
        }
        
        
    } else {
        Swal.fire(
            'La hamburguesa debe tener al menos 1 ingrediente,','gracias.','info'
        )
        
    }
  
}

const show=()=>{
    if (listaHamburguesas.length) {
    console.log(listaHamburguesas);
    navigate("/receipt")
        
    }
    else{
        Swal.fire(
            'De momento no has comprado nada ','que tal si compras una hamburguesita =)','info'
        )
    }
    
    // setFactura(!factura)
   
}


  return (
    <div>Builder
    {ingredientes.map((item,index)=>(
        <button key={index} onClick={()=>{AddIngredientes(item.ingrediente,item.price)}}>{item.ingrediente} </button>

    ))}
    <span className='' >{total1}$ </span>
    <div> <div className='bread-top'>pan top</div>
    {// si fuera una lista seria asi
    }
   {/* {burguerIngredients.length?burguerIngredients.map((item,index)=>{
    return(
        <div key={index}  className={`${item}`} onClick={()=>{deleteIngredient(index)}  } >{item} </div>

    )
   }):<></>
   } */}
   {burguerIngredients.length?burguerIngredients.map((item,index)=>{
    return(
        <div key={index}  className={`${item.ingrediente}`} onClick={()=>{deleteIngredient(index)}  } >{item.ingrediente} </div>

    )
   }):<></>
   } 
    <div className='bread-bottom'>pan bot</div>
    <button onClick={addList}> add burguer</button>
    <button onClick={show}> ver factura</button>
    <span>Has comprado {listaHamburguesas.length} {listaHamburguesas.length >1 ? "hamburguesas":"hamburguesa"} </span>
    
    </div>
    
    
    

    
     
    
  
    </div>
  )
}

export default Builder