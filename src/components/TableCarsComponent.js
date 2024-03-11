//import { element } from 'prop-types'

//import Button from '../components/ButtonComponnent.js'
import {Outlet} from 'react-router-dom'
import '../styles/tableCars.css'
//import { useState } from 'react'

export default function TableCars(){

     return(
      
      <>
         
        <div className='tableCars'>
        
          <p>affichage de vehicules, bientot disponible</p>
         
       <Outlet/>

        </div>
        </>
     )


     
          

    

}