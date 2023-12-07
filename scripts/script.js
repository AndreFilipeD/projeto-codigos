var cleaner
var actual = "HTML5"
var storage

function clean(){
    cleaner = window.document.querySelector('.a')
    window.document.querySelector("#html5").style="none"
    cleaner.style='display: none'
    cleaner = window.document.querySelector('.b')
    window.document.querySelector("#css3").style="none"
    cleaner.style='display: none'
    cleaner = window.document.querySelector('.c')
    window.document.querySelector("#javas").style="none"
    cleaner.style='display: none'
    cleaner = window.document.querySelector('.d')
    window.document.querySelector("#htcs").style="none"
    cleaner.style='display: none'
    cleaner = window.document.querySelector('.e')
    window.document.querySelector("#htjs").style="none"
    cleaner.style='display: none'
    cleaner = window.document.querySelector('.f')
    window.document.querySelector("#csjs").style="none"
    cleaner.style='display: none'
    cleaner = window.document.querySelector('.g')
    window.document.querySelector("#notas").style="none"
    cleaner.style='display: none'
}

function menu(c){
    clean()
    switch(c){
        case 1:// MOSTRAR HTML5
            cleaner = window.document.querySelector('.a')//1
            cleaner.style='display: flex'
            actual = "HTML5"
            window.document.querySelector("#showContent").style="background-color: #ff4400;"
            window.document.querySelector("#html5").style="box-shadow:0px 0px 30px #ff4400;"
            storage = window.document.getElementsByClassName("ithtml")
            break;
        case 2:// MOSTRAR CSS3
            cleaner = window.document.querySelector('.b')//2
            cleaner.style='display: flex'
            actual = "CSS3"
            window.document.querySelector("#showContent").style="background-color: #0087e0;"
            window.document.querySelector("#css3").style="box-shadow:0px 0px 30px #0087e0;"
            storage = window.document.getElementsByClassName("itcss3")
            break;
        case 3:// MOSTRAR JAVASCRIPT
            cleaner = window.document.querySelector('.c')//3
            cleaner.style='display: flex'
            actual = "JAVASCRIPT"
            window.document.querySelector("#showContent").style="background-color: #f0bc11;"
            window.document.querySelector("#javas").style="box-shadow:0px 0px 30px #f0bc11;"
            storage = window.document.getElementsByClassName("itjs")
            break;
        case 4:// MOSTRAR HTML5 + CSS3
            cleaner = window.document.querySelector('.d')
            cleaner.style='display: flex'
            actual = "HTML5 + CSS3"
            window.document.querySelector("#showContent").style="background-color: #19c994;"
            window.document.querySelector("#htcs").style="box-shadow:0px 0px 30px #19c994;"
            storage = window.document.getElementsByClassName("ithtmlcss3")
            break;
        case 5:// MOSTRAR HTML5 + JAVASCRIPT
            cleaner = window.document.querySelector('.e')//5
            cleaner.style='display: flex'
            actual = "HTML5 + JAVASCRIPT"
            window.document.querySelector("#showContent").style="background-color: #ff9100;"
            window.document.querySelector("#htjs").style="box-shadow:0px 0px 30px #ff9100;"
            storage = window.document.getElementsByClassName("ithtmljs")
            break;
        case 6:// MOSTRAR CSS3 + JAVASCRIPT
            cleaner = window.document.querySelector('.f')//6
            cleaner.style='display: flex'
            actual = "CSS3 + JAVASCRIPT"
            window.document.querySelector("#showContent").style="background-color: #cc00ff;"
            window.document.querySelector("#csjs").style="box-shadow:0px 0px 30px #cc00ff;"
            storage = window.document.getElementsByClassName("itcss3js")
            break;
        case 7:// MOSTRAR NOTAS
            cleaner = window.document.querySelector('.g')//6
            cleaner.style='display: flex'
            actual = "NOTAS"
            window.document.querySelector("#showContent").style="background-color: #464646;"
            window.document.querySelector("#notas").style="box-shadow:0px 0px 30px #464646;"
            storage = window.document.getElementsByClassName("itnotas")
            break;
    }applyIndex()
}

function applyIndex(){
    window.scrollTo(0,0)
    window.document.querySelector("#showContent").innerHTML=actual
    for(c in storage){
        storage[c].setAttribute('onclick',`uploadName("${storage[c].innerHTML}","${c}")`)
        storage[c].style=""
    }
}

function uploadName(nameIs, meAre){
    window.scrollTo(0,0)
    for(c in storage){
        storage[c].style=""
    }
    window.document.querySelector("#showContent").innerHTML=actual+" > "+nameIs
    storage[meAre].style="background-color: white;color: black;outline: 1px groove white; border-top-left-radius: 20px;border-bottom-left-radius: 20px;box-shadow: -5px -5px 5px rgba(0, 0, 0, 0.5);padding:10px;margin:10px 0px 10px 10px";
    storage[meAre-1].style="padding: 2px;border-bottom-right-radius: 50px;";
    storage[Number(meAre)+1].style="padding: 2px;border-top-right-radius: 50px;border:1px solid black";
    //storage[meAre].innerHTML+=
}