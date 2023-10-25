// changing backgorund colour of second item to green

var item=document.querySelectorAll(".list-group-item");
item[1].style.backgroundColor='green'

//changing font colour to green of 2nd item
item[1].style.color='green'


//changing all the odd element's backgroundcolor to green
var odd=document.querySelectorAll(".list-group-item:nth-child(odd)");

for (let i=0;i<odd.length;i++){
    odd[i].style.backgroundColor='green'
}
