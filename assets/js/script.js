let typed = new Typed(".auto-type", {
    strings: ["Designer", "Developer", "Freelancer", "Computer Engineer" , "Master's Degree Student" , "Kinda Ghanem"],
    typeSpeed: 200,
    backSpeed: 200,
    looped: true,
});
function changeBg() {
    var navbar = document.querySelector('.navbar');
    var scrollValue = window.scrollY;
    if (scrollValue > 150) {
        navbar.classList.add('bg-navbar-scroll');
    }
    else {
        navbar.classList.remove('bg-navbar-scroll');

    }
}
window.addEventListener('scroll', changeBg);


let nums = document.querySelectorAll(".nums .num")
let scrollNum = document.querySelector(".scroll-num")
let started = false;



let animateSkill = document.querySelector(".animate-skill")
let skillPer = document.querySelectorAll(".skill-per")


window.onscroll = function () {
    if (window.scrollY >= scrollNum.offsetTop) {
        if (!started) {
            nums.forEach((num) => startCount(num));
        }
        started = true
    }
    if (window.scrollY >= animateSkill.offsetTop){
        skillPer.forEach((skillPer) => {
            skillPer.style.width = skillPer.dataset.width
        })
        
    }
}

function startCount(el) {
    let goal = el.dataset.goal;
    let count = setInterval(() => {
        el.textContent++;
        if (el.textContent == goal) {
            clearInterval(count)
        }

    }, 100)

}




