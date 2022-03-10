# SwitchTongue
## Super mega simple Javascript Localization

Switch language using only html attribute **data-<language>**.
 
### Demo
[Codepen EXAMPLE](https://codepen.io/ealbinu/pen/KKyOYjq?editors=1100)

### Usage
Use data-en, data-es, data-it, etc for to define the language.
  
```
<div data-es="Esto es español" data-it="Questo è italiano" data-fr="C'est français">This is english</div>
 <!-- Include script -->
 <script src="SwitchTongue.js"></script>

<!-- Init SwitchTongue -->
 <script>
    //- Add every language to be used.
    //- First one is the start language.
    SwitchTongue(['en', 'es'])
 </script>
```

### Switch languages
  
```
  <a href="#en">English</a>
  <a href="#es">Español</a>
  <a href="#it">Italiano</a>
  <a href="#it">Français</a>
  
