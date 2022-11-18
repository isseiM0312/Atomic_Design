import React from "react";
import image from './q.jpg'

const Img = ({
    width = 20,
    ...props})=> <img src={image} {...props} />

export default Img;