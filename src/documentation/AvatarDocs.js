import { Avatar } from "../components/Avatar/Avatar"
import SideBar from "../sideBar"
import media from "./media/avatar.png"

export const AvatarDocs = () => {
    return(
        <div className="div-container">
            <SideBar />
            <div className="container">
            <h1>Avatar</h1>
            <p>Avatars are found throughout material design with uses in everything from tables to dialog menus.</p>
        <h2>Normal Avatars:</h2>

        <Avatar name="avatar" size="small" source="https://cdn270-genai.picsart.com/18a44a7c-9756-4493-9802-68a2d3f23a78/454196932033201.jpg" type="normal" />
        <Avatar name="avatar" size="medium" source="https://cdn270-genai.picsart.com/18a44a7c-9756-4493-9802-68a2d3f23a78/454196932033201.jpg" type="normal" />
        <Avatar name="avatar" size="large" source="https://cdn270-genai.picsart.com/18a44a7c-9756-4493-9802-68a2d3f23a78/454196932033201.jpg" type="normal" />
       
        <h2>Border Avatars:</h2>

        <Avatar name="avatar" size="small" source="https://cdn270-genai.picsart.com/18a44a7c-9756-4493-9802-68a2d3f23a78/454196932033201.jpg" type="border" />
        <Avatar name="avatar" size="medium" source="https://cdn270-genai.picsart.com/18a44a7c-9756-4493-9802-68a2d3f23a78/454196932033201.jpg" type="border" />
        <Avatar name="avatar" size="large" source="https://cdn270-genai.picsart.com/18a44a7c-9756-4493-9802-68a2d3f23a78/454196932033201.jpg" type="border" />

        <p>How to use ?</p>

        <img style={{ height: "14rem", borderRadius: "2rem"}} src={media} alt="avatar"/>

        <p>The avatar component consists of name, size, source and type attributes.</p>
        <p>Name and Source are the names you want to give to your avatar and the source image for the avatar respectively.</p>
        <p>Size can take three values, 'small', 'medium' and 'large'.</p>
        <p>Type can take two values, 'normal' and 'border'. This determines if you want your avatars to have a border or not.</p>
        </div>
        </div>
    )
}