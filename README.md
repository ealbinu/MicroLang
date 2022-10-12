# Micro Lang

## Micro Javascript Language changer

Switch language using only html attribute **data-*LANG***
 
### Demo

- [Live](https://ealbinu.github.io/MicroLang/)
- [Codepen](https://codepen.io/ealbinu/pen/KKyOYjq?editors=1100)

### Usage

Use data-en, data-es, data-it, etc for to define the language.
  
```
<div data-es="Esto es español" data-it="Questo è italiano" data-fr="C'est français">This is english</div>
 <!-- Include script -->
 <script src="MicroLang.js"></script>

<!-- Init MicroLang -->
 <script>
    //- Add every language to be used.
    //- First one is the start language.
    MicroLang(['en', 'es'])
 </script>
```

### Switch languages
  
```
  <a href="#en">English</a>
  <a href="#es">Español</a>
  
### Text
  
```
  <span data-es="Esto es español">This is english</span>


### Attribute
  
```
  <img data-lang-attr="src" src="https://flagcdn.com/144x108/us.png" data-es="https://flagcdn.com/144x108/es.png" />


### Visible & Hidden (CSS Classes)
  
```
  <span class="visible-en">😀</span>
  <span class="visible-es">😀</span>
  <span class="hide-en">😀</span>
  <span class="hide-es">😀</span>


### Programmatically

Calling method MicroLangSwitch(langID):

```
  <button onclick="MicroLangSwitch('en')">EN</button>


Or changing the url hash:

```
  location.hash="en";
