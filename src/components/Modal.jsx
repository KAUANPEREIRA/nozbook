import React, { children } from 'react'
import './modal.css'
import {AiOutlineCloseCircle} from 'react-icons/ai'

const Modal = ({id="modal",onClose=()=>{},children}) => {
  const handleClickExit=(e)=>{
      if(e.target.id==id)onClose()

  }
  return (
    <div id={id} className='modal' onClick={handleClickExit}>
        <div className='container'>
            <div className='close' onClick={onClose}><AiOutlineCloseCircle/></div>
            <div className=''>{children}</div>
        </div>



    </div>
  )
}

export default Modal