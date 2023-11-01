const horizonter = document.querySelector("hr")
console.log(horizonter)
const navDiv = document.querySelector(".navList")
const navigation = document.querySelector(".navigation")

let click = false
horizonter.addEventListener("click", function () {
    if (click === true) {
        navDiv.style.display = "none"
        navigation.style.height = "70px"
        click = false;

    }
    else {
        navDiv.style.display = "block"
        navigation.style.height = "200px"
        click = true;


    }
})




