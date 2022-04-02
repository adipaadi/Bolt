//butts
const hindiButt = document.getElementById("hindi");
const english = document.getElementById("english");
const japanese = document.getElementById("japanese");
const japaCon = document.getElementById("japaCon");
const hindiCon = document.getElementById("hindiCon");
const engCon = document.getElementById("engCon");


//nav
const navlogo = document.getElementById("bolt");
const skills = document.getElementById("skills");
const proj = document.getElementById("proj");
const contact = document.getElementById("contact");
const about = document.getElementById("about");

// about me
const adi = document.getElementById("adi")
const intro = document.getElementById("intro")
const conme = document.getElementById("conme")

hindiButt.addEventListener("click", function () {
    engCon.classList.remove('fa-check')
    japaCon.classList.remove('fa-check')
    hindiCon.classList.add('fa-check')

    navlogo.innerHTML = "बोल्ट"
    skills.innerHTML = "कौशल"
    proj.innerHTML = "प्रोजैक्ट"
    contact.innerHTML = "संपर्क"
    conme.innerHTML = "मुझसे संपर्क करो"
    about.innerHTML = "<a>मेरे बारे मेँ</a>"
    adi.innerHTML = "मैं हूं <span>आदित्य</span> परमार"
    intro.innerHTML = "मैं भारत में रहने वाला एक भावुक 14 वर्षीय डेवलपर हूं। मैं फ्रंट-एंड वेब डेवलपमेंट, िडस्कोर्द् बॉट डेवलपमेंट और पायथन में विशेषज्ञ हूं।"
})

english.addEventListener("click", function () {
    engCon.classList.add('fa-check')
    japaCon.classList.remove('fa-check')
    hindiCon.classList.remove('fa-check')

    navlogo.innerHTML = "BOLT"
    skills.innerHTML = "SKILLS"
    proj.innerHTML = "PROJECTS"
    contact.innerHTML = "CONTACT"
    conme.innerHTML = "Contact Me"
    about.innerHTML = "<a>ABOUT ME</a>"
    adi.innerHTML = `I'm <span class = "select-silver">Aditya</span> Parmar`
    intro.innerHTML = "A passionate 14 year old developer from India. I specialize in front-end web development, discord bot development and python scripts."
})

japanese.addEventListener("click", function () {
    engCon.classList.remove('fa-check')
    japaCon.classList.add('fa-check')
    hindiCon.classList.remove('fa-check')

    navlogo.innerHTML = "ボルト"
    skills.innerHTML = "スキル"
    proj.innerHTML = "プロジェクト"
    contact.innerHTML = "コンタック"
    conme.innerHTML = "コンタクト・ミー"
    about.innerHTML = "<a>アバウト・ミー</a>"
    adi.innerHTML = `<span class = "select-silver">アディティア</span>ーです`
    intro.innerHTML = "インド出身の情熱的な14歳の開発者。私はフロントエンドの Web 開発、不和ボット開発、Python スクリプトを専門としています。"
})