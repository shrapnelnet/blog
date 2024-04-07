// this puts you back on the page you came from
const referrer = document.referrer
let anchor = document.getElementById("generate-path")
if (referrer.includes("blog.shr4pnel.com") || referrer.includes("localhost:4000")) {
    anchor.href = referrer
} else {
    anchor.href = "/"
}