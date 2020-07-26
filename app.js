

var list =document.getElementById("list")
function Additem(){
    var add=document.getElementById("todo-item")
var li=document.createElement("li")
var text=document.createTextNode(add.value)
li.appendChild(text)
list.appendChild(li)

// Create Delete button

var editBtn=document.createElement("button")
var editText=document.createTextNode("EDIT")
editBtn.setAttribute("class","btn-primary")
editBtn.setAttribute("onclick","edititem(this)")
editBtn.appendChild(editText)
li.appendChild(editBtn)

// Create Edit Button

var delBtn=document.createElement("button")
var delText=document.createTextNode("DELETE")
delBtn.setAttribute("class","btn-secondary ")
delBtn.setAttribute("onclick","delitem(this)")
delBtn.appendChild(delText)
li.appendChild(delBtn)




add.value=""
}

// Delete all items
function delAllitem(){
    list.innerHTML=""
}

// delete an item
function delitem(e){
    e.parentNode.remove()
}
// edit item
function edititem(e){
    var val=  e.parentNode.firstChild.nodeValue;
    var editVlue= prompt("Enter item ...",val)
    e.parentNode.firstChild.nodeValue=editVlue
}
