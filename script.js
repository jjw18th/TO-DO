import {doubles} from "./utilities.js"
const arr=[];
document.getElementById("addTask").addEventListener("click",()=>{
    const text=document.querySelector("#input-task").value;
    //console.log(text);
    arr.push(text);
});
console.log(doubles(4));
window.arr2=arr;
