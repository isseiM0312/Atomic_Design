import React from "react";
import Balloon from "./index.jsx";
import "./index.jsx";
import { withStyle } from "../../Utils/decorators.js";
import{ withNotes }from '@storybook/addon-notes'
import { addDecorator } from "@storybook/react";

const Template = (args) => <Balloon {...args} />;


export default {
  title: 'Atoms/Balloon',
  component: Balloon,
};

const note = withNotes('読みやすさを考慮すると１０文字までが適当。１１文字以上を表示したい場合は別のデザインを考える');

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
