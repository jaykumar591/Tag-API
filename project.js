import {allTag,createInputTag} from './style.js';


const obj = {
    bg:"green",color: "white",p:"10px",m:"0",d:'flex',jc:'center',ai:'center',
    p:'0px 20px',br:"20px"
}
const ob1 = {
    bg:"#45676454",c: "white",w:'100px',p:"10px", d:'inline-block',
    m:"0px 20px", h:'30px',ta:'center'
}
const section = {
    bg:'linear-gradient(90deg, red ,yellow)',c: "white",
    jc:'center',ai:'center',m:'20px auto',d:'flex',w:'80%',
    h:'80vh', of:'auto', br:"20px", b:'5px solid blue',fw:'wrap'
}

//navbar
allTag.div({target:'body',obj:obj,cl:'navbar',text:''});
allTag.div({target:'.navbar',obj:ob1,cl:'navbar',text:'About'});
allTag.div({target:'.navbar',obj:ob1,cl:'navbar',text:'Contact Us'});
allTag.div({target:'.navbar',obj:ob1,cl:'navbar',text:'Service'});
allTag.a({target:'.navbar',obj:{...ob1,c:'blue',td:'none'},cl:'navbar',text:'youtube',link:'https://www.youtube.com/watch?v=mClF6mJV5xM&list=RDKOwSfJRjn0E&index=4'});

//section
const sinner = {bg:'#45676454',h:'200px',w:'150px',br:'20px',m:'20px',fS:'20px',p:'10px',ta:'center',}
allTag.div({target:'body',obj:section,cl:'section',text:''});
allTag.div({target:'.section',obj:sinner,cl:'sinner',text:'how are you all my freinds'});
allTag.div({target:'.section',obj:sinner,cl:'sinner',text:'how are you all my freinds'});
allTag.div({target:'.section',obj:sinner,cl:'sinner',text:'how are you all my freinds'});
allTag.div({target:'.section',obj:sinner,cl:'sinner',text:'how are you all my freinds'});
allTag.div({target:'.section',obj:sinner,cl:'sinner',text:'how are you all my freinds'});
allTag.div({target:'.section',obj:sinner,cl:'sinner',text:'how are you all my freinds'});
allTag.div({target:'.section',obj:sinner,cl:'sinner',text:'how are you all my freinds'});
allTag.div({target:'.section',obj:sinner,cl:'sinner',text:'how are you all my freinds'});

allTag.div({target:'body',obj:section,cl:'section',id:'input',text:''});
const form = {
    bg:'green',c:'red',w:'100%',m:'0px 150px',br:'20px',
};
const input = {
    bg:'yellow',c:'red',w:'65%',m:'30px auto',h:'40px',br:'20px',d:'block',ta:'center'
};
const type = {
    m:'get',
    a:'https://www.google.com?search',
    r:false

}
createInputTag.form({target:'#input',obj:form,id:'form',type:type})
createInputTag.input({target:'form',obj:input,id:'name',cl:'name',type:{...type,t:'text',p:'Enter your name'}});
createInputTag.input({target:'form',obj:input,id:'name',cl:'name',type:{...type,t:'text',p:'Enter your gmail'}});
createInputTag.input({target:'form',obj:input,id:'name',cl:'name',type:{...type,t:'text',p:'Enter your age'}})
createInputTag.input({target:'form',obj:input,id:'name',cl:'name',type:{...type,t:'text',p:'Enter your resion'}});
createInputTag.button({target:'form',obj:{...input,w:'80px'},id:'name',cl:'name',type:type,text:"submit"});

const table = {}
allTag.div({target:'body',obj:{...section,bg:'yellow'},cl:'section',id:'table',text:''});
allTag.table({target:'#table',obj:{...table,bg:'blue',c:'white',w:'80%',of:'hidden',br:'20px',h:'50vh'}});
allTag.tr({target:'table',obj:{...table , bg:'red'},id:'th'})
allTag.th({target:'#th',obj:{...table , bg:'red',c:'white',w:'100px',h:'20px'},text:"Roll No."})
allTag.th({target:'#th',obj:{...table , bg:'red',c:'white',w:'100px',h:'20px'},text:"Student Name."})
allTag.th({target:'#th',obj:{...table , bg:'red',c:'white',w:'100px',h:'20px'},text:"College Name."})
allTag.th({target:'#th',obj:{...table , bg:'red',c:'white',w:'100px',h:'20px'},text:"College Name."})
allTag.th({target:'#th',obj:{...table , bg:'red',c:'white',w:'100px',h:'20px'},text:"College Name."})
allTag.th({target:'#th',obj:{...table , bg:'red',c:'white',w:'100px',h:'20px'},text:"College Name."})
allTag.th({target:'#th',obj:{...table , bg:'red',c:'white',w:'100px',h:'20px'},text:"College Name."})
allTag.th({target:'#th',obj:{...table , bg:'red',c:'white',w:'100px',h:'20px'},text:"College Name."})
allTag.th({target:'#th',obj:{...table , bg:'red',c:'white',w:'100px',h:'20px'},text:"College Name."})
allTag.tr({target:'table',obj:{...table , bg:'khaki'},id:'th1'})
allTag.td({target:'#th1',obj:{...table ,c:'white',w:'100px',h:'20px'},text:" 12500122066."})
allTag.td({target:'#th1',obj:{...table ,c:'white',w:'100px',h:'20px'},text:"Sahil Kumar."})
allTag.td({target:'#th1',obj:{...table ,c:'white',w:'100px',h:'20px'},text:" BCET,DGR."})
allTag.td({target:'#th1',obj:{...table ,c:'white',w:'100px',h:'20px'},text:" BCET,DGR."})
allTag.td({target:'#th1',obj:{...table ,c:'white',w:'100px',h:'20px'},text:" BCET,DGR."})
allTag.td({target:'#th1',obj:{...table ,c:'white',w:'100px',h:'20px'},text:" BCET,DGR."})
allTag.td({target:'#th1',obj:{...table ,c:'white',w:'100px',h:'20px'},text:" BCET,DGR."})
allTag.td({target:'#th1',obj:{...table ,c:'white',w:'100px',h:'20px'},text:" BCET,DGR."})
allTag.td({target:'#th1',obj:{...table ,c:'white',w:'100px',h:'20px'},text:" BCET,DGR."})
allTag.tr({target:'table',obj:{...table , bg:'blue'},id:'th2'})
allTag.td({target:'#th2',obj:{...table ,c:'white',w:'100px',h:'20px'},text:" 12500122066."})
allTag.td({target:'#th2',obj:{...table ,c:'white',w:'100px',h:'20px'},text:"Sahil Kumar."})
allTag.td({target:'#th2',obj:{...table ,c:'white',w:'100px',h:'20px'},text:" BCET,DGR."})
allTag.td({target:'#th2',obj:{...table ,c:'white',w:'100px',h:'20px'},text:" BCET,DGR."})
allTag.td({target:'#th2',obj:{...table ,c:'white',w:'100px',h:'20px'},text:" BCET,DGR."})
allTag.td({target:'#th2',obj:{...table ,c:'white',w:'100px',h:'20px'},text:" BCET,DGR."})
allTag.td({target:'#th2',obj:{...table ,c:'white',w:'100px',h:'20px'},text:" BCET,DGR."})
allTag.td({target:'#th2',obj:{...table ,c:'white',w:'100px',h:'20px'},text:" BCET,DGR."})
allTag.td({target:'#th2',obj:{...table ,c:'white',w:'100px',h:'20px'},text:" BCET,DGR."})
allTag.tr({target:'table',obj:{...table , bg:'green'},id:'th3'})
allTag.td({target:'#th3',obj:{...table ,c:'white',w:'100px',h:'20px'},text:" 12500122066."})
allTag.td({target:'#th3',obj:{...table ,c:'white',w:'100px',h:'20px'},text:"Sahil Kumar."})
allTag.td({target:'#th3',obj:{...table,bg:'yellow' ,c:'white',w:'100px',h:'20px'},text:" BCET,DGR."})
allTag.td({target:'#th3',obj:{...table ,bg:'pink',c:'white',w:'100px',h:'20px'},text:" BCET,DGR."})
allTag.td({target:'#th3',obj:{...table ,c:'white',w:'100px',h:'20px'},text:" BCET,DGR."})
allTag.td({target:'#th3',obj:{...table ,c:'white',w:'100px',h:'20px'},text:" BCET,DGR."})
allTag.td({target:'#th3',obj:{...table ,c:'white',w:'100px',h:'20px'},text:" BCET,DGR."})
allTag.td({target:'#th3',obj:{...table ,c:'white',w:'100px',h:'20px'},text:" BCET,DGR."})
allTag.td({target:'#th3',obj:{...table ,c:'white',w:'100px',h:'20px'},text:" BCET,DGR."})


/** 
 * @param start Instruction
 * if you want to this type of font just dounload casecadia font and set on your pc and vscode editore
 * now this project completed in have some issuse if you have idea how can we solve issuse than plase contact of this link
 * https://www.codemember.in
 * and you have any type query about update this API for more efficiate than you can cantact my prsional account 
 * jaykumar2dear@gmail.com 
 * now project statement how is work any how we use for make web page without using css file to get style by javascript
 * in few line just call which type of tag are you want 
 * and in here you have any issuse about css  you can change my AIP properties
 * how is work 
 * 1. It work as a funtion call (method call) if you want to create div tag just type allTag.div({}) and this created
 * and tke some properties like content ,text ,id,class , target(where are you want to create it ok)
 * when you call funtion what you need first create one object for give all css propeties 
 * so properies all provide in my documation page go and read to improve how to you of this API 
 * 2. if you want to create form tag ,input tag ,button tag jsut call ceateInputTag
 * when you create is what you need first create two object for one object give css part and another give 
 * attribute properties like submit , reset, onclick , onsubmit, require already set;
 * 3. table call allTag.table and now create you table how many header are you want means which type data are you want to add in this tableLayout: 
 *  and you tr , thne use th for create your header page for how any cell you want to create
 * than use tb header data for showing in webpage in this AIP we care all type tag if any tag we forget about then you can inform us 
 * for include this type tag you can use this project to make more efficiant
 * if you are bigginer in html and css then i highly recument you first complete your css and html part 
 * then you can you this otherwise you can not you becuase all tag properies base any html and css
 * so plase first learn html and css or few javascript 
 * @param end instruction \/ /\ \/ \/ \/ 
 * @param start this AIP use to biuld a page for render your all type data show in page 
 * !== !== !== !== !== !== !== !== !== !== !== !== !== !== !== !== !== !== !== !== !== !==
 * +++ +++ +++ +++ +++ +++ +++ +++ +++ +++ +++ +++ +++ +++ +++ +++ +++ +++ +++ +++ +++ +++
 * ---------------------------------------------------------------------------------------
 * *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** ***
 * != != != != != != != != != != != != != != != != != != != != != != != != != != != != !=
 * <======================================================================================>
 * <=<=<=<=<=< <=<=<=<=< <=<=< <=<=<==<=<=<=< <=<=<=<=<=<<=<=<=<<=<=<=<=<<=<=<=<=<=<=<=<
 * =>=>=>=>=>=>=>=>=>=>=>=>=>=>=>=>=>=>=>=>=>=>=>=>=>=>=>=>=>=>=>=>=>=>=>=>=>=>=>=>=>=>
 * <==> <==> <===> <==> <==> <=> <=> <=> 
 * ^=^=^=^=^=^=^=^=^=^=^=^=^=^=^=^=^=^=^=^=^=^=^=^=^=^=^=^=^=^=^=^=^=^=^=^=^=^=^=^=^=^=^=
 * -||-||-||-||--||-||-||-||--||-||-||-||--||-||-||-||--||-||-||-||--||-||-||-||--||-||-
 * <><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><>
 * |-|-|-|-
 * @param end ok end of this API project and know you have
 *  any query acout this AIP project 
 * please send feedback of this gmail (jaykumar2dear@gmial.com);
 * now close of this projects 
 */
