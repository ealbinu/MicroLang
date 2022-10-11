var languages = []
var previousLanguage = ''
var currentLanguage = ''
const LogoStyle = [
    'color: #023047',
    'background: #ffb703',
    'font-size: 16px',
    'font-weight: bold',
    'text-shadow: 1px 1px #fb8500',
    'padding: 10px 100px 10px 12px',
    'border-left: 12px solid #fb8500',
    'border-radius: 4px',
  ].join(';');
  
const ChangeStyle = [
    'color: #ffb703',
    'background: #023047',
    'font-size: 12px',
    'padding: 4px 12px',
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


window.onhashchange = hashDetection;



  

  
