document.addEventListener('DOMContentLoaded', () => {
    const counterDisplay = document.getElementById('counter');
    const decreaseBtn = document.querySelector('.decrease');
    const increaseBtn = document.querySelector('.increase');
    const resetBtn = document.querySelector('.reset');

    let count = 0;

    function updateDisplay() {
        counterDisplay.textContent = count;
        // Add animation class
        counterDisplay.classList.add('animate');
        // Remove animation class after animation completes
        setTimeout(() => {
            counterDisplay.classList.remove('animate');
        }, 300);
    }

    decreaseBtn.addEventListener('click', () => {
        count--;
        updateDisplay();
    });

    increaseBtn.addEventListener('click', () => {
        count++;
        updateDisplay();
    });

    resetBtn.addEventListener('click', () => {
        count = 0;
        updateDisplay();
    });
});