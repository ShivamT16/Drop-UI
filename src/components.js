import { Link } from "react-router-dom"
import "./components.css"

export const Components = () => {
    return(
        <div>
         <h1>ComponentS</h1>
         <div className="components">

         <Link className="cards">Avatar</Link>
         <Link className="cards">Alert</Link>
         <Link className="cards">Badge</Link>
         <Link className="cards">Button</Link>
         <Link className="cards">Card</Link>
         <Link className="cards">Headings</Link>
         <Link className="cards">Text</Link>
         <Link className="cards">Image</Link>

         </div>
        </div>
    )
}