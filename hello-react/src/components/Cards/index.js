

function Cards(props) {
    return(
        <div style={{marginLeft:"40px", marginTop:"90px", margin:"15px"}}>
        <img style={{width:"90px"}} src={props.src} alt={props.alt}/>
        <h3 style={{fontSize:"18px", fontFamily:"Lato"}}>{props.title}</h3>
        <p style={{fontSize:"12px"}}>{props.p}</p>
        </div>
    )
}

export default Cards