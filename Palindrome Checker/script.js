const palindromeInput = document.querySelector(".palindrome_input");
      document
        .querySelector(".palindrome_btn")
        .addEventListener("click", () => {
          const palindromeValue = palindromeInput.value.trim();
          if (!palindromeValue) {
            alert("Please enter a text or number to check!");
            return;
          }
          const cleanedInput = palindromeValue
            .replace(/[^a-zA-Z0-9]/g, "")
            .toLowerCase();
          const reverseInput = cleanedInput.split("").reverse().join("");

          if (reverseInput === palindromeValue) {
            document.querySelector(
              ".display_status"
            ).innerHTML = `Yes, <span class="palindrome_words">'${palindromeValue}'</span> is a palindrome!`;
            document.querySelector(".display_status").classList.add("visible");
            document.querySelector(".palindrome_words").style.color = "green";
          } else {
            document.querySelector(
              ".display_status"
            ).innerHTML = `No, <span class="palindrome_words">'${palindromeValue}'</span> isn't a palindrome!`;
            document.querySelector(".display_status").classList.add("visible");
            document.querySelector(".palindrome_words").style.color = "red";
          }

          palindromeInput.value = "";
        });