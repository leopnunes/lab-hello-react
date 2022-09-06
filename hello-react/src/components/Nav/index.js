import burguinho from './images/menu-top-xs.png'
import ironLogo from './images/ironhack-logo-xs.png'
 
 function NavBar() {

      return (
            <div style={{backgroundColor:"rgb(31, 30, 57)", height: "50px", width: "560px", marginLeft:"0px",
            display:"flex",
                alignItems: "center",
                justifyContent: "space-between",
                flexWrap: "nowrap",
                flexDirection: "row"}}>
                <img src={ironLogo} alt="logo ironhack" style={{margin:"40px", marginTop:"60px", width:"30px"}}/>
                <img src={burguinho} alt="burguinho" style={{margin:"40px", marginTop:"60px", width:"15px"}}/>
            </div>
        )
 }

 export default NavBar