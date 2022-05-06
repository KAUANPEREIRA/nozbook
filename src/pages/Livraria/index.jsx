import React,{useEffect,useState} from 'react'
import './livraria.css'
import axios from 'axios'
import LogoBlack from '../../assets/NOZ_marca_FB1.png'
import {FiLogOut} from 'react-icons/fi'

export const Livraria = () => {
    let token ='eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI2MWM5YzUyNTYxODk3NDVkY2Q1MDUwMGEiLCJ2bGQiOjE2NTE4NjA2NjgwNDIsImlhdCI6MTY1MTg2NDI2ODA0Mn0.S2wkAuJrep_UzAXL-uyA_9KoZW9ndbV3tUoXTObzulc'
    const [biblioteca,setBiblioteca]=useState([])
  useEffect(()=>{
    axios.get("http://localhost:3000/data")
    .then((response)=>{
      setBiblioteca(response.data)
      console.log(setBiblioteca)

    })
    .catch(()=>{
      console.log('false')
    })
    
  },[])
 
  return (
    <div className='livro'>
      <div className='nav'>
        <div className='logoLivraria'>
          <img src={LogoBlack} alt=''/>   <span className='titleLivraria'>Books</span>
        </div>
        <div className='logout'>
          Bem vindo <b>Guilherme!</b>  <span className='circulo'><FiLogOut/></span>
        </div>

      </div>
      <div className='livrosLivraria'>
       {biblioteca.map((biblioteca,key)=>{
         return(
          <div className='card' key={key}>
          <div className='nome'>
            {biblioteca.title}


          </div>

        </div>

         )
       })}
        
      </div>
      
    </div>
  )
}





