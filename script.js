const btn2 = document.getElementById("btn2");
const content2 = document.getElementById("content-2");

let first_content_username = document.getElementById("username-first-content");
let first_content_password = document.getElementById("password-first=content");
let second_content_username = document.getElementById("username-second-content");
let second_content_password = document.getElementById("password-second-content");
let repeat_password = document.getElementById("repeat-password");
let failed = document.getElementById("failed");

let showPassword_1 = document.getElementById("show-1");
let showPassword_2 = document.getElementById("show-2");
let showPassword_3 = document.getElementById("show-3");

const form_1 = document.getElementById("form_1");
const form_2 = document.getElementById("form_2");
let btn = document.getElementById("btn");

let username, password;
const btn_2 = document.getElementById("btn-2");


// event that occurs when content exchange + is clicked
function addBtn3() {
    btn2.classList.add("btn3")
    setTimeout(() => {
        btn2.classList.remove("btn3")
    }, 500);
}

// "+" and "x" signs
btn2.addEventListener("click", () => {
    let contentBtn2 = btn2.textContent;

    if (contentBtn2 == "+") {
        addBtn3()
        btn2.style.fontSize = "1.8rem"
        setTimeout(() => {
            content2.style.visibility = "visible"
            content2.style.background = "red"
            btn2.classList.add("default")
        }, 500)
        btn2.textContent = "x";
    } else {
        addBtn3()
        btn2.classList.remove("default")
        setTimeout(() => {
            content2.style.visibility = "hidden"
            content2.style.background = "#fff"
            btn2.style.fontSize = "3rem"
        }, 500)
        btn2.textContent = "+"
    }
})

// When you click showPassword_1, if the input type is password, it will change to text, if it is text, it will change to password
showPassword_1.addEventListener("click", () => {
    if (first_content_password.type === "password" && first_content_password.value) {
        first_content_password.type = "text"
        showPassword_1.textContent = "Hide password"
    } else {
        first_content_password.type = "password"
        showPassword_1.textContent = "Show password"
    }
})

// When you click showPassword_2, if the input type is password, it will change to text, if it is text, it will change to password
showPassword_2.addEventListener("click", () => {
    if (second_content_password.type === "password" && second_content_password.value) {
        second_content_password.type = "text"
        showPassword_2.textContent = "Hide password"
    } else {
        second_content_password.type = "password"
        showPassword_2.textContent = "Show password"
    }
})

// When you click showPassword_3, if the input type is password, it will change to text, if it is text, it will change to password
showPassword_3.addEventListener("click", () => {
    if (repeat_password.type === "password" && repeat_password.value) {
        repeat_password.type = "text"
        showPassword_3.textContent = "Hide password"
    } else {
        repeat_password.type = "password"
        showPassword_3.textContent = "Show password"
    }
})

// applied after registration
form_1.addEventListener("submit", registered = (e) => {
    e.preventDefault();
    if (first_content_password.value == password && first_content_username.value == username) {
        btn.style.backgroundColor = "green"
        btn.style.color = "#fff"
        btn.textContent = "✓"
        form_1.removeEventListener("submit", register);
        btn.type = "button"
    } else if (!first_content_password.value.length || !first_content_username.value.length) {
        btn.textContent = "register";
        btn.style.background = "#fff";
        btn.style.color = "red"
    } else if (first_content_password.value != password && first_content_username.value != username) {
        btn.textContent = "username and password is error"
        btn.style.background = "#fff";
        btn.style.color = "red"
    } else if (first_content_password.value != password) {
        btn.textContent = "password is error"
        btn.style.background = "#fff";
        btn.style.color = "red"
    } else if (first_content_username.value != username) {
        btn.textContent = "username is error"
        btn.style.background = "#fff";
        btn.style.color = "red"
    }
    btn.style.width = "17rem"
})


// Sign up
form_2.addEventListener("submit", (e) => {
    e.preventDefault();
    const test = second_content_password.value == repeat_password.value && repeat_password.value.length && second_content_password.value && second_content_username.value.length &&
        repeat_password.value.length > 10 && second_content_password.value.length > 10;
    if (test) {
        btn_2.textContent = "passed the register"
        username = second_content_username.value;
        password = second_content_password.value;
        btn_2.textContent = "registered"
        btn_2.style.backgroundColor = "green"
        btn_2.style.color = "#fff"
    } else if (second_content_password.value.length < 10 || repeat_password.value.length < 10) {
        btn_2.textContent = "This is a simple code, enter a more difficult code"
        btn_2.style.backgroundColor = "#fff"
        btn_2.style.color = "red"
    } else if (second_content_password.value != repeat_password.value) {
        btn_2.textContent = "The re-entered password is incorrect"
        btn_2.style.backgroundColor = "#fff"
        btn_2.style.color = "red"
    }
})
