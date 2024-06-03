import "./Image.css"

export const Image = ({source, name, type}) => {
    return(
        <img src={source} alt={name} className={type}/>
    )
}