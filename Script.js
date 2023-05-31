let HTML_code = document.getElementById('HTML-code')
let CSS_code = document.getElementById('CSS-code')
let JS_code = document.getElementById('JS-code')
let Output = document.getElementById('Output')
let HtmlLang = document.getElementById('HtmlLang')
let CssLang = document.getElementById('CssLang')
let JsLang = document.getElementById('JsLang')
let textarea = document.querySelectorAll('textarea')


// function OutputPrint(){
// }



Array.from(textarea).forEach((textarea)=>{
    textarea.addEventListener('click', (e)=>{
        
        setInterval(()=>{
            Output.value = textarea.value
        },2000)
        
        //Color changing logic for textarea
        if(e.target.name == "HTML" ){
            HtmlLang.style.backgroundColor = "#34363e"
            CssLang.style.backgroundColor = "#2f2b2b"
            JsLang.style.backgroundColor = "#2f2b2b"
        }
        
        else if(e.target.name == "CSS" ){
            HtmlLang.style.backgroundColor = "#2f2b2b"
            CssLang.style.backgroundColor = "#34363e"
            JsLang.style.backgroundColor = "#2f2b2b"
        }
        
        else if(e.target.name == "JS" ){
            HtmlLang.style.backgroundColor = "#2f2b2b"
            CssLang.style.backgroundColor = "#2f2b2b"
            JsLang.style.backgroundColor = "#34363e"
        }
    })
})

