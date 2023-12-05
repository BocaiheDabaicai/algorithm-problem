// let myHeding = document.querySelector("h1")
// myHeding.textContent = "Hello World!"

// document.querySelector("html").addEventListener("click", () => {
//     alert("网页被点击啦！")
// })

let myImage = document.querySelector("img")

myImage.onclick = function () {
    let mySrc = myImage.getAttribute("src")
    if (mySrc === "images/dog.png") {
        myImage.setAttribute("src", "images/cat.png");
    } else {
        myImage.setAttribute("src", "images/dog.png");
    }
}

let myButton = document.querySelector("button")
let myHeading = document.querySelector("h1")

function setUserName() {
    let myName = prompt("请输入你的名字。")
    if (!myName) {
        setUserName();
    } else {
        localStorage.setItem("name", myName)
        myHeading.textContent = `Mozilla 太酷啦，${myName}`
    }
}

if (!localStorage.getItem("name")) {
    setUserName()
} else {
    let storedName = localStorage.getItem("name")
    myHeading.textContent = `Mozilla 太酷啦，${storedName}`
}

myButton.onclick = function () {
    setUserName();
}