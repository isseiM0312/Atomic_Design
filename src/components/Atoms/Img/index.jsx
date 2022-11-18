import React from "react";
import image from './q.jpg'

const Img = ({
    ...props})=> <img src={image} {...props} />

export default Img;