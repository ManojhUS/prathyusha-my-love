let current = 0;
const sections = document.querySelectorAll(".section");

function nextSection(){
    sections[current].classList.remove("active");
    current++;
    sections[current].classList.add("active");
}

/* YES button popup */
function sayYes(){
    alert("You made a man the happiest alive ❤️");
}

/* NO button run away */
const noBtn = document.getElementById("noBtn");

if(noBtn){
    noBtn.addEventListener("mouseover", function(){
        const x = Math.random() * 300 - 150;
        const y = Math.random() * 200 - 100;
        noBtn.style.transform = `translate(${x}px, ${y}px)`;
    });
}
