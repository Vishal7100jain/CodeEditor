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

        let CodeMirror = document.querySelector('.CodeMirror')
        CodeMirror.addEventListener('click', (div) => {
            // selecting htmlTextArea 
            let CodeWritingDiv = document.querySelector('.CodeWritingDiv')
            let innerDivs = CodeWritingDiv.querySelectorAll(".CodeMirror ")
            let htmlTextArea = innerDivs[0]
            console.log(htmlTextArea)
            // console.log(htmlTextArea)
            
            // let maincodeDiv = htmlTextArea.querySelectorAll("div")
            // let forth_main_div = maincodeDiv[7]
            
            let cssTextArea = innerDivs[7]
            // console.log(cssTextArea)
            // let maincodeDivcss = cssTextArea.querySelectorAll("div")
            // console.log(maincodeDivcss)
            // let forth_main_div_css = maincodeDivcss[7]
            // console.log(forth_main_div_css)
            
            
            // let cssTextArea = innerDivs[4]
            // let jsTextArea = innerDivs[5]
            // console.log(div.target)
            // if(div.target ==  htmlTextArea){
            //     // console.log("selected")
            // }
        })
    }, 10)
})