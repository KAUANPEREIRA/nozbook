import React from 'react'
import './livraria.css'
import LogoBlack from '../../assets/NOZ_marca_FB1.png'
import {FiLogOut} from 'react-icons/fi'

export const Livraria = () => {
 
  return (
    <div className='livro'>
      <div className='nav'>
        <img src={LogoBlack} alt=''/>
        <div className='logout'>
          Bem vindo <b>Guilherme</b>  <span className='circulo'><FiLogOut/></span>
        </div>

      </div>
      
    </div>
  )
}





