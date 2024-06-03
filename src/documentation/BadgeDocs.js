import { Link } from "react-router-dom"
import { Avatar } from "../components/Avatar/Avatar"
import { AvatarBadge, Badge } from "../components/Badge/Badge"
import media from "./media/badge.png"
import aMedia from "./media/avatarBadge.png"
import SideBar from "../sideBar"

export const BadgeDocs = () => {
    return(
        <div className="div-container">
            <SideBar />
            <div className="container">
            <h1>Badge</h1>
            <p>Badge generates a small badge to the top-right of its children.</p>

            <h2>Normal Badges:</h2>

            <div>
            <Badge icon="message" count="10" label="mail" />
            <Badge icon="chat" count="20" label="chat" />
            <Badge icon="meeting" count="2" label="meet" />
            </div>
            
            <p>How to use ?</p>
            <img src={media} alt="badge" style={{ height: "15rem", borderRadius: "2rem"}} />

            <h2>Avatar Badges:</h2>

            <li>Green: Online</li>
            <li>Yellow: Away</li>
            <li>Busy: Red</li>
            <li>Offline: Grey</li>

            <AvatarBadge type="online"><Avatar name="avatar" size="medium" source="https://cdn270-genai.picsart.com/18a44a7c-9756-4493-9802-68a2d3f23a78/454196932033201.jpg" type="border" /></AvatarBadge>

            <AvatarBadge type="away"><Avatar name="avatar" size="medium" source="https://cdn270-genai.picsart.com/18a44a7c-9756-4493-9802-68a2d3f23a78/454196932033201.jpg" type="border" /></AvatarBadge>

            <AvatarBadge type="busy"><Avatar name="avatar" size="medium" source="https://cdn270-genai.picsart.com/18a44a7c-9756-4493-9802-68a2d3f23a78/454196932033201.jpg" type="border" /></AvatarBadge>

            <AvatarBadge type="offline"><Avatar name="avatar" size="medium" source="https://cdn270-genai.picsart.com/18a44a7c-9756-4493-9802-68a2d3f23a78/454196932033201.jpg" type="border" /></AvatarBadge>

            <p>Icon - takes three values, 'message', 'chat' and 'meeting'. The icons are rendered on the basis of these values.</p>
        <p>Count - takes the count value of the notification.</p>
        <p>Label - takes the label value, that will be printed below your icon.</p>
        <p>Avatar Badges should be used in tandem with the <Link to="/components/avatars">Avatar</Link> component.</p>

        <p>How to use ?</p>
        <img src={aMedia} alt="badge" style={{ height: "20rem", borderRadius: "2rem"}} />
        
        <p>Your avatar component should be wrapped inside the avatar badge component.</p>
        <p>Type - takes in four values to determine the user's status. They are, 'online', 'offline', 'busy' and 'away'.</p>
        <p>Please use the avatars on size, 'medium' for the best user experience.</p>
        </div>
        </div>
    )
}