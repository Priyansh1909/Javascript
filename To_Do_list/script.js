let input = document.getElementById("inputtext")
let list = document.getElementById("ul_list")

//creating li element
document.getElementById("addbutton").addEventListener("click", function(){

    //getting input text value
    let inputtext = input.value;

    //creating new li element
    let taskitem = document.createElement("li");
    taskitem.innerHTML = inputtext;

    //append to li to ul element
    if(input.value === ""){
        alert("Input task ")
    }else{
    list.appendChild(taskitem);
    }


    //input clear

    input.value = "";

    taskitem.addEventListener("click" , ()=>{
        taskitem.style.textDecoration = "line-through";
    })


})

