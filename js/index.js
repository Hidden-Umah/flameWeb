const hamburer = document.getElementById("hamburger") ;
const loc = document.querySelector(".loc")

hamburer.addEventListener ('click', () => {
    loc.classList.toggle("active") ;
}) ;