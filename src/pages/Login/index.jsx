import './login.css'
import IMG1 from '../../assets/NOZ_marca_FP1.png'
import {useState} from 'react'
import VECTOR from '../../assets/Vector1.png'
import { Navigate, useNavigate } from "react-router-dom"


export const Login=()=> {
  //uso de react hooks
  const [email, setEmail]=useState()
  const [senha, setSenha]=useState()

  //
 

  //função para login
  let navigate = useNavigate()
  const handleLogin =()=>{
   
    let alerta = document.querySelector('#alerta')
    if(email==='books@appnoz.com.br'&&senha==='12341234'){
      alerta.style.display='none'
      setTimeout(navigate('/Livraria'),3000)
      
      
    }else{
      alerta.style.display='block'
    }
  }

  return (
    <div className="App">
      
      
      <div className='login'>
        <br></br>

        <div className='tituloLogin'>
          <img src={IMG1}/><span className='titleLogin'>Books</span>
        </div>

        <div className='inputsLog'>
          <div className='inputEmail'>
            <label>Email</label>
            <input type="email" placeholder='digite seu email'className='inpt'
              onChange={e=>setEmail(e.target.value)} value={email} />
          </div>

          <div className='inputSenha'>
            <label>Senha</label>
            <input type="password" placeholder='digite sua Senha' className='inpt' senha="senha"
            onChange={e=>setSenha(e.target.value)} value={senha}/>
          </div>

          <div className='btnEntrar' onClick={handleLogin}>
            Entrar
          </div>
          
        </div>
        <div id='alerta'>
          <img src={VECTOR} className="topvector" />
          <div className='alertError'>
            Email e/ou senha incorretos.
          </div>
        </div>
       
     

     

      </div>
     
    </div>
  );
}

