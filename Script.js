document.addEventListener('DOMContentLoaded', function () {
    // Main logic to run html, css and js entered by user
    var editor1 = CodeMirror.fromTextArea(document.getElementById('HTML-code'), {
        mode: "xml",
        theme: "midnight",
        autoCloseBrackets: true,
        autoCloseTags: true,
        lineNumbers: true
    })

    var editor2 = CodeMirror.fromTextArea(document.getElementById('CSS-code'), {
        mode: "css",
        theme: "midnight",
        autoCloseBrackets: true,
        autoCloseTags: true,
        lineNumbers: true
    })

    var editor3 = CodeMirror.fromTextArea(document.getElementById('JS-code'), {
        mode: "javascript",
        theme: "midnight",
        autoCloseBrackets: true,
        autoCloseTags: true,
        lineNumbers: true
    })
    // Selecting the iframe element
    var iframe = document.getElementById('Output').contentDocument;
    setInterval(() => {
        let htmlvalue = editor1.getValue()
        let cssvalue = "<style>" + editor2.getValue() + "</style>"
        let jsvalue = "<script>" + editor3.getValue() + "</script>"

        iframe.body.innerHTML = htmlvalue
        iframe.head.innerHTML = cssvalue
        iframe.head.innerHTML = jsvalue

        if (editor1.getValue() == "!DOC") {
            let a = editor1.getValue()
            a = `<!DOCTYPE html>
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
    }, 10)

})
// Array.from(textarea).forEach((textarea) => {
//     textarea.addEventListener('click', (e) => {
//         // if(e.target == HTML_code){
//         //     console.log(e.target,HTML_code)
//         //     // HtmlLang.style.backgroundColor = "red"
//         //     // CssLang
//         //     // JsLang
//         // }
//     })
// })

// });


// htmlvalue.addEventListener('click', ()=>{
//     console.log("clicked")
// })
