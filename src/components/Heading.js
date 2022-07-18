import React from "react";
import { heading } from "../styles/homeStyles";
import { motion } from "framer-motion";
import "./HeadingStyle.css";
const Heading = () => <h1 style=
    {{
        height: "100%",
        width: "100%",
        backgroundColor: "black",
        display: "flex",
        justifyContent: "center",
        border: "solid 2px red",
        boxSizing: "border-box",
        
    }}>
    Games
</h1>;

export default Heading;