import { BadgeCard, Card, DismissCard, HorizontalCard, OverlayCard, ShadowCard, VerticalCard } from "../components/Card/Card"
import SideBar from "../sideBar"
import cards1 from "./media/cards1.png"
import cards2 from "./media/cards2.png"

export const CardDocs = () => {
    return(
        <div className="div-container">
            <SideBar />
            <div className="container">
            <h1>Cards</h1>

            <p>Cards are surfaces that display content and actions on a single topic.</p>

            <h2> Text only cards </h2>
            <div className="div-docs">
            <Card type="outlined" heading="Lorem" >Lorem ipsum dolor sit amet </Card>
            <Card type="elevated" heading="Lorem" >Lorem ipsum dolor sit amet </Card>
            <Card type="filled" heading="Lorem" >Lorem ipsum dolor sit amet </Card>
            </div>

            <h2> Cards with badges </h2>
            <BadgeCard badge="new" heading="Lorem" >Lorem ipsum dolor sit amet </BadgeCard>

            <h2> Cards with dismiss </h2>
            <div className="div-docs">
            <DismissCard type="outlined" heading="Lorem" >Lorem ipsum dolor sit amet </DismissCard>
            <DismissCard type="elevated" heading="Lorem" >Lorem ipsum dolor sit amet </DismissCard>
            <DismissCard type="filled" heading="Lorem" >Lorem ipsum dolor sit amet </DismissCard>
            </div>

            <p>How to use ?</p>
            <img src={cards1} alt="cards" className="card1-img" />

            <h2> Cards with text overlay </h2>
            <OverlayCard source="https://cdn270-genai.picsart.com/9af34552-8bf8-4471-b959-672946e8d4c2/455021166024201.jpg" name="overLay" overlayText="Lorem" >Lorem ipsum dolor sit amet,</OverlayCard>

            <h2> Vertical cards </h2>
            <VerticalCard source="https://cdn270-genai.picsart.com/9af34552-8bf8-4471-b959-672946e8d4c2/455021166024201.jpg" name="card" >Lorem ipsum dolor sit amet, consectetur adipiscing elit </VerticalCard>

            <h2> Horizontal cards </h2>
            <HorizontalCard source="https://cdn270-genai.picsart.com/9af34552-8bf8-4471-b959-672946e8d4c2/455021166024201.jpg" name="card" >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua </HorizontalCard>

            <h2> Cards with shadow </h2>
            <ShadowCard source="https://cdn270-genai.picsart.com/9af34552-8bf8-4471-b959-672946e8d4c2/455021166024201.jpg" heading="Lorem" >Lorem ipsum dolor sit amet, consectetur adipiscing elit </ShadowCard>
            <br />
            <p>How to use?</p>
            <img src={cards2} alt="cards" style={{ height: "30rem", borderRadius: "2rem"}} />
            </div>
        </div>
    )
}