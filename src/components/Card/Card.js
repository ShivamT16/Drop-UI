import { useState } from "react"

export const BadgeCard = ({badge, heading, children}) => {
    return(
        <div>
            <div>
                {heading} <span> {badge}</span>
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
            <div className="" >
                <h1> {heading} </h1>
                <h4 onClick={() => setShowCard(item => !item)} > X </h4>
            </div>
            <p> {children} </p>
        </div>
    )
}

export const OverlayCard = ({source, name, overlayText, type, children}) => {
    return(
        <div className={type}>
            <div>
                <img src={source} alt={name} />
                <h1> {overlayText} </h1>
            </div>
            <p> {children} </p>
        </div>
    )
}

export const VerticalCard = ({source, name, children}) => {
    return(
        <div className="">

            <img src={source} alt={name} />
                <p>{children}</p>


        </div>
    )
}

export const HorizontalCard = ({source, name, children}) => {
    return(
        <div className="">

            <img src={source} alt={name} />
                <p>{children}</p>
        </div>
    )
}

export const ShadowCard = ({heading, children, source}) => {
    return(
        <div>
            <img src={source} alt={heading} />
            <h1> {heading} </h1>
            <p>{children}</p>
        </div>
    )
}