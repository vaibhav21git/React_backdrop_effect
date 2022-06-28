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
     <div className="modal">
    <p>Are you Sure</p>
    <button  className = "btn btn--alt" onClick={Cancelhandler}>Cancel</button>
    <button  className = "btn" onClick={Confirmhandler}>Confirm</button>
</div>
);}

export default Modal