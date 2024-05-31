import { Link } from "react-router-dom"

export const Home = () => {
    return(
        <div>
            <h2>Drop UI</h2>
            <h3>A CSS Component Library</h3>
            <p>Let’s delve into the exciting features of your new CSS library.</p>
            <Link to ="/components">Get Started</Link>
        </div>
    )
}