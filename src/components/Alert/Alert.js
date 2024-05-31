export const Alert = ({severity, children}) => {
    const alertType = (severity) => {
        switch(severity.toLowerCase()) {
            case "success":
                return {
                    icon: "",
                    class: "success"
                }
            case "error":
                return{
                    icon: "",
                    class: "error"
                }
            case "warning":
                return {
                    icon: "",
                    class: "warning"
                }
            case "info":
                return {
                    icon: "",
                    class: "info"
                }
            default:
                return null
        }
    }
    const alertData = alertType(severity)
    return(
        <div className={alertData.class} >
            <h2>{children}</h2>
        </div>
    )
}