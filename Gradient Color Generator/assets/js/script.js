
let btn1 = document.getElementById("buttonOne");
let btn2 = document.getElementById("buttonTwo");
let copycode = document.querySelector(".copycode");
let hexcolor1 = "#051937";
let hexcolor2 = "#A8EB12";
let rgb1 = "rgb(5, 25, 55)";
let rgb2 = "rgb(168, 235, 18)";

btn1.addEventListener("click", function(){
	hexcolor1 = hexGenerator();
	btn1.innerText = hexcolor1;
    rgb1 = hex2RGB(hexcolor1);
	document.body.style.backgroundImage = `linear-gradient(to right top, ${hexcolor1}, ${hexcolor2})`;
    copycode.innerText = `background-image: linear-gradient(to right top, ${rgb1}, ${rgb2});`;
});

btn2.addEventListener("click", function(){
	hexcolor2 = hexGenerator();
    btn2.innerText = hexcolor2;
    rgb2 = hex2RGB(hexcolor2);
    document.body.style.backgroundImage = `linear-gradient(to right top, ${hexcolor1}, ${hexcolor2})`;
    copycode.innerText = `background-image: linear-gradient(to right top, ${rgb1}, ${rgb2});`;
});

// Hex code Value generator
const hexGenerator = () => {
	const chars = "0123456789abcdef";
    let colors = "#";
    for(let i = 0; i < 6; i++){
	  colors = colors + chars[Math.floor(Math.random()* 16)];
    }
    return colors;
}

// Hex to RGB value generator
const hex2RGB = (hex) => {
    const r = parseInt(hex.slice(1, 3), 16);
    const g = parseInt(hex.slice(3, 5), 16);
    const b = parseInt(hex.slice(5, 7), 16);
    
    // return {r, g, b} 
    return `rgb(${r}, ${g}, ${b})`;
}


copycode.addEventListener('click', function(){
    navigator.clipboard.writeText(copycode.innerText)
    .then(() => alert('Copied to clipboard: ' + copycode.innerText)) // Success message
});