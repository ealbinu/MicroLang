var languages = []
var previousLanguage = ''
var currentLanguage = ''

const LogoStyle = [
    'color: #023047',
    'background: #ffb703',
    'font-size: 12px',
    'font-weight: bold',
    'text-shadow: 1px 1px #fb8500',
    'padding: 10px 100px 10px 12px',
    'border-left: 12px solid #fb8500',
    'border-radius: 4px',
    'font-family : sans-serif',
  ].join(';');
  
const ChangeStyle = [
    'color: #ffb703',
    'background: #023047',
    'font-size: 10px',
    'padding: 2px 6px',
    'border-radius: 4px',
    'border-left: 12px solid #8ecae6'
].join(';');

var MicroLang = function(langs){
    languages = langs
    console.log('%c%s', LogoStyle, 'MicroLang')
    currentLanguage = languages[0]
    console.log('%c%s', ChangeStyle, 'Main lang: "'+currentLanguage+'"')
    buildDatas()
    
}

var MicroLangSwitch = function (lang){
    location.hash=lang
}

var hashDetection = function () {
    var currenthash = location.hash.replace('#', '')
    if(languages.includes(currenthash)){
        currentLanguage = currenthash
        console.log('%c%s', ChangeStyle, 'Lang switch: "'+currentLanguage+'"')
        makeSwitch()
    }
}

var buildDatas = function () {
    var datas = document.querySelectorAll('[data-'+languages[1]+']')
    for(var i=0; i<datas.length; i++){
        var item = datas[i]
        var hasItemAttr = item.hasAttribute('data-lang-attr')
        if(!hasItemAttr){
            item.setAttribute('data-'+currentLanguage, item.innerHTML)
        } else {
            var itemAttr = item.getAttribute('data-lang-attr')
            item.setAttribute('data-'+currentLanguage, item.getAttribute(itemAttr))
        }
    }
    hashDetection()
    setActiveClasses()
    hideAndShow()
}

var makeSwitch = function () {
    var datas = document.querySelectorAll('[data-'+currentLanguage+']')
    for(var i=0; i<datas.length; i++){
        var item = datas[i]
        var hasItemAttr = item.hasAttribute('data-lang-attr')
        if(!hasItemAttr){
            //Normal
            item.innerHTML = item.getAttribute('data-'+currentLanguage)
        } else {
            //Specific attribute
            var itemAttr = item.getAttribute('data-lang-attr')
            item.setAttribute(itemAttr, item.getAttribute('data-'+currentLanguage))
        }
    }

   document.body.setAttribute('data-active-language', currentLanguage)

    setActiveClasses()
}

var setActiveClasses = function () {
    var currentActives = document.querySelectorAll('.active-language')
    for(var i=0; i<currentActives.length; i++){
        currentActives[i].classList.remove('active-language')
    }
    var newActives = document.querySelectorAll('[href="#'+currentLanguage+'"]')
    for(var i=0; i<newActives.length; i++){
        newActives[i].classList.add('active-language')

    }
}

var hideAndShow = function () {
    let thecss = ''
    for(var i=0; i<languages.length; i++){
        let lang = languages[i];
        thecss += '[data-active-language="'+lang+'"] .hide-'+lang+'{display:none;}'+"\n";
    }
    
    for(var i=0; i<languages.length; i++){
        let lang = languages[i];

        for(var x=0; x<languages.length; x++){
            let langX = languages[x];
            if(lang != langX){
                thecss += '[data-active-language="'+langX+'"] .visible-'+lang+'{display:none;}'+"\n";
            }
        }
    }

    const style = document.createElement('style');
    style.textContent = thecss
    document.head.appendChild(style);
}



window.onhashchange = hashDetection;



  

  
