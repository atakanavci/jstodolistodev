const ulDOM = document.querySelector("#list")
const taskDOM=document.querySelector("#task")

let userList=localStorage.getItem("Items")?JSON.parse(localStorage.getItem("Items")):[]
showItem()


function showItem(){
    if(localStorage.getItem("Items"))
    {
        userList.forEach((element,index) => {
            addItem(element,index)            
        });
    }        
}
function addItem(element,index)
{
    let liDOM=document.createElement("li")
    let textLiDOM=document.createTextNode(element)
    let iconDOM=document.createElement("i")
    iconDOM.classList.add("bi","bi-x-lg","close")
    iconDOM.addEventListener("click",function(){sutDown(index,iconDOM)})
    liDOM.addEventListener("click",taskOk)
    liDOM.append(textLiDOM)
    liDOM.append(iconDOM)
    ulDOM.prepend(liDOM)
}

function newElement(){
    if(taskDOM.value.trim('').length != 0)
    {   
        userList.push(taskDOM.value)
        localStorage.setItem("Items",JSON.stringify(userList))
        $('#addToast').toast('show')
        addItem(taskDOM.value,userList.length-1)        
    }else{
        $('#errorToast').toast('show') 
    }
   taskDOM.value=""  
}
function sutDown(index,atkn){
    userList.splice(index, 1)
    localStorage.setItem("Items",JSON.stringify(userList))
    atkn.parentElement.remove()
    $('#removeToast').toast('show')
}
function taskOk(){    
    this.classList.toggle("bg-success")
    this.style.textDecoration=(this.style.textDecoration=="line-through")?"none":"line-through"
}