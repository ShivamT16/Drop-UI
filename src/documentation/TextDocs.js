import { Text } from "../components/Text/Text"
import SideBar from "../sideBar"
import text from "./media/text.png"

export const TextDocs = () => {
    return(
        <div className="div-container">
            <SideBar />
            <div className="container">
            <h1>Text Field</h1>
            <p>The Textarea Autosize component gives you a textarea HTML element that automatically adjusts its height to match the length of the content within.</p>

            <Text type="outline-text" label="Enter text here" />
            <Text type="filled-text" label="Enter text here" />

            <p>How to use? </p>
            <img style={{ height: "15rem", borderRadius: "2rem"}} src={text} alt="text"/>
         </div>
        </div>
    )
}