
let passwordEye_1 = document.querySelector(".password-eye-1")
let passwordEye_2 = document.querySelector(".password-eye-2")
let passwordInput_1 = document.getElementById("password-1")
let passwordInput_2 = document.getElementById("password-2")

function passCheck(element) {
    if (element.type === "password") {
        element.type = "text"
    }
    else {
        element.type = "password"
    }
}

passwordEye_1.addEventListener("click", () => {
    passwordEye_1.classList.toggle('passcheck')
    passCheck(passwordInput_1)
})

passwordEye_2.addEventListener("click", () => {
    passwordEye_2.classList.toggle('passcheck')
    passCheck(passwordInput_2)
})
