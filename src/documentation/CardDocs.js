import { BadgeCard, Card, DismissCard, HorizontalCard, OverlayCard, ShadowCard, VerticalCard } from "../components/Card/Card"
import SideBar from "../sideBar"

export const CardDocs = () => {
    return(
        <div className="div-container">
            <SideBar />
            <div className="container">
            <h1>Cards</h1>

            <p>Cards are surfaces that display content and actions on a single topic.</p>

            <h2> Text only cards </h2>
            <Card type="" heading="Lorem" >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</Card>

            <h2> Cards with badges </h2>
            <BadgeCard badge="new" heading="Lorem" >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua </BadgeCard>

            <h2> Cards with dismiss </h2>
            <DismissCard type="outlined" heading="lorem" >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</DismissCard>

            <h2> Cards with text overlay </h2>
            <OverlayCard type="" source="" name="overLay" overlayText="Lorem"  ></OverlayCard>

            <h2> Vertical cards </h2>
            <VerticalCard source="" name="" >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua </VerticalCard>

            <h2> Horizontal cards </h2>
            <HorizontalCard source="" name="">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</HorizontalCard>

            <h2> Cards with shadow </h2>
            <ShadowCard source="" heading="" >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</ShadowCard>
            
            </div>
        </div>
    )
}