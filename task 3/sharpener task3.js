console.log(document.head);
console.log(document.body);
console.log(document.all);
console.log(document.all[10]);
document.all[10].textContent='hello'
console.log(document.links);
console.log(document.images);

var head=document.getElementById("header-title");
var mainhead=document.getElementById("main-header");

head.textContent='hello'
head.innerText='goodbye'
console.log(head)
console.log(head.innerText)
head.innerHTML='<h3>hello</h3>'

mainhead.style.borderBottom='solid 3px #000'

//making "add item" bold and chaging the font colour to green

var item=document.getElementsByClassName("title");
item[0].style.fontweight='bold'
item[0].style.color='green'