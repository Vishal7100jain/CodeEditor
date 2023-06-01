let HTML_code = document.getElementById('HTML-code')
let CSS_code = document.getElementById('CSS-code')
let JS_code = document.getElementById('JS-code')
let HtmlLang = document.getElementById('HtmlLang')
let CssLang = document.getElementById('CssLang')
let JsLang = document.getElementById('JsLang')
let textarea = document.querySelectorAll('textarea')


let Output = document.querySelector('iframe').contentDocument
let style = Output.createElement('style')
Output.head.appendChild(style)

let script = Output.createElement('script')
Output.body.appendChild(script)




// Main logic to run html, css and js entered by user
function run(){
    Output.body.innerHTML = HTML_code.value
    style.innerHTML = CSS_code.value
    script.innerHTML = JS_code.value

    if(HTML_code.value === "!DOC"){
        HTML_code.addEventListener('keypress', (event)=>{
            if(event.key === "Enter"){
                HTML_code.value = `<!DOCTYPE html>
                <html lang="en">
                <head>
                    <meta charset="UTF-8">
                    <meta http-equiv="X-UA-Compatible" content="IE=edge">
                    <meta name="viewport" content="width=device-width, initial-scale=1.0">
                    <title>Document</title>
                </head>
                <body>
                    
                </body>
                </html>`
            }
        })
    }
}




Array.from(textarea).forEach((textarea)=>{
    textarea.addEventListener('click', (e)=>{
        
        setInterval(()=>{
            run()
        },10)
        
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

