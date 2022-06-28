function Modal(props) {

   function Cancelhandler () 
   {
       props.oncancel();
   }

   function Confirmhandler () 
   {
      props.onconfirm();
   }


     return (
     <div>
    <p>Are you Sure</p>
    <button onClick={Cancelhandler}>Cancel</button>
    <button onClick={Confirmhandler}>Confirm</button>
</div>
);}

export default Modal