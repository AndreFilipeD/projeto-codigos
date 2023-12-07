var cleaner
var actual = "HTML5"
var storage

function clean(){
    cleaner = window.document.querySelector('.a')
    cleaner.style='display: none'
    cleaner = window.document.querySelector('.b')
    cleaner.style='display: none'
    cleaner = window.document.querySelector('.c')
    cleaner.style='display: none'
    cleaner = window.document.querySelector('.d')
    cleaner.style='display: none'
    cleaner = window.document.querySelector('.e')
    cleaner.style='display: none'
    cleaner = window.document.querySelector('.f')
    cleaner.style='display: none'
    cleaner = window.document.querySelector('.g')
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
            storage = window.document.getElementsByClassName("ithtml")
            break;
        case 2:// MOSTRAR CSS3
            cleaner = window.document.querySelector('.b')//2
            cleaner.style='display: flex'
            actual = "CSS3"
            window.document.querySelector("#showContent").style="background-color: #0087e0;"
            storage = window.document.getElementsByClassName("itcss3")
            break;
        case 3:// MOSTRAR JAVASCRIPT
            cleaner = window.document.querySelector('.c')//3
            cleaner.style='display: flex'
            actual = "JAVASCRIPT"
            window.document.querySelector("#showContent").style="background-color: #f0bc11;"
            storage = window.document.getElementsByClassName("itjs")
            break;
        case 4:// MOSTRAR HTML5 + CSS3
            cleaner = window.document.querySelector('.d')
            cleaner.style='display: flex'
            actual = "HTML5 + CSS3"
            window.document.querySelector("#showContent").style="background-color: #19c994;"
            storage = window.document.getElementsByClassName("ithtmlcss3")
            break;
        case 5:// MOSTRAR HTML5 + JAVASCRIPT
            cleaner = window.document.querySelector('.e')//5
            cleaner.style='display: flex'
            actual = "HTML5 + JAVASCRIPT"
            window.document.querySelector("#showContent").style="background-color: #ff9100;"
            storage = window.document.getElementsByClassName("ithtmljs")
            break;
        case 6:// MOSTRAR CSS3 + JAVASCRIPT
            cleaner = window.document.querySelector('.f')//6
            cleaner.style='display: flex'
            actual = "CSS3 + JAVASCRIPT"
            window.document.querySelector("#showContent").style="background-color: #cc00ff;"
            storage = window.document.getElementsByClassName("itcss3js")
            break;
        case 7:// MOSTRAR NOTAS
            cleaner = window.document.querySelector('.g')//6
            cleaner.style='display: flex'
            actual = "NOTAS"
            window.document.querySelector("#showContent").style="background-color: #464646;"
            storage = window.document.getElementsByClassName("itnotas")
            break;
    }applyIndex()
}

function applyIndex(){
    window.document.querySelector("#showContent").innerHTML=actual
    for(c in storage){
        storage[c].setAttribute('onclick',`uploadName("${storage[c].innerHTML}","${c}")`)
        storage[c].style=""
    }
}

function uploadName(nameIs, meAre){
    for(c in storage){
        storage[c].style=""
    }
    window.document.querySelector("#showContent").innerHTML=actual+" > "+nameIs
    storage[meAre].style="background-color: white;color: black;outline: 1px solid white; border-top-left-radius: 10px;box-shadow: -5px -5px 5px rgba(0, 0, 0, 0.5);"//"background-color: #d48a44"
}
//window.alert(storage[1].innerHTML)