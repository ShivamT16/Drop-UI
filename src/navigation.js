import { NavLink } from "react-router-dom"

export const Navigation = () => {
    return(
        <div>
        <nav className="nav">
        <h1>Drop UI</h1>
        <input className="input" type="text" placeholder="Search component" />
        <NavLink to="/" >Home</NavLink>
        <NavLink to="/components" >Components</NavLink>
      </nav>
        </div>
    )
}