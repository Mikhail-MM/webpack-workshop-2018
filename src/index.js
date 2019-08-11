import nav from "./nav";
import { footer } from "./footer";
import makeButton from "./button";
import { makeColorStyle } from "./button-styles";
import makeImage from "./make-image";
import base64 from "./bears.jpg" // url-loader converts it

const image = makeImage(base64)
console.log(image)


const button = makeButton("Yay! A Button!");
button.style = makeColorStyle("cyan");
document.body.appendChild(button);
document.body.appendChild(footer);
document.body.appendChild(image)