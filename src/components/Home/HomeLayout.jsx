import { MoonMessage } from "./MoonMessage/MoonMessage";
import { DreamyFacts } from "./Facts/DreamyFacts";
import { RemInfo } from "./REM/RemInfo";

export const HomeLayout = () => {
    return (
        <div className="home-layout">
            <div className="column column-left">
                <MoonMessage />
                <div style={{ height: "50px" }} />
                <DreamyFacts start={0} end={3} />
            </div>
            <div className="column column-center">
                <DreamyFacts start={3} end={8} />
            </div>
            <div className="column column-right">
                <RemInfo />
            </div>
        </div>
    )
}