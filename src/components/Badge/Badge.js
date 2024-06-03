import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';
import GroupsOutlinedIcon from '@mui/icons-material/GroupsOutlined';
import "./Badge.css"

export const Badge = ({icon, count, label}) => {

    const selectIcon = (icon) => {
        switch(icon.toLowerCase()){
            case "message":
                return{
                    icon: <EmailOutlinedIcon fontSize='large' />
                }
            case "chat":
                return{
                    icon: <ChatBubbleOutlineOutlinedIcon fontSize='large' />
                }
            case "meeting":
                return{
                    icon: <GroupsOutlinedIcon fontSize='large' />
                }
            default:
                return null
        }
    }
    const getIcon = selectIcon(icon)
    return(
        <div className='badge'>
            <span>{count}</span>
            <icon>{getIcon.icon}</icon>
            <label>{label}</label>
        </div>
    )
}

export const AvatarBadge = ({children, type}) => {
    return(
        <div className="avatar-badge">
            <span className={type} ></span>
            {children}
        </div>
    )
}