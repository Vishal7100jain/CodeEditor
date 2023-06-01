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
function run() {
    Output.body.innerHTML = HTML_code.value
    style.innerHTML = CSS_code.value
    script.innerHTML = JS_code.value
    
    if (HTML_code.value === "!DOC") {
        HTML_code.addEventListener('keypress', (event) => {
            if (event.key === "Enter") {
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



let HtmlTags = [
    'a',
    'abbr',
    'acronym',
    'address',
    'applet',
    'area',
    'article',
    'aside',
    'audio',
    'b',
    'base',
    'basefont',
    'bdi',
    'bdo',
    'big',
    'blockquote',
    'body',
    'br',
    'button',
    'canvas',
    'caption',
    'center',
    'cite',
    'code',
    'col',
    'colgroup',
    'data',
    'datalist',
    'dd',
    'del',
    'details',
    'dfn',
    'dialog',
    'dir',
    'div',
    'dl',
    'dt',
    'em',
    'embed',
    'fieldset',
    'figcaption',
    'figure',
    'font',
    'footer',
    'form',
    'frame',
    'frameset',
    'h1',
    'h2',
    'h3',
    'h4',
    'h5',
    'h6',
    'head',
    'header',
    'hr',
    'html',
    'i',
    'iframe',
    'img',
    'input',
    'ins',
    'kbd',
    'label',
    'legend',
    'li',
    'link',
    'main',
    'map',
    'mark',
    'meta',
    'meter',
    'nav',
    'noframes',
    'noscript',
    'object',
    'ol',
    'optgroup',
    'option',
    'output',
    'p',
    'param',
    'picture',
    'pre',
    'progress',
    'q',
    'rp',
    'rt',
    'ruby',
    's',
    'samp',
    'script',
    'section',
    'select',
    'small',
    'source',
    'span',
    'strike',
    'strong',
    'style',
    'sub',
    'summary',
    'sup',
    'svg',
    'table',
    'tbody',
    'td',
    'template',
    'textarea',
    'tfoot',
    'th',
    'thead',
    'time',
    'title',
    'tr',
    'track',
    'tt',
    'u',
    'ul',
    'var',
    'video',
    'wbr'
];
let HtmlAttributes = [
    'accept',
    'accept-charset',
    'accesskey',
    'action',
    'align',
    'alt',
    'async',
    'autocomplete',

    'autofocus',
    'autoplay',
    'bgcolor',
    'border',
    'charset',
    'checked',
    'cite',
    'class',
    'color',
    'cols',
    'colspan',
    'content',
    'contenteditable',
    'controls',
    'coords',
    'data',
    'datetime',
    'default',
    'defer',
    'dir',
    'disabled',
    'download',
    'draggable',
    'dropzone',
    'enctype',
    'for',
    'form',
    'headers',
    'height',
    'hidden',
    'high',
    'href',
    'hreflang',
    'http-equiv',
    'id',
    'ismap',
    'kind',
    'label',
    'lang',
    'list',
    'loop',
    'low',
    'max',
    'maxlength',
    'media',
    'method',
    'min',
    'multiple',
    'name',
    'novalidate',
    'open',
    'optimum',
    'pattern',
    'placeholder',
    'poster',
    'preload',
    'readonly',
    'rel',
    'required',
    'reversed',
    'rows',
    'rowspan',
    'sandbox',
    'scope',
    'selected',
    'shape',
    'size',
    'sizes',
    'span',
    'spellcheck',
    'src',
    'srcdoc',
    'srclang',
    'srcset',
    'start',
    'step',
    'style',
    'tabindex',
    'target',
    'title',
    'translate',
    'type',
    'usemap',
    'value',
    'width',
    'wrap'
];

HtmlTags.forEach((HtmlTags) => {
    HtmlTags.style.color = red
    console.log(HtmlTags)
    // if(HTML_code == value){
    // }
})






Array.from(textarea).forEach((textarea) => {
    textarea.addEventListener('click', (e) => {

        setInterval(() => {
            run()
        }, 10)

        //Color changing logic for textarea
        if (e.target.name == "HTML") {
            HtmlLang.style.backgroundColor = "#34363e"
            CssLang.style.backgroundColor = "#2f2b2b"
            JsLang.style.backgroundColor = "#2f2b2b"
        }

        else if (e.target.name == "CSS") {
            HtmlLang.style.backgroundColor = "#2f2b2b"
            CssLang.style.backgroundColor = "#34363e"
            JsLang.style.backgroundColor = "#2f2b2b"
        }

        else if (e.target.name == "JS") {
            HtmlLang.style.backgroundColor = "#2f2b2b"
            CssLang.style.backgroundColor = "#2f2b2b"
            JsLang.style.backgroundColor = "#34363e"
        }
    })
})

