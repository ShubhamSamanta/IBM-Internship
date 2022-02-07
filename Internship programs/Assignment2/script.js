function addTask(){
    let task=document.createElement("li");
    let input=document.getElementById("Entered");
    task.textContent=input.value;


    let div=document.createElement("div");
    // a.textContent="X";
    // a.href="javascript:void(0)";
    div.innerHTML="";
    div.type="button";
    div.setAttribute("class","bin");

    task.appendChild(div);

    if(input.value===""){}
    else{
    let list=document.getElementById("Task");
    list.appendChild(task);
    }

    document.getElementById("Entered").value="";
}

// function removeTask(){

// }

let btn= document.getElementById("btn");
btn.addEventListener("click",()=>{
    addTask();
});

let btn2=document.querySelector("ul");
btn2.addEventListener("click",(e)=>{
    let box=document.getElementById("Task");
    let rli=e.target.parentNode;
    box.removeChild(rli);
} );