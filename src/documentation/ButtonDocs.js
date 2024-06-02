import { Button, FloatButton, IconButton, LinkButton } from "../components/Button/Button"
import primaryBtn from "./media/primaryBtn.png"
import linkBtn from "./media/linkBtn.png"
import iconBtn from "./media/iconBtn.png"
import floatBtn from "./media/floatBtn.png"

export const ButtonDocs = () => {
    return(
        <div>
            <h1>Button</h1>
            <p>Buttons allow users to take actions, and make choices, with a single tap.</p>

            <h2>Primary Buttons: </h2>
            <Button type="outlined-btn" >Outlined</Button>
            <Button type="elevated-btn" >Elevated</Button>
            <Button type="filled-btn" >Filled</Button>

            <p>How to use?</p>

            <img src={primaryBtn} alt="button" style={{ height: "15rem", borderRadius: "2rem"}} />

            <h2>Link Buttons: </h2>
            <LinkButton type="outlined-btn" destination="https://google.com" > Google </LinkButton>
            <LinkButton type="elevated-btn" destination="/" > Home Page </LinkButton>
            <LinkButton type="elevated-btn" destination="/components" > Components </LinkButton>

            <p>How to use?</p>

            <img src={linkBtn} alt="button" style={{ height: "15rem", borderRadius: "2rem"}} />

            <h2>Icon Button: </h2>
            <IconButton type={"outlined-btn"} icon={"mail"}>Icon button</IconButton>
            <IconButton type={"filled-btn"} icon={"logout"}>Logout</IconButton>
            <IconButton type={"elevated-btn"} icon={"draft"}>New</IconButton>
            <IconButton type={"filled-btn"} icon={"add"}>Add</IconButton>

            <p>How to use?</p>

            <img src={iconBtn} alt="button" style={{ height: "20rem", borderRadius: "2rem"}} />

            <h2>Floating Action Button</h2>

            <FloatButton icon={"add"} size={30}></FloatButton>
            <FloatButton icon={"logout"} size={40}></FloatButton>

            <p>How to use?</p>

            <img src={floatBtn} alt="button" style={{ height: "15rem", borderRadius: "2rem"}} />


        </div>
    )
}