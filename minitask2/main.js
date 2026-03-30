const btn = document.querySelector("div button:nth-child(1)")

const burger = document.querySelector("div div:nth-child(2)")

btn.addEventListener("click", function() {
    burger.classList.toggle("hidden")
})
