const displaySeconds = document.querySelector(".timer_sec"),
        displayMinutes = document.querySelector(".timer_min"),
        displayHours = document.querySelector(".timer_hour"),
        displayDays = document.querySelector(".timer_day");

        // Set your birthday here (MM-DD)
        const birthday = "04-18"; // Example: December 5th
        
        function countdownToBirthday() {
            const now = new Date();
            const currentYear = now.getFullYear();
            
            // Create birthday date for this year
            let nextBirthday = new Date(`${currentYear}-${birthday}`);
            
            // If birthday has already passed this year, use next year
            if (nextBirthday < now) {
                nextBirthday = new Date(`${currentYear + 1}-${birthday}`);
            }
            
            // Calculate time difference
            const timeDiff = nextBirthday - now;
            
            // Convert to days, hours, minutes, and seconds
            const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
            const hours = Math.floor((timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((timeDiff % (1000 * 60)) / 1000);
            
            // Display the countdown
            displayDays.textContent = days < 10 ? `0${days}` : days;
            displayHours.textContent = hours < 10 ? `0${hours}` : hours;
            displayMinutes.textContent = minutes < 10 ? `0${minutes}` : minutes;
            displaySeconds.textContent = seconds < 10 ? `0${seconds}` : seconds;
            
            // If the countdown is over, display Happy Birthday
            if (timeDiff < 0) {
                clearInterval(interval);
                timerElement.textContent = "🎉 Happy Birthday! 🎂";
            }
        }
        
        // Update the countdown every second
        const interval = setInterval(countdownToBirthday, 1000);