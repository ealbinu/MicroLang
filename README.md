# SwitchTongue
## Super mega simple Javascript Localization

Switch language using only html attribute **data-<language>**.
  

### Usage
Use data-en, data-es, data-it, etc for to define the language.
  
```
 <div data-es="Esto es español">This is english</div>
 <!-- Include script -->
 <script src="SwitchTongue.js"></script>

<!-- Init SwitchTongue -->
 <script>
    //- Add every language to be used.
    //- First one is the start language.
    SwitchTongue(['es', 'en'])
 </script>
```

### Switch languages
  
```
  <a href="#es">Español</a>
  <a href="#en">English</a>
  <a href="#it">Italiano</a>
  <a href="#it">Français</a>
  
