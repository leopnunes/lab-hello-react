function Header() {

  return (
    <div style={{fontFamily:"Lato", backgroundColor:"rgb(31, 30, 57)", width: "560px", display:"flex", textAlign: "left", flexDirection: "column", height:"410px"}}>
        <h1 style={{width: "270px", marginLeft: "40px", marginBottom:"0px", marginTop:"60px", color:"white", margin:"10px", fontSize:"50px"}}>Say hello to ReactJS</h1>
        <p style={{width: "270px", marginLeft: "40px", color:"white", margin:"10px", marginTop:"0px", fontSize:"14px"}}>You will learn how to use the most popular frontend library, and become a super Ninja developer.</p>

        <button style={{width: "120px", marginLeft: "40px", marginTop: "40px", color:"rgb(31, 30, 57)", fontWeight: "700", padding:"16px", borderRadius:"6px"}}>Awesome!</button>
    </div>
)

}   

export default Header