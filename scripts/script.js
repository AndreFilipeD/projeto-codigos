var cleaner
function menu(c){
    clean()
    if(c==1){// MOSTRAR HTML5
        cleaner = window.document.querySelector('.a')//1
        cleaner.style='display: flex'
        window.document.querySelector("#showContent").innerHTML="HTML5"
        window.document.querySelector("#showContent").style="background-color: #ff4400;"
    }else if(c==2){// MOSTRAR CSS3
        cleaner = window.document.querySelector('.b')//2
        cleaner.style='display: flex'
        window.document.querySelector("#showContent").innerHTML="CSS3"
        window.document.querySelector("#showContent").style="background-color: #0087e0;"
    }else if(c==3){// MOSTRAR JAVASCRIPT
        cleaner = window.document.querySelector('.c')//3
        cleaner.style='display: flex'
        window.document.querySelector("#showContent").innerHTML="JAVASCRIPT"
        window.document.querySelector("#showContent").style="background-color: #f0bc11;"
    }else if(c==4){// MOSTRAR HTML5 + CSS
        cleaner = window.document.querySelector('.d')//4
        cleaner.style='display: flex'
        window.document.querySelector("#showContent").innerHTML="HTML5 + CSS3"
        window.document.querySelector("#showContent").style="background-color: #19c994;"
    }else if(c==5){// MOSTRAR HTML5 + JAVASCRIPT
        cleaner = window.document.querySelector('.e')//5
        cleaner.style='display: flex'
        window.document.querySelector("#showContent").innerHTML="HTML5 + JAVASCRIPT"
        window.document.querySelector("#showContent").style="background-color: #ff9100;"
    }else if(c==6){// MOSTRAR CSS + JAVASCRIPT
        cleaner = window.document.querySelector('.f')//6
        cleaner.style='display: flex'
        window.document.querySelector("#showContent").innerHTML="CSS3 + JAVASCRIPT"
        window.document.querySelector("#showContent").style="background-color: #cc00ff;"
    }else{// MOSTRAR NOTAS
        cleaner = window.document.querySelector('.g')//6
        cleaner.style='display: flex'
        window.document.querySelector("#showContent").innerHTML="NOTAS"
        window.document.querySelector("#showContent").style="background-color: #464646;"
    }
}

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