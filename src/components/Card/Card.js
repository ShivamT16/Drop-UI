import { useState } from "react"
import ClearOutlinedIcon from '@mui/icons-material/ClearOutlined';
import "./Card.css"

export const BadgeCard = ({badge, heading, children}) => {
    return(
        <div className="b-card" >
            <div className="b-heading">
                <p>{heading}</p> <span> {badge}</span>
            </div>
            {children}
        </div>
    )
}

export const Card = ({children, type, heading}) => {
    return(
        <div className={type} >
            <h1>{heading}</h1>
            <p> {children} </p>
        </div>
    )
}

export const DismissCard = ({heading, children, type}) => {
    const [showCard, setShowCard] = useState(true)
    return(
        <div className={type} style={{display: showCard ? "visible" : "none" }} >
            <div className="dismiss-icon" >
                <h1> {heading} </h1>
                <ClearOutlinedIcon onClick={() => setShowCard(item => !item)} />
            </div>
            <p> {children} </p>
        </div>
    )
}

export const OverlayCard = ({source, name, overlayText, children}) => {
    return(
        <div>
            <div className="overlay-card"> 
                <img src={source} alt={name} />
                <div className="overlay">
                <h1> {overlayText} </h1>
                <p> {children} </p>
                </div>
            </div>
        </div>
    )
}

export const VerticalCard = ({source, name, children}) => {
    return(
        <div className="v-card">
            <img src={source} alt={name} />
                <p>{children}</p>
        </div>
    )
}

export const HorizontalCard = ({source, name, children}) => {
    return(
        <div className="h-card">
            <img src={source} alt={name} />
                <p>{children}</p>
        </div>
    )
}

export const ShadowCard = ({heading, children, source}) => {
    return(
        <div className="shadow-card">
            <img src={source} alt={heading} />
            <h1> {heading} </h1>
            <p>{children}</p>
        </div>
    )
}