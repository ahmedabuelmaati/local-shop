let lis = document.querySelectorAll("li")
console.log(lis)
let exp = document.querySelector(".exp")

if (window.localStorage.color) {
    exp.style.backgroundColor = window.localStorage.color
    lis.forEach(li => {
        li.classList.remove("active")
    })
    document.querySelector(`[data-color=${window.localStorage.color}]`).classList.add("active")

} else {
    console.log("sorry")
}
lis.forEach(li => {

    li.addEventListener("click", (e) => {
        lis.forEach(l => {
            l.classList.remove("active")

        })

        e.currentTarget.classList.add("active")
        window.localStorage.color = e.currentTarget.dataset.color
        exp.style.backgroundColor = window.localStorage.color
    })
})
// window.localStorage.clear()







