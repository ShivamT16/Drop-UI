export const Badge = ({icon, count, label}) => {

    const selectIcon = (icon) => {
        switch(icon.toLowerCase()){
            case "message":
                return{
                    icon: ""
                }
            case "chat":
                return{
                    icon: ""
                }
            case "meeting":
                return{
                    icon: ""
                }
            default:
                return null
        }
    }
    const getIcon = selectIcon(icon)
    return(
        <div>
            <span>{count}</span>
            <icon>{getIcon.icon}</icon>
            <label>{label}</label>
        </div>
    )
}

export const AvatarBadge = ({children, type}) => {
    return(
        <div>
            <span className={type} ></span>
            {children}
        </div>
    )
}