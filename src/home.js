import { Link } from "react-router-dom"
import "./home.css"

export const Home = () => {
    return(
        <div className="home-main">
            <p className="home-h1">Drop 💧 UI</p>
            <h2>A CSS Component Library</h2>
            <h3>Let’s dive into the exciting features of this new CSS library.</h3>
            <br />
            <Link className="home-btn" to ="/components">Get Started</Link>
        </div>
    )
}