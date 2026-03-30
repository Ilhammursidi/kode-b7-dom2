const input = document.querySelector("form input:nth-child(1)")

const closed = document.querySelector("form img:nth-child(2)")
closed.addEventListener("click", function () {
    console.log("mata ditekan")
    input.setAttribute("type","password");
    closed.classList.add("hidden");
    openEye.classList.remove("hidden");
})

const openEye = document.querySelector("form img:nth-child(3)");
openEye.addEventListener("click", function () {
    console.log("mata ditekan")
    input.setAttribute("type","text");
    closed.classList.remove("hidden");
    openEye.classList.add("hidden");
})