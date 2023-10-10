const arr=[];
const olElement=document.getElementById("ol-element");
let mode=0;
const link="http://www.w3.org/2000/svg";


const checklistMode=document.getElementById("checklist-mode");
const deleteMode=document.getElementById("delete-mode");
checklistMode.classList.add("bg-color");
const deleteAllButton=document.getElementById("delete-all-button");
const completeAllButton=document.getElementById("complete-all-button");
completeAllButton.style.display="inline";
deleteAllButton.style.display="none";
document.getElementById("addTask").addEventListener("click",()=>{
    const text=document.querySelector("#input-task").value;
    arr.push(text);
    document.querySelector("#input-task").value="";
    

    const newTask=document.createElement("li");
    const checklistSpan=document.createElement("span");
    checklistSpan.setAttribute("type", "button");
    const svgElement=document.createElementNS(link, "svg");

    svgElement.setAttribute("xmlns", link);
    

    svgElement.setAttributeNS(null, "height" , "14");

    svgElement.setAttributeNS(null, "width","14");

    const useElement=document.createElementNS(link, "use");
    useElement.setAttributeNS(null, 'href', "./sprites.svg#check-list-icon");

    svgElement.appendChild(useElement);
    checklistSpan.appendChild(svgElement);
    
    newTask.appendChild(checklistSpan);
    
    newTask.append(" ");

    const deleteButton=document.createElement("button");
    deleteButton.setAttribute("type", "button");
    const svgElement2=document.createElementNS(link, "svg");

    svgElement2.setAttribute("xmlns", link);
    

    svgElement2.setAttributeNS(null, "height" , "14");

    svgElement2.setAttributeNS(null, "width","14");

    const useElement2=document.createElementNS(link, "use");
    useElement2.setAttributeNS(null, 'href', "./sprites.svg#list-delete");

    svgElement2.appendChild(useElement2);
    deleteButton.appendChild(svgElement2);
    
    
    //deleteButton.style.display="none";
    if(mode==0)
        deleteButton.style.display="none";
    else
        checklistSpan.style.display="none";
    

    newTask.appendChild(deleteButton);
    newTask.append(" ");
    
    const inputElement=document.createElement("input");
    inputElement.setAttribute("type", "checkbox");
    const labelElement=document.createElement("label");
    labelElement.appendChild(inputElement);
    labelElement.append(" ");
    labelElement.append(text);
    newTask.appendChild(labelElement);

    inputElement.addEventListener("change",()=>{
    if(inputElement.checked){
    checklistSpan.classList.add("bg-color");
    newTask.classList.add("bg-color","font-bold");
    labelElement.classList.add("linethrough");
    }
    else
    {checklistSpan.classList.remove("bg-color");
    newTask.classList.remove("bg-color","font-bold");
    labelElement.classList.remove("linethrough");
    }})

    deleteButton.addEventListener("click", ()=>
    {
        olElement.removeChild(newTask);
    })
    
    olElement.appendChild(newTask);
    
});




deleteAllButton.addEventListener("click", ()=>
{
    while(olElement.firstElementChild)
    {
    olElement.firstElementChild.remove();
    }

});


completeAllButton.addEventListener("click", ()=>
{   
    for (const child of olElement.children) 
    {
        //console.dir(child);
        child.classList.add("bg-color","font-bold");
        const temp=child.getElementsByTagName("label")[0];
        temp.classList.add("linethrough");
        const tempSpan=child.getElementsByTagName("span")[0];
        tempSpan.classList.add("bg-color");
        const temp2=temp.getElementsByTagName("input")[0];
        temp2.checked="true";
        //temp2.disabled="true";
        //const temp2=temp.getElementsByTagName("input");
        //temp2.disabled="true";
    }
});


checklistMode.addEventListener("click", ()=>
{
    mode=0;
    if(deleteMode.classList.contains("bg-color"))
    deleteMode.classList.remove("bg-color");
    checklistMode.classList.add("bg-color");
    const childElement=olElement.children;
    for(const child of childElement)
    {
    //console.dir(child);
    const tempSpan=child.getElementsByTagName("span")[0];
        tempSpan.style.display="inline";
    const tempBtn=child.getElementsByTagName("button")[0];
    //console.dir(tempBtn);
    tempBtn.style.display="none";
    }
    completeAllButton.style.display="inline";
    deleteAllButton.style.display="none";
})


deleteMode.addEventListener("click",()=>
{
    mode=1;
    deleteMode.classList.add("bg-color");
    if(checklistMode.classList.contains("bg-color"))
    checklistMode.classList.remove("bg-color");
    const childElement=olElement.children;
    for(const child of childElement)
    {
        const tempBtn=child.getElementsByTagName("button")[0];
        tempBtn.style.display="inline";
        const tempSpan=child.getElementsByTagName("span")[0];
        tempSpan.style.display="none";
    }
    completeAllButton.style.display="none";
    deleteAllButton.style.display="inline";
})
