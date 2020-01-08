//alert('connected')



var ul=document.getElementById('list');
var li;


var addButton= document.getElementById('add');
addButton.addEventListener('click',addItem);

var removeButton=document.getElementById('remove');
removeButton.addEventListener('click',removeItem);



function addItem(){
    var input= document.getElementById('input');
    
    var item = input.value;
    
    // ul = document.getElementById('list');
    var textNode = document.createTextNode(item);

    if(item ==" "){
        alert( 'please enter text')
       
    }else{
        //create li
        li=document.createElement('li');
        // create checkbox
        var checkbox= document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.setAttribute('id','check');


        // create label
        var label = document.createElement('label');
          
            

        //add this element on webpage
        ul.appendChild(label);
        li.appendChild(checkbox);
        label.appendChild(textNode);
        li.appendChild(label);
        ul.insertBefore(li, ul.childNodes[0]);

       // li.className ='visual';

       setTimeout(() => {
           li.className='visual';
       },1);

        input.value='';

    }
}
function removeItem(){
    li = ul.children  
    //console.log(li)          //it have array of li...which includes some properties
    for(let index = 0; index < li.length;index++){  
        //const element = li[index];  //fetching all the li element
        //console.log(element); 
        while(li[index] && li[index].children[0].checked){
            ul.removeChild(li[index]);
        }
    }
    
}