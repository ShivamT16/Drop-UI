import { Alert } from "../components/Alert/Alert"
import media from "./media/alerts.png"
import SideBar from "../sideBar"
import "./documentation.css"

export const AlertDocs = () => {
    return(
        <div className="div-container">
            <SideBar />
            <div className="container">
            <h1>Alerts</h1>
            <p>Alerts display brief messages for the user without interrupting their use of the app.Provide clear and contextual feedback messages for common user actions using a variety of available and adaptable alert messages.</p>
            <p>Alerts can be managed and displayed according to their severity levels. Severity levels are categorized as follows:</p>
            <li>Success</li>
            <li>Error</li>
            <li>Warning</li>
            <li>Information</li>
            <p>Alerts are as follows:</p>

            <div>
            <Alert severity={"success"} >This is a success alert !!</Alert>
            <Alert severity={"error"} >This is a error alert !!</Alert>
            <Alert severity={"warning"} >This is a warning alert !!</Alert>
            <Alert severity={"info"} >This is a info alert !!</Alert>
            </div>

            <p>How to use ?</p>

            <img style={{ height: "15rem", borderRadius: "2rem"}} src={media} alt="alerts"/>
            </div>
        </div>
    )
}