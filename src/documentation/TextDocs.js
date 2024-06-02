import { Text } from "../components/Text/Text"
import SideBar from "../sideBar"

export const TextDocs = () => {
    return(
        <div className="div-container">
            <SideBar />
            <div className="container">
            <h1>Text Field</h1>
            The Textarea Autosize component gives you a textarea HTML element that automatically adjusts its height to match the length of the content within.

            <Text type="" label="Enter text here" />
            <Text type="" label="Enter text here" />
         </div>
        </div>
    )
}