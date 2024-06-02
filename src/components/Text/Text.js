export const Text = ({type, label}) => {
    return(
        <textarea className={type} placeholder={label}/>
    )
}