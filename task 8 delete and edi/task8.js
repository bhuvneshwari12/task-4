var form = document.getElementById('addForm');
var itemlist=document.getElementById('items');
var filter=document.getElementById('filter');



//form submit event : 
form.addEventListener('submit', addItem);
//REMOVE ITEM EVENT :
itemlist.addEventListener('click',removeitem);
//Filter items 
filter.addEventListener('keyup', funfilter);



// making a function for form submit event 
function addItem(e)
{        
e.preventDefault();
                             
var newitem=document.getElementById('item').value;   // taking a input value into a new var :
var li=document.createElement('li');                //create a new list for a input value:
li.className = 'list-group-item';                   // create it's classname :
li.appendChild(document.createTextNode(newitem));   //add textnode with input value :
itemlist.appendChild(li)


// create del button element : 
var deletebtn=document.createElement('button');
deletebtn.className='btn btn-danger btn-sm float-right delete ';
deletebtn.appendChild(document.createTextNode('X'));
li.appendChild(deletebtn);
itemlist.append(li)



//EDIT BUTTON :
var editbtn=document.createElement('button');
editbtn.className='btn btn-danger btn shadow-lg';
editbtn.appendChild(document.createTextNode('Edit'));
li.appendChild(editbtn);
itemlist.append(li)

console.log("yes this submit function is working ");

}


//making a function for delete button : 

function removeitem(e)
{

    if(e.target.classList.contains('delete'))
    {
        if(confirm('ARE YOU SURE'))
        {
            var li= e.target.parentElement;
            itemlist.removeChild(li)
        }
    }
    console.log("YES THIS REMOVE ITEM FUNCTION IS WORKING")

}

