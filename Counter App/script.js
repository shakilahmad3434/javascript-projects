const count = document.getElementById("count")
const incrementBtn = document.getElementById("increment")
const decrementBtn = document.getElementById("decrement")
const resetBtn = document.getElementById("reset")
const setValue = document.getElementById("setValue")
const setButton = document.getElementById("setButton")

let currentCount = 0

function updateCount() {
  count.textContent = currentCount
}

incrementBtn.addEventListener("click", () => {
  currentCount++
  updateCount()
})

decrementBtn.addEventListener("click", () => {
  currentCount--
  updateCount()
})

resetBtn.addEventListener("click", () => {
  currentCount = 0
  updateCount()
})

setButton.addEventListener("click", () => {
  const newValue = Number.parseInt(setValue.value)
  if (!isNaN(newValue)) {
    currentCount = newValue
    updateCount()
    setValue.value = ""
  }
})

// Add keyboard support
document.addEventListener("keydown", (event) => {
  if (event.key === "ArrowUp") {
    currentCount++
    updateCount()
  } else if (event.key === "ArrowDown") {
    currentCount--
    updateCount()
  }
})

