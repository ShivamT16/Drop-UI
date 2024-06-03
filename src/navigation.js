import { NavLink } from "react-router-dom"
import GitHubIcon from '@mui/icons-material/GitHub';

export const Navigation = () => {
    return(
        <div>
        <nav className="nav">
        <h1 className="h1">Drop UI</h1>
        <input className="input" type="text" placeholder="Search for Components..." />
        <NavLink className="navv" to="/" >Home</NavLink>
        <NavLink className="navv" to="/components" >Components</NavLink>
        <NavLink className="navv" to="https://github.com/ShivamT16/Drop-UI" target='_blank' > <GitHubIcon fontSize="large" /> </NavLink>

      </nav>
        </div>
    )
}