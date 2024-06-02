import { Image } from "../components/Image/Image"
import SideBar from "../sideBar"

export const ImageDocs = () => {
    return(
        <div className="div-container">
            <SideBar />
            <div className="container">
            <h1>Image</h1>

            <h2>Responsive Image</h2>
            <Image source="" name="drop" type="responsive" />
            
            <h2>Round Image</h2>
            <Image source="" name="drop" type="round" />
         </div>
        </div>
    )
}