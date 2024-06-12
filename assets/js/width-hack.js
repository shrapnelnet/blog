const resizeHeader = () => {
    const container = document.querySelector("main > .container")
    const containerWidth = container.scrollWidth
    const header = document.querySelector(".container.title-container")
    header.style.setProperty("min-width", `${containerWidth}px`)
}

window.addEventListener("resize", resizeHeader)
resizeHeader()
