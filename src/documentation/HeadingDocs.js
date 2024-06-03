import { Heading } from "../components/Heading/Heading"
import SideBar from "../sideBar"
import heading from "./media/heading.png"

export const HeadingDocs = () => {
    return(
        <div className="div-container">
            <SideBar />
            <div className="container">
            <h1>Heading</h1>
            <p>Headings are essential to elevate the typography and hierarchy of your web application. With a wide range of heading styles, sizes, and variations, it simplifies the creation of clear and visually engaging content structures.</p>

            <h1>Drop UI heading</h1>
            <h2>Drop UI heading</h2>
            <h3>Drop UI heading</h3>
            <h4>Drop UI heading</h4>
            <h5>Drop UI heading</h5>
            <h6>Drop UI heading</h6>
            <Heading type="italic" >Drop UI heading</Heading>
            <br />
            <p>How to use ?</p>

            <img style={{ height: "25rem", borderRadius: "2rem"}} src={heading} alt="avatar"/>

         </div>
        </div>
    )
}