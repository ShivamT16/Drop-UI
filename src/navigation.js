import { NavLink } from "react-router-dom"

export const Navigation = () => {
    return(
        <div>
        <nav className="nav">
        <h1>Drop UI</h1>
        <input className="input" type="text" placeholder="Search for Components..." />
        <NavLink className="navv" to="/" >Home</NavLink>
        <NavLink className="navv" to="/components" >Components</NavLink>
      </nav>
        </div>
    )
}