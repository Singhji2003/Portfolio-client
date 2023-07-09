const AlertBox = (props)=>{
    return(
       <div className="alert">
        <p>Succesfully Sent the message.. Thank You!!!</p>
        <i class="fa-solid fa-xmark" onClick={()=>{props.setalert(false)}}></i>
       </div>
    )
}
export default AlertBox;