const html=document.getElementById("projectHtml")
const css=document.getElementById("projectCss")
const javascript=document.getElementById("projectJavascript")
const python=document.getElementById("projectPython")
const java=document.getElementById("projectJava")
const project=document.getElementById("projeto")

function displayHtml(){
    if (html.style.display==='inline'){
        html.style.display="none"
        project.style.justifyContent='center'
        css.style.display="none"
        javascript.style.display="none"
        python.style.display="none"
        java.style.display="none"

    }
    else{
        html.style.display='inline'
        project.style.justifyContent='flex-end'
        css.style.display="none"
        javascript.style.display="none"
        python.style.display="none"
        java.style.display="none"
    }

}

function displayCss(){
    if (css.style.display==='inline'){
        css.style.display="none"
        project.style.justifyContent='center'
        html.style.display="none"
        javascript.style.display="none"
        python.style.display="none"
        java.style.display="none"

    }
    else{
        css.style.display='inline'
        project.style.justifyContent='flex-end'
        html.style.display="none"
        javascript.style.display="none"
        python.style.display="none"
        java.style.display="none"
    }

}

function displayJavascript(){
    if (javascript.style.display==='inline'){
        javascript.style.display="none"
        project.style.justifyContent='center'
        html.style.display="none"
        css.style.display="none"
        python.style.display="none"
        java.style.display="none"

    }
    else{
        javascript.style.display='inline'
        project.style.justifyContent='flex-end'
        html.style.display="none"
        css.style.display="none"
        python.style.display="none"
        java.style.display="none"
    }

}

function displayPython(){
    if (python.style.display==='inline'){
        python.style.display="none"
        project.style.justifyContent='center'
        html.style.display="none"
        css.style.display="none"
        javascript.style.display="none"
        java.style.display="none"

    }
    else{
        python.style.display='inline'
        project.style.justifyContent='flex-end'
        html.style.display="none"
        css.style.display="none"
        javascript.style.display="none"
        java.style.display="none"
    }

}

function displayJava(){
    if (java.style.display==='inline'){
        java.style.display="none"
        project.style.justifyContent='center'
        html.style.display="none"
        css.style.display="none"
        javascript.style.display="none"
        python.style.display="none"

    }
    else{
        java.style.display='inline'
        project.style.justifyContent='flex-end'
        html.style.display="none"
        css.style.display="none"
        javascript.style.display="none"
        python.style.display="none"
    }

}
