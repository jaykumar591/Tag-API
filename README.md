# Tag-API
I create Tag API through Javascript 
I like to make of this type of API to remove our CSS file through this API
We use this API to create webpage in few funtion call like call one funtion and give one object and create it
## How its work's
- it work on call function and give some css properties to make webpage
- css give in object formate but we short all parameter like if you want to set backgroundColor then just use bgI = 'red' and booms, like 
  padding = p
- if you want to give attribute then simply use like onlick, unsubmit, just use type in here type we already give all type of attribute 
   what tag which attribute need
- if you want to create dymanic page then this API for you to creat this type card, section , navigation bar , footer bar and etc
- show you thing about how can give containt in this tag we already provide text parameter in function when you call div tag then you give text containt
## How API interface
```javascript
import {alltag} from './style.js';
   const obj = {
    c:'red',bg:'green',h:'30px',w:'500px',m:'20px',b:'2px solid blue'
   }
  alltag.div({targate:'body',obj:obj,text:'hello world'});
```
### Explain It How it works
  -now satrt with import
    in import we jsut import file where our API exist 
  -And we just create Obj 
    in Object we just give some propeties to what look like our tag 
    c = color
    bg = backgroud
    h = heaight
    w = whidth
    m = margine
    b = border
    br = border redius

    alltag.div({target, obj, text,type})
    - target = for where are you want to create it like in body, in any class , in any id
    - obj = take all css properties in object form
    - text = give contant 
    - type = it is use when we you button, form , input any you use type to take attribute like input tag type text
     [Link] (https://github.com/jaykumar591/Tag-API/blob/main/style.js);
### why I make this type of API
  when i go in template engine in backend i face lorts of problem like how to set all data in page and how to send it basically for who dont know aboud react
  in here i remove this type of problem we serve any type template like pug , handelbar , ejs then you just import this file and create how many you want to call tag 
### Advantage 
- Reduce CSS file and reduce code
- we can make any page vary sort time and no need marster in css if you have some basic knoledge in css then ok for you
- It very readable code like set data from database and easy to argnize code
### Disadvantage 
  - If you create small page then its no better for small project
  - its take large memory size and internet
  - its very defecalt to lern first time and if you spend 3 days then you master in this API
    
