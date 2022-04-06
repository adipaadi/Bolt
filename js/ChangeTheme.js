//buttons
let dark = document.getElementById('dark')
let light = document.getElementById('light')
let neon = document.getElementById('neon')
let darkCon = document.getElementById('darkCon')
let lightCon = document.getElementById('lightCon')
let neonCon = document.getElementById('neonCon')

//settings
let change1 = document.getElementById('change1')
let change2 = document.getElementById('change2')
let change3 = document.getElementById('change3')
let settings = document.getElementById('settings')
let closeSet = document.getElementById('closeSet')

// about
let aboutpage = document.getElementById('aboutpage')
const aditext = document.getElementById("adi")
const introduct = document.getElementById("intro")
const fernobutts = document.querySelectorAll('.fernobutton')
let navybaka = document.getElementById('nav')
let pfp = document.getElementById('pfp')
let linky = document.getElementById('links')

//dom

light.addEventListener("click", function() {
    lightCon.classList.add('fa-check')
    darkCon.classList.remove('fa-check')
    neonCon.classList.remove('fa-check')

    change1.style.color = `rgb(182,95,207)`
    change1.style.textShadow = "0 0 10px transparent, 0 0 40px transparent, 0 0 80px transparent"
    change2.style.color = `rgb(182,95,207)`
    change2.style.textShadow = "0 0 10px transparent, 0 0 40px transparent, 0 0 80px transparent"
    change3.style.color = `rgb(182,95,207)`
    change3.style.textShadow = "0 0 10px transparent, 0 0 40px transparent, 0 0 80px transparent"


    introduct.style.color = `rgb(0,0,7)`
    aditext.style.color = `rgb(182,95,207)`

    introduct.style.textShadow = "0 0 10px transparent, 0 0 40px transparent, 0 0 80px transparent"
    aditext.style.textShadow = "0 0 10px transparent, 0 0 40px transparent, 0 0 80px transparent"

    
    navybaka.style.backgroundColor = `rgb(31,27,27)`
    linky.style.backgroundColor = `rgb(31,27,27)`
    navybaka.style.boxShadow = `0 0 10px transparent, 0 0 40px transparent, 0 0 80px transparent`

    pfp.style.boxShadow = `0 0 10px transparent, 0 0 40px transparent, 0 0 80px transparent`


    settings.style.backgroundImage = "url(./assets/settings-light.svg)"
    aboutpage.style.backgroundImage = "url(./assets/layer-light.svg)"
})

dark.addEventListener("click", function() {
    lightCon.classList.remove('fa-check')
    darkCon.classList.add('fa-check')
    neonCon.classList.remove('fa-check')

    change1.style.color = `rgb(239, 241, 243)`
    change1.style.textShadow = "0 0 10px transparent, 0 0 40px transparent, 0 0 80px transparent"
    change2.style.color = `rgb(239, 241, 243)`
    change2.style.textShadow = "0 0 10px transparent, 0 0 40px transparent, 0 0 80px transparent"
    change3.style.color = `rgb(239, 241, 243)`
    change3.style.textShadow = "0 0 10px transparent, 0 0 40px transparent, 0 0 80px transparent"

    introduct.style.color = `rgb(256,256,256)`
    introduct.style.textShadow = "0 0 10px transparent, 0 0 40px transparent, 0 0 80px transparent"
    aditext.style.textShadow = "0 0 10px transparent, 0 0 40px transparent, 0 0 80px transparent"
    aditext.style.color = `rgb(256,256,256)`

    navybaka.style.backgroundColor = `rgb(31,27,27)`
    linky.style.backgroundColor = `rgb(31,27,27)`
    navybaka.style.boxShadow = `0 0 10px transparent, 0 0 40px transparent, 0 0 80px transparent`

    pfp.style.boxShadow = `0 0 10px transparent, 0 0 40px transparent, 0 0 80px transparent`

    settings.style.backgroundImage = "url(./assets/wave-haikei.svg)"
    aboutpage.style.backgroundImage = "url(./assets/layer.svg)"


})

neon.addEventListener("click", function() {
    lightCon.classList.remove('fa-check')
    darkCon.classList.remove('fa-check')
    neonCon.classList.add('fa-check')

    change1.style.color = `rgb(239, 241, 243)`

    change2.style.color = `rgb(239, 241, 243)`

    change3.style.color = `rgb(239, 241, 243)`


    introduct.style.color = `rgb(256,256,256)`
    introduct.style.textShadow = "0 0 10px rgb(182,95,207), 0 0 40px rgb(182,95,207), 0 0 80px rgb(182,95,207)"

    aditext.style.color = `rgb(256,256,256)`
    aditext.style.textShadow = "0 0 10px rgb(182,95,207), 0 0 40px rgb(182,95,207), 0 0 80px rgb(182,95,207)"

    navybaka.style.backgroundColor = `rgb(0,0,0)`
    linky.style.backgroundColor = `rgb(0,0,0)`
    navybaka.style.boxShadow = `0 0 10px rgb(182,95,207), 0 0 40px rgb(182,95,207), 0 0 80px rgb(182,95,207)`



    settings.style.backgroundImage = "url(./assets/settings-neon.svg)"
    aboutpage.style.backgroundImage = "url(./assets/layer-neon.svg)"
})