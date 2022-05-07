import React,{useEffect,useState} from 'react'
import './livraria.css'
import axios from 'axios'
import LogoBlack from '../../assets/NOZ_marca_FB1.png'
import {FiLogOut} from 'react-icons/fi'
import Modal from '../../components/Modal'
import img8 from '../../assets/Book-8.jpg'
import {ImQuotesLeft} from 'react-icons/im'
import { Navigate, useNavigate } from "react-router-dom"

export const Livraria = () => {


   const [isModalVisible,setModalVisible]=useState(false)
    let token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI2MWM5YzUyNTYxODk3NDVkY2Q1MDUwMGEiLCJ2bGQiOjE2NTE5NDc5NjM0ODIsImlhdCI6MTY1MTk1MTU2MzQ4Mn0.iu1KKJC96H4b-SzD0WTFKo0_CwgpYqr-sKanXcP_jHw'
    let tToken = localStorage.getItem('save')
    console.log(token+'token')
    
  //////
    const [biblioteca,setBiblioteca]=useState([])
   useEffect(()=>{
     axios.get("http://books.appnoz.com.br/api/v1/books?page=1&amount=25&category=biographies",{
       headers:{
        'accept':'application/json',
        'Authorization':`Bearer ${tToken}`

       }
     })
     .then((response)=>{
      setBiblioteca(response.data.data)
     })
     .catch(()=>{
       console.log('erro na requisição')
     })

   },[])
  /////////
  let navigate = useNavigate()
 const HandleLogoof= ()=>{
   navigate('/')


 }
 
  return (
    <div className='livro'>
      <div className='nav'>
        <div className='logoLivraria'>
          <img src={LogoBlack} alt=''/>   <span className='titleLivraria'>Books</span>
        </div>
        <div className='logout'>
          Bem vindo <b>Guilherme!</b>  <span className='circulo'><FiLogOut onClick={HandleLogoof}/></span>
        </div>

      </div>
      {isModalVisible?<Modal  onClose={()=>{setModalVisible(false)}}>
        <div className='conteudoModal'>
          <div className='modalLeft'>
            <img className="modalImg" src={img8} />
  
          </div>
          <div className='modalRight'>
            <div className='modaltitle'>
            Change By Design Second line exampl...
            </div>
            <span className='blueTitle'>
            Tim Brown, Julie Zhuo, Fried Maximiilian
            </span>
            <div className='contentInformarions'>
              <div className='informationRight'>
                <span className='info'>INFORMAÇÕES</span>
                <span className='info' >Páginas</span>
                <span className='info'>Editora</span>
                <span className='info'>Publicação</span>
                <span className='info'>Idioma</span>
                <span className='info'>Titulo Original</span>
                <span className='info'>IBN 10</span>
                <span className='info'>IBN 13</span>
                
              </div>
              <div className='informationLeft'>
                <br></br>
                <span className='infoLeft'>304 páginas</span>
                <span className='infoLeft'>editora loyota</span>
                <span className='infoLeft'>2020</span>
                <span className='infoLeft'>Inglês</span>
                <span className='infoLeft'>Change by Id</span>
                <span className='infoLeft'>87867</span>
                <span className='infoLeft'>87864747647</span>

              </div>
            </div>
            <h3 className='resenha'>Resenha da editora</h3>
            <p className='pModal'>
              <ImQuotesLeft/>Resenha da editora The subject of “design thinking” is the rage
             at business schools, throughout corporations, and increasingly in the popular 
             press—due in large part to the work of IDEO, a leading design firm, and its celebrated 
             CEO, Tim Brown, who uses this book to show how the techniques and
            </p>
  
          </div>
          </div>
        </Modal>:null}
     
      <div className='livrosLivraria'>
     
      
       {biblioteca.map((biblioteca,key)=>{
         
         return(
           
          <div className='card' key={key} onClick={()=>setModalVisible(true)}>
          <div className='myLivros'>
            <img src={biblioteca.imageUrl} className='imgLivro'/>
          </div>
          <div className='detalhes'>
            <div className='nome'>
              {biblioteca.title}
            </div>
            <span className='blue'>
              {biblioteca.authors}
            </span>
            <div className='editora'>
              <span >{biblioteca.pageCount}</span>
              <span className='publisher'>{biblioteca.publisher}</span>
              <span>{' Publicado em '+ biblioteca.published}</span>
            </div>
          </div>

        </div>

         )
       })}
        
      </div>
      
    </div>
  )
}





