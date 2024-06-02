import { Link } from "react-router-dom"
import "./components.css"

export const Components = () => {
    return(
        <div>
         <h1>ComponentS</h1>
         <div className="components">

         <Link className="cards" to="/components/avatars" >Avatar</Link>
         <Link className="cards" to="/components/alerts" >Alerts</Link>
         <Link className="cards" to="/components/badges" >Badge</Link>
         <Link className="cards" to="/components/buttons" >Button</Link>
         <Link className="cards" to="/components/cards" >Card</Link>
         <Link className="cards" to="/components/headings" >Headings</Link>
         <Link className="cards" to="" >Text</Link>
         <Link className="cards" to="" >Image</Link>

         </div>
        </div>
    )
}