import { Link } from "react-router-dom"

const SideBar = () => {
    return(
        <div className="sidebar" >
         
         <Link style={{textDecoration: "none", color: "blue"}} to="/components/avatars" >Avatar</Link>
         <Link style={{textDecoration: "none", color: "blue"}} to="/components/alerts" >Alerts</Link>
         <Link style={{textDecoration: "none", color: "blue"}} to="/components/badges" >Badge</Link>
         <Link style={{textDecoration: "none", color: "blue"}} to="/components/buttons" >Button</Link>
         <Link style={{textDecoration: "none", color: "blue"}} to="/components/cards" >Card</Link>
         <Link style={{textDecoration: "none", color: "blue"}} to="/components/headings" >Headings</Link>
         <Link style={{textDecoration: "none", color: "blue"}} to="/components/texts" >Text</Link>
         <Link style={{textDecoration: "none", color: "blue"}} to="/components/images" >Image</Link>
        
        </div>
    )
}

export default SideBar