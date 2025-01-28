    // Showing input slider value 
    const inputSlider = document.querySelector("#myRange");
    const sliderValue = document.querySelector(".PB-range-slidervalue");
    sliderValue.textContent = inputSlider.value;

    inputSlider.addEventListener('input', ()=>{
    sliderValue.textContent = inputSlider.value;
    });
    
    const simplePassword = (length) => {
        const allChars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789~!@#$%^&*";
        let randomPass = "";
        let i = 1;
        while (i <= length) {
            let random = Math.floor(Math.random() * allChars.length);
            randomPass += allChars[random];
            i++
        }
        return randomPass;

    }

    document.querySelector(".button").addEventListener("click", () => {
        document.querySelector(".userInput").value = simplePassword(parseInt(inputSlider.value));
    })

    let pass = simplePassword(parseInt(inputSlider.value));
    document.querySelector(".userInput").value = pass;

    document.querySelector(".copyText").addEventListener("click", () => {
        let copyText = document.querySelector(".userInput");
        copyText.select();
        navigator.clipboard.writeText(copyText.value);
        document.querySelector(".displayCopyText").style.display = "block";
        document.querySelector(".displayCopyText").textContent = "Copied: "+copyText.value;
        setTimeout(() => {
            document.querySelector(".displayCopyText").textContent = "";
            document.querySelector(".displayCopyText").style.display = "none";
        }, 2000);
    })