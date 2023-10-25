console.dir(document)

//TRAVERSING THE DOM 


//PARENT NODE OF ITEMS :
var listitems=document.querySelector('#items')
console.log(listitems.parentNode)
listitems.parentNode.style.backgroundColor="grey";

//PARENT NODE OF PARENT NODE OF ITEMS :
console.log(listitems.parentNode.parentNode);
listitems.parentNode.parentNode.style.backgroundColor='black';
//PARENT NODE = PARENT ELEMENT ( IT IS THE SAME THING )
listitems.parentElement.parentElement.parentElement.style.backgroundColor='lightgreen';





//CHILD NODE //CHILDREN: 

//it shows the text between the list items check on your console : 
console.log(listitems.childNodes);
//IF U USE CHILDREN IT WILL HELP U IN BETTER REPRESENTATION : 
console.log(listitems.children);

listitems.childNodes[1].style.backgroundColor="green";
listitems.children[1].style.backgroundColor="lightblue";
listitems.children[2].style.backgroundColor="green";
listitems.children[3].style.backgroundColor="lightblue";


//FIRST CHILD :

console.log(listitems.firstChild);
//FIRST ELEMENT CHILD :
console.log(listitems.firstElementChild);
listitems.firstElementChild.textContent="ENTER ITEM 1 ";


// LAST ELEMENT CHILD : 
console.log(listitems.lastElementChild);
listitems.lastElementChild.textContent='ENTER LAST ITEM '
listitems.lastElementChild.style.backgroundColor="red";


//NEXT SIBLING :
console.log(listitems.nextSibling);
//NEXT ELEMENT SIBLING:
console.log(listitems.nextElementSibling);


//PREVIOUS SIBLING : 
console.log(listitems.previousSibling);
//PREVIOUS ELEMENT SIBLING :
console.log(listitems.previousElementSibling);
listitems.previousElementSibling.style.color='green';




//  CREATE ELEMENT :
//  CREATE A DIV :
var newdiv = document.createElement('div');
// ADD CLASS:
newdiv.className = 'hello';
//add id 
newdiv.id="hello1";
//ADD ATRRIBUTE:
newdiv.setAttribute('title','HELLO DIV')

//CREATE TEXT NODE:
newdivtextnode=document.createTextNode('HELLOWORLD');
newdiv.appendChild(newdivtextnode);


console.log(newdiv)


var container=document.querySelector('header  .container');
var h1 =document.querySelector('header h1 ');
container.insertBefore(newdiv,h1);

newdiv.style.fontSize="30px";