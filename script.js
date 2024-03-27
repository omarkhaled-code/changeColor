
let color = document.querySelector("#color")
color.oninput = () => {
    document.body.style.backgroundColor = color.value
}
