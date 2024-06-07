const createElement = ({tagName, obj, id, cl, text}) => {
    const tag = document.createElement(tagName);
    tag.style.background = obj?.bg; // background 
    tag.style.backgroundImage = obj?.bgI; //background Imgage
    tag.style.backgroundColor = obj?.bgC; //  ||       Color
    tag.style.opacity = obj?.opa;  // Opacity  (visibale proberty)
    tag.style.color = obj?.c;  //text color
    tag.style.padding = obj?.p; //padding
    tag.style.paddingLeft = obj?.pl; //padding left
    tag.style.paddingRight = obj?.pr; //padding right
    tag.style.paddingTop = obj?.pt; //padding top
    tag.style.paddingBottom = obj?.pb; //padding bottom
    tag.style.width = obj?.w; // width
    tag.style.height = obj?.h; // height
    tag.style.margin = obj?.m; // margin
    tag.style.marginTop = obj.mt;//margin top
    tag.style.marginLeft = obj.ml; // margin left
    tag.style.marginRight = obj.mr; // margin right
    tag.style.marginBottom = obj.mb; // margin bottom
    tag.style.boxShadow = obj.bs;   // boxShadow:'2px 2px 10px 10px blue'
    tag.style.display = obj.d;  // display properties : = flex ,grid,block,inlineBlock , inline 
    tag.style.border = obj?.b;  // border:'1px solid red '
    tag.style.borderRadius = obj.br, //borderRadius 20px 
    // position condition 
    tag.style.position = obj?.po;   //possition : relative, absloute,sticky,fixed 
    tag.style.top = obj.t; // position top
    tag.style.left = obj.l; //position left
    tag.style.right = obj.r; // position right
    tag.style.bottom = obj.bo; // position bottom
    tag.style.zIndex = obj.zi; // layer condition
    tag.style.justifyContent= obj.jc;   // justifyContent: center, spaceBetween by X diration
    tag.style.alignItems = obj.ai; // alignItems:  center,spaceBetween by Y direction
    //overflow condition
    tag.style.textAlign = obj.ta;
    tag.style.overflow =obj?.of; // overflow
    tag.style.overflowY = obj.ofY; //overflowY
    tag.style.overflowX = obj.ofX;// overflowX
    tag.style.float = obj.ft;
    tag.style.flexWrap = obj.fw;
    tag.flexDirection = obj.fd;
    tag.style.textDecoration = obj.td;
    tag.style.listStyle = obj.ls;
    // font stylis
    tag.style.fontSize = obj.fS;
    tag.style.fontWeight = obj.fW;
    tag.style.fontFamily = obj.fF;
    //curser pointer 
    tag.style.cursor = obj.cp;

    tag.id = id;
    tag.className = cl;
    const addText = document.createTextNode(text!=null?text:'');
    tag.appendChild(addText);
    return tag;
};

const createInputTag={
    form: ({target,obj,id,cl,text,type}) =>{
        const tag = createElement({tagName:'form',obj,id,cl,text});
        tag.setAttribute('method',type.m);
        tag.setAttribute('action',type.a);
        tag.setAttribute('onsubmit',type.ons);
        document.querySelector(target).appendChild(tag);
    },
    input: ({target,obj,id,cl,text,type}) =>{
       const tag= createElement({tagName:'input',obj,id,cl,text});
       tag.setAttribute('type',type.t);
       tag.setAttribute('placeholder',type.p);
       tag.setAttribute('required',type?.r);
       document.querySelector(target).appendChild(tag);


    },
    button: ({target,obj,id,cl,text,type})=>{
        const tag = createElement({tagName:'button',obj,id,cl,text});
        tag.setAttribute('type',type.t);
        tag.setAttribute('onclick',type.on);
        document.querySelector(target).appendChild(tag);
    }

}
//  all nurmal tag: div,a,h1,h2,h3,strong,li,ul,ol
const allTag = {
    div: ({target, obj, id, cl, text}) => {
       
        const tag = createElement({tagName:'div', obj:obj, id:id, cl:cl, text:text});
        document.querySelector(target).appendChild(tag)
        
    },
    h1: ({target, obj, id, cl, text}) => {
        const tag = createElement({tagName:'h1',obj: obj,id: id, cl:cl, text});
        document.querySelector(target).appendChild(tag);
    },
    h2: ({target, obj, id, cl, text}) => {
        const tag = createElement({tagName:'h2', obj:obj, id:id, cl:cl, text:text});
        document.querySelector(target).appendChild(tag);
    },
    h3: ({target, obj, id, cl, text}) => {
        const tag = createElement({tagName:'h3', obj:obj, id:id, cl:cl, text:text});
        document.querySelector(target).appendChild(tag);
    },
    p: ({target, obj, id, cl, text}) => {
        const tag = createElement({tagName:'p', obj:obj, id:id, cl:cl, text:text});
        document.querySelector(target).appendChild(tag);
    },
    a: ({target, obj, id, cl, text,link}) => {
        const tag = createElement({tagName:'a', obj:obj, id:id, cl:cl, text:text});
        tag.href = link;
        document.querySelector(target).appendChild(tag);
    },
    span: ({target, obj, id, cl, text}) => {
        const tag = createElement({tagName:'span', obj:obj, id:id, cl:cl, text:text});
        document.querySelector(target).appendChild(tag);
    },
    strong: ({target, obj, id, cl, text}) => {
        const tag = createElement({tagName:'strong', obj:obj, id:id, cl:cl, text:text});
        document.querySelector(target).appendChild(tag);
    },
    ul: ({target, obj, id, cl, text}) => {
        const tag = createElement({tagName:'strong', obj:obj, id:id, cl:cl, text:text});
        document.querySelector(target).appendChild(tag);
    },
    li: ({target, obj, id, cl, text,type}) => {
        const tag = createElement({tagName:'strong', obj:obj, id:id, cl:cl, text:text});
        tag.setAttribute('type', type!=null?type:'circle');
        document.querySelector(target).appendChild(tag);
    },
    ol: ({target, obj, id, cl, text,t}) => {
        const tag = createElement({tagName:'strong', obj:obj, id:id, cl:cl, text:text});
        tag.setAttribute('type',t!=null?t:'A');
        document.querySelector(target).appendChild(tag);
    },
    table:({target,obj,id,cl,text}) =>{
        const tag =createElement({tagName:'table',obj,id,cl,text});
        document.querySelector(target).appendChild(tag);
    },
    tr:({target,obj,id,cl,text}) =>{
        const tag =createElement({tagName:'tr',obj,id,cl,text});
        document.querySelector(target).appendChild(tag);
    },
    th:({target,obj,id,cl,text}) =>{
        const tag =createElement({tagName:'th',obj,id,cl,text});
        document.querySelector(target).appendChild(tag);
    },
    td:({target,obj,id,cl,text}) =>{
        const tag =createElement({tagName:'td',obj,id,cl,text});
        document.querySelector(target).appendChild(tag);
    },
    img:({target,obj,id,cl,text,src}) =>{
        const tag =createElement({tagName:'img',obj,id,cl,text});
        tag.setAttribute('src',scr!=null?src:'');
        document.querySelector(target).appendChild(tag);
    },
    hr:({target,obj,id,cl,text}) =>{
        const tag =createElement({tagName:'hr',obj,id,cl,text});
        document.querySelector(target).appendChild(tag);
    },
    br:({target,obj,id,cl,text}) =>{
        const tag =createElement({tagName:'br',obj,id,cl,text});
        document.querySelector(target).appendChild(tag);
    },
    link:({r,t,l}) =>{
        const tag = document.createElement('link');
        tag.setAttribute('rel',r!=null?r:'stylesheet');
        tag.setAttribute('type',t!=null?t:'text/css');
        tag.setAttribute('href',l!=null?l:'./style.css');
        document.querySelector('head').appendChild(tag);
    },
    
}


export { allTag,createInputTag };
