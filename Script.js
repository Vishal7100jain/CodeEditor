document.addEventListener('DOMContentLoaded', function () {
    // Main logic to run html, css and js entered by user
    var editor1 = CodeMirror.fromTextArea(document.getElementById('HTML-code'), {
        mode: "xml",
        theme: "mdn-like",
        autoCloseBrackets: true,
        autoCloseTags: true,
        lineNumbers: true
    })

    var editor2 = CodeMirror.fromTextArea(document.getElementById('CSS-code'), {
        mode: "css",
        theme: "mdn-like",
        autoCloseBrackets: true,
        autoCloseTags: true,
        lineNumbers: true
    })

    var editor3 = CodeMirror.fromTextArea(document.getElementById('JS-code'), {
        mode: "javascript",
        theme: "mdn-like",
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
        iframe.head.innerHTML = cssvalue + jsvalue
    }, 10)



    // Logic for getting output on a new page/tab
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

    // Logic to get full page for coding...
    let CloseOpen = document.getElementById('CloseOpen')
    CloseOpen.addEventListener('click', () => {
        let iframe = document.querySelector('iframe')
        iframe.classList.toggle("hiddenclass")
        let CodeMirror = document.querySelectorAll('.CodeMirror')[0]
        let CodeMirror1 = document.querySelectorAll('.CodeMirror')[1]
        let CodeMirror2 = document.querySelectorAll('.CodeMirror')[2]
        CodeMirror.classList.toggle('height')
        CodeMirror1.classList.toggle('height')
        CodeMirror2.classList.toggle('height')
    })

    // Logic to change the Theme...
    let DarkLight = document.getElementById('DarkLight')
    DarkLight.addEventListener('click', () => {
        if(editor1.getOption("theme") == "mdn-like"){
            editor1.setOption('theme', "midnight");
            editor2.setOption('theme', "midnight");
            editor3.setOption('theme', "midnight");
        }
        
        else if(editor1.getOption("theme") == "midnight"){
            editor1.setOption('theme', "mdn-like");
            editor2.setOption('theme', "mdn-like");
            editor3.setOption('theme', "mdn-like");
        }
        
    })
})
