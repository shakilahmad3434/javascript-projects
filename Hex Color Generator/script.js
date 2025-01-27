// get a reference
const dispalyHexCode = document.querySelector(".hex-code");
const hexCodeGenerator = () => {
    const hexCodeChars = "0123456789abcdef";
    let hexColorCode = ""
    for(let i = 0; i < 6; i++){
        let randomValue = Math.floor(Math.random() * hexCodeChars.length);
       hexColorCode += hexCodeChars[randomValue];
    }
    dispalyHexCode.textContent = `#${hexColorCode}`;
    document.body.style.backgroundColor = `#${hexColorCode}`
}
hexCodeGenerator()
document.querySelector(".hex-generator").addEventListener("click", hexCodeGenerator);

dispalyHexCode.addEventListener("click", function(){
    navigator.clipboard.writeText(this.textContent);
    
})