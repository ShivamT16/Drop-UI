import { Image } from "../components/Image/Image"
import SideBar from "../sideBar"
import image from "./media/image.png"

export const ImageDocs = () => {
    return(
        <div className="div-container">
            <SideBar />
            <div className="container">
            <h1>Image</h1>

            <p>The Image component offers seamless integration of visuals into your web projects.</p>
            <p>The two primary types of images are 'responsive' and 'rounded responsive' images.</p>

            <h2>Responsive Image</h2>
            <Image source="https://cdn270-genai.picsart.com/5975a049-83b0-4d8e-8494-ca2bcf5d0762/455021312031201.jpg" name="drop" type="responsive" />
            
            <h2>Round Image</h2>
            <Image source="https://cdn270-genai.picsart.com/5975a049-83b0-4d8e-8494-ca2bcf5d0762/455021312031201.jpg" name="drop" type="round" />

            <p>How to use?</p>

            <img style={{ height: "15rem", borderRadius: "2rem"}} src={image} alt="avatar"/>

         </div>
        </div>
    )
}