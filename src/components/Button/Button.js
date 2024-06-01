import { Link } from "react-router-dom"

const getIcon = (icon,size) => {
    switch(icon.toLowerCase()){
        case "mail": 
            return {icon: ""}
        case "logout":
            return {icon: ""}
        case "draft": 
            return {icon: ""}
        case "add":
            return {icon: ""}
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