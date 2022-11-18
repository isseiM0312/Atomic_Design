import React from "react";
import HoverTipInteraction ,{Tip,Marker}from ".";
import { withStyle } from "../../Utils/decorators";

export default {
    title:'atoms/hovertip',
    component:HoverTipInteraction
}

export const plshover = () =>{ 
    return withStyle({display: 'inline-block',margin:'50px'})(
    <HoverTipInteraction>
        <Marker><span>ホバーしてね</span></Marker>
        <Tip><span>チップだよ</span></Tip>
    </HoverTipInteraction>
    
);}