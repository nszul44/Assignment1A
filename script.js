let ul = document.querySelector("ul");

function Function1(){
    let li = document.createElement("li");
    let txt = document.createTextNode("I am from Manhattan");
    li.appendChild(txt);

    if(ul.children.length < 4){    
        document.querySelector("ul").appendChild(li);
    }
};
function Function2(){
    if(ul.children.length > 3){ 
        ul.removeChild(ul.lastElementChild);
    }
}