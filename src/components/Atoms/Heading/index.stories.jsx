import React from "react";
import{ Heading , HeadingUnderlined}from ".";

export default {
    title: 'atoms/Header',
    component:Heading
}

export const nounderlined = () => <Heading level={4} visualLevel={6}>ddd</Heading>
export const underlined = () => <HeadingUnderlined level={4} visualLevel={6} >sss</HeadingUnderlined>