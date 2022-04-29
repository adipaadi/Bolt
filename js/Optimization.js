let closeit = document.getElementById('closeSet')
let links = document.getElementById('links')
let linksbout = document.getElementById('linksbout')
let contain = document.getElementById('herotext')
let skillLink = document.getElementById('skillLink')
let navbout = document.getElementById('skillham')


closeit.addEventListener('click', function () {
        contain.classList.remove('animate-fadein')
})


function closeSkillNav() {
        if (skillLink.style.display === "block") {
          skillLink.style.display = "none";
        } else {
          skillLink.style.display = "block";
        }
}
      




