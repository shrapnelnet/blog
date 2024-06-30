const resizeHeader = () => {
    const container = document.querySelector("main > .container")
    const containerWidth = container.scrollWidth
    const header = document.querySelector(".container.title-container")
    header.style.minWidth = `${containerWidth}px`
}

window.addEventListener("resize", resizeHeader)
resizeHeader()
