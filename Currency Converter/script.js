const currencyInput = document.querySelector("#currency-input");
        const fromConverter = document.querySelector(".from-converter");
        const toConverter = document.querySelector(".to-converter");
        const displayPrice = document.querySelector(".display-price");
        const currencyBtn = document.querySelector(".currency_btn");

        const currencyConverter = () => {
            const fromCurrency = fromConverter.value;
            const toCurrency = toConverter.value;
            if(currencyInput.value < 0){
                alert("Please write positive number");
                return false;
            }
            fetch(`https://api.exchangerate-api.com/v4/latest/${fromCurrency}`)
            .then(res => res.json())
            .then(data => {
                let currency = data.rates[toCurrency];
                displayPrice.textContent = `${currencyInput.value} ${fromCurrency} = ${(currency*currencyInput.value).toFixed(2)} ${toCurrency}`;
                
            })
        }
        
        currencyBtn.addEventListener("click", currencyConverter);