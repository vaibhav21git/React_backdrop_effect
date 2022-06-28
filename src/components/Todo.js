import {useState} from 'react'

import Modal from './Modal';
import Backdrop from './Backdrop';

function Todo(props) 
{
      const [modalisopen , setmodalisopen] =  useState(false);


    function deletehandler() 
    {
        setmodalisopen(true);
    }

    function closehandler() 
    {
        setmodalisopen(false);
    }
    return  <div className='card'>

        <h2>{props.text}</h2>
        <div>
        <button  className = 'btn' onClick = {deletehandler} >Delete</button>
        </div>
        {modalisopen && <Modal oncancel = {closehandler} onconfirm = {closehandler}/>}
        {modalisopen && <Backdrop oncancel = {closehandler}/>} 
      </div>
}


export default Todo;

///name of function sholud start with capital letter .
// props object contains the key value pair.
//{ascasd} javascript expression to be evaluated.
// Js { ab && cd} if both are true then cd will be returned 