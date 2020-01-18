// Skill Bars Section in Resume Project
var progressBars = document.querySelectorAll(".skill-progress > div");
var skillsContainer = document.getElementById('skills-container') ;
window.addEventListener('scroll', checkScroll);
var animateSkill = false;

function initialseBar() {
    for(let bar of progressBars){
        bar.style.width = 0 + '%';
    }  
}
initialseBar();
function skillBars(){
    for(let bar of progressBars){
        let targetWidth = bar.getAttribute('data-bar-width');
        let currWidth = 0 ;
        let interval = setInterval(function(){
            if (targetWidth < currWidth){
                clearInterval(interval);
                return;
            }
            currWidth++;
            bar.style.width = currWidth +"%";
        }, 5);
    }
}
function checkScroll() {
    var checkCoordination = skillsContainer.getBoundingClientRect();
    if (!animateSkill && checkCoordination.top < window.innerHeight){
        console.log("Skill demo increase");
        animateSkill = true;
        skillBars();
    }
    else if (checkCoordination.top > window.innerHeight){
        initialseBar();
        animateSkill = false;
    }
}