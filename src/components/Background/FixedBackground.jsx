import React from "react";
import './FixedBackground.scss';


export const FixedBackground = ({moonOpacity= 1})=>{
    return (
        <div className="fixed-background">
            <img src="/dreamJournalBG.png" alt="Sleeping city" className="city-background"/>
            <img src="/moon.png" alt="moon" className="moon" style={{opacity: moonOpacity}}/>
        </div>
    )
}