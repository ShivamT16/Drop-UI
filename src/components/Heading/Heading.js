import "./Heading.css"
export const Heading = ({type,children}) => {
    return(
        <div className={type}>
            {children}
        </div>
    )
}