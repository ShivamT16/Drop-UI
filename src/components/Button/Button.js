import { Link } from "react-router-dom"
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
import CreateOutlinedIcon from '@mui/icons-material/CreateOutlined';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import "./Button.css"

const getIcon = (icon,size) => {
    switch(icon.toLowerCase()){
        case "mail": 
            return {icon: <EmailOutlinedIcon /> }
        case "logout":
            return {icon: <LogoutOutlinedIcon /> }
        case "draft": 
            return {icon: <CreateOutlinedIcon /> }
        case "add":
            return {icon: <AddOutlinedIcon /> }
        default: 
            return null;
    }
}

export const Button = ({type, children}) => {
    return(
        <button className={type} > {children} </button>
    )
}

export const LinkButton = ({type, children, destination}) => {
    return(
        <Link to={destination} className={type} > {children} </Link>
    )
}

export const IconButton = ({type, icon, children}) => {
    const icons = getIcon(icon)
    return(
        <span>
            <Button type={type} > {icons.icon} {children} </Button>
        </span>
    )
}

export const FloatButton = ({icon, size}) => {
    const icons = getIcon(icon, size)
    return(
        <button className="float-btn" > {icons.icon} </button>
    )
}