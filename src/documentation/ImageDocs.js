import { Image } from "../components/Image/Image"

export const ImageDocs = () => {
    return(
        <div>
            <h1>Image</h1>
            
            <h2>Responsive Image</h2>
            <Image source="" name="drop" type="responsive" />
            
            <h2>Round Image</h2>
            <Image source="" name="drop" type="round" />
            
        </div>
    )
}