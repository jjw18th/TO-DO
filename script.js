const arr=[];
document.getElementById("addTask").addEventListener("click",()=>{
    const text=document.querySelector("#input-task").value;
    //console.log(text);
    arr.push(text);
});
