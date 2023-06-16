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
        iframe.head.innerHTML = cssvalue +  jsvalue
    }, 10)



    let button = document.getElementById('button');
    button.addEventListener('click', () => {
        let OutputTab = window.open('Output_tab.html');
        let documentHtml = OutputTab.document;

        let htmlValue = editor1.getValue();
        let cssValue = "<style>" + editor2.getValue() + "</style>";
        let jsValue = "<script>" + editor3.getValue() + "</script>";
    
        documentHtml.write(htmlValue);
        documentHtml.write(cssValue);
        documentHtml.write(jsValue);
    });
})
