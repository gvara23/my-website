
// TYPED TEXT

var typed = new Typed('.text1', {
    strings: ['frontend developer', 'web developer'],
    typeSpeed: 50,
    loop: true
});

// CIRCLE OF SKILLS

const circles = document.querySelectorAll('.circle');
circles.forEach(elem => {
    var dots = elem.getAttribute("data-dots");
    var marked = elem.getAttribute("data-percent");
    var percent = Math.floor(dots * marked / 100);
    var points = "";
    var rotate = 360 / dots;


    for (let i = 0; i < dots; i++) {
        points += `<div class="points" style="--i:${i}; --rot:${rotate}deg"></div>`
    }
    elem.innerHTML = points;

    const pointsMarked = elem.querySelectorAll('.points');
    for (let i = 0; i < percent; i++) {
        pointsMarked[i].classList.add('marked')
    }
})

// STICKY NAVBAR

const header = document.querySelector("header");
window.addEventListener("scroll",function(){
    header.classList.toggle("sticky",window.scrollY > 50)
})

var sidemenu = document.getElementById("sidemenu");
function openmenu(){
    sidemenu.style.right = "0";

}

function closemenu(){
    sidemenu.style.right = "-200px";

}