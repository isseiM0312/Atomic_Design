import React from "react";
import Balloon from "./index.jsx";
import "./index.jsx";

const Template = (args) => <Balloon {...args} />;


export default {
  title: 'Atoms/Balloon',
  component: Balloon,
};

export const twoBalloon = () => <Balloon>次へ</Balloon>;
export const fourBalloon = () => <Balloon>jjjj</Balloon>
export const px200Balloon = () => <Balloon style = {
    {
    position: 'absolute',
    top:'200px',
    left:'200px'
}}>
    200px
</Balloon>