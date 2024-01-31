var cleaner
var actual = "HTML5"
var storage
var color = "ff4400"

const hexToDecimal = hex => parseInt(hex, 16);
const decToHexa = hex => hex.toString(16)

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
    window.document.querySelector("#types").style="none"
    cleaner.style='display: none'
    cleaner = window.document.querySelector('.h')
    window.document.querySelector("#react").style="none"
    cleaner.style='display: none'
    cleaner = window.document.querySelector('.i')
    window.document.querySelector("#reacss").style="none"
    cleaner.style='display: none'
    cleaner = window.document.querySelector('.j')
    window.document.querySelector("#notas").style="none"
    cleaner.style='display: none'
}

function menu(c){
    clean()
    switch(c){
        case 1:// MOSTRAR HTML5
            color = "ff4400"
            cleaner = window.document.querySelector('.a')//1
            cleaner.style='display: flex'
            actual = "HTML5"
            window.document.querySelector("#showContent").style=`background-color: #${color};`
            window.document.querySelector("#html5").style=`box-shadow:0px 0px 30px #${color};`
            storage = window.document.getElementsByClassName("ithtml")
            break;
        case 2:// MOSTRAR CSS3
            color= "0087e0"
            cleaner = window.document.querySelector('.b')//2
            cleaner.style='display: flex'
            actual = "CSS3"
            window.document.querySelector("#showContent").style=`background-color: #${color};`
            window.document.querySelector("#css3").style=`box-shadow:0px 0px 30px #${color};`
            storage = window.document.getElementsByClassName("itcss3")
            break;
        case 3:// MOSTRAR JAVASCRIPT
            color="f0bc11"
            cleaner = window.document.querySelector('.c')//3
            cleaner.style='display: flex'
            actual = "JAVASCRIPT"
            window.document.querySelector("#showContent").style=`background-color: #${color};`
            window.document.querySelector("#javas").style=`box-shadow:0px 0px 30px #${color};`
            storage = window.document.getElementsByClassName("itjs")
            break;
        case 4:// MOSTRAR HTML5 + CSS3
            color="19c994"
            cleaner = window.document.querySelector('.d')
            cleaner.style='display: flex'
            actual = "HTML5 + CSS3"
            window.document.querySelector("#showContent").style=`background-color: #${color};`
            window.document.querySelector("#htcs").style=`box-shadow:0px 0px 30px #${color};`
            storage = window.document.getElementsByClassName("ithtmlcss3")
            break;
        case 5:// MOSTRAR HTML5 + JAVASCRIPT
            color="ff9100"
            cleaner = window.document.querySelector('.e')//5
            cleaner.style='display: flex'
            actual = "HTML5 + JAVASCRIPT"
            window.document.querySelector("#showContent").style=`background-color: #${color};`
            window.document.querySelector("#htjs").style=`box-shadow:0px 0px 30px #${color};`
            storage = window.document.getElementsByClassName("ithtmljs")
            break;
        case 6:// MOSTRAR CSS3 + JAVASCRIPT
            color="cc00ff"
            cleaner = window.document.querySelector('.f')//6
            cleaner.style='display: flex'
            actual = "CSS3 + JAVASCRIPT"
            window.document.querySelector("#showContent").style=`background-color: #${color};`
            window.document.querySelector("#csjs").style=`box-shadow:0px 0px 30px #${color};`
            storage = window.document.getElementsByClassName("itcss3js")
            break;
        case 7:// MOSTRAR TYPESCRIPT
            color="3c3eb8"
            cleaner = window.document.querySelector('.g')//7
            cleaner.style='display: flex'
            actual = "TYPESCRIPT"
            window.document.querySelector("#showContent").style=`background-color: #${color}`
            window.document.querySelector("#types").style=`box-shadow:0px 0px 30px #${color}`
            storage = window.document.getElementsByClassName("ittypes")
            break;
        case 8:// MOSTRAR REACT
            color="30c8e3"
            cleaner = window.document.querySelector('.h')//8
            cleaner.style='display: flex'
            actual = "REACT"
            window.document.querySelector("#showContent").style=`background-color: #${color};`
            window.document.querySelector("#react").style=`box-shadow:0px 0px 30px #${color};`
            storage = window.document.getElementsByClassName("itreact")
            break;
        case 9:// MOSTRAR REACT + CSS
            color="0059ff"
            cleaner = window.document.querySelector('.i')//9
            cleaner.style='display: flex'
            actual = "REACT + CSS"
            window.document.querySelector("#showContent").style=`background-color: #${color};`
            window.document.querySelector("#reacss").style=`box-shadow:0px 0px 30px #${color};`
            storage = window.document.getElementsByClassName("itreacss")
            break;
        case 10:// MOSTRAR NOTAS
            color="464646"
            cleaner = window.document.querySelector('.j')//9
            cleaner.style='display: flex'
            actual = "NOTAS"
            window.document.querySelector("#showContent").style=`background-color: #${color};`
            window.document.querySelector("#notas").style=`box-shadow:0px 0px 30px #${color};`
            storage = window.document.getElementsByClassName("itnotas")
            break;
    }
    applyIndex()
}

function applyIndex(){
    window.scrollTo(0,0)
    /*
    window.document.querySelector('#heading').style=`background-color: #${decToHexa(hexToDecimal(color)-5000)};`
    */
    window.document.querySelector("#cont").style=`box-shadow:-15px -5px 10px #${color}dd inset;`
    window.document.querySelector("#showContent").innerHTML=actual
    //window.document.querySelector("#menu").style=`background-color: #${color};`
    for(c in storage){
        storage[c].setAttribute('onclick',`uploadName("${storage[c].innerHTML}","${c}")`)
        storage[c].style=""
    }
}

function uploadName(nameIs, meAre){
    window.scrollTo(0,0)
    for(c in storage){
        storage[c].style=""
    }//rgba(0, 0, 0, 0.5)
    window.document.querySelector("#showContent").innerHTML=actual+" > "+nameIs
    // ELEMENTO CENTRAL
    storage[meAre].style="background-color: white;color: black;border: none;outline: 3px double white; border-top-left-radius: 20px;border-bottom-left-radius: 20px;box-shadow: 0px -5px 15px #ffffff90;padding:2px;margin:10px 0px 10px 10px;text-align: center;font-weight: bolder;font-size: 1em;";
    // ELEMENTO DE CIMA DISTANTE
    if(!(meAre-2<0)){storage[meAre-2].style="padding: 3px;font-size: .8em;"}
    // ELEMENTO DE CIMA PRÓXIMO
    if(!(meAre-1<0)){storage[meAre-1].style="padding: 2px;border-bottom-right-radius: 50px;font-size: .75em;";}
    // ELEMENTO DE BAIXO PRÓXIMO
    storage[Number(meAre)+1].style="padding: 2px;border-top-right-radius: 50px;outline:1px solid black;font-size: .75em;";
    // ELEMENTO DE BAIXO DISTANTE
    storage[Number(meAre)+2].style="padding: 3px;font-size: .8em;";

}