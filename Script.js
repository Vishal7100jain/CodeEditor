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
        var htmlvalue = editor1.getValue()
        var cssvalue = "<style>" + editor2.getValue() + "</style>"
        var jsvalue = "<script>" + editor3.getValue() + "</script>"

        iframe.body.innerHTML = htmlvalue
        iframe.head.innerHTML = cssvalue
        iframe.head.innerHTML = jsvalue
        return htmlvalue
    }, 10)
    
    
    function runCode(){
        window.open('Output_tab.html');
        setInterval(()=>{
            let NewTabOutput = document.getElementsByTagName('iframe').contentDocument
            console.log(NewTabOutput)
            NewTabOutput.body.innerHTML = editor1.getValue()
            
            // let script = document.createElement('script')
            // script.innerHTML = editor2.getValue()
            // bodymain.appendChild(script)
            
            // let head = document.getElementsByTagName('head')
            // let style = document.createElement('style')
            // style.innerHTML = editor2.getValue()
        })
    }
    return htmlvalue
})


setInterval(()=>{
    console.log(htmlvalue)
},1)