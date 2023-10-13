
const olElement=document.getElementById("ol-element");
let mode=0;

const link="http://www.w3.org/2000/svg";


const checklistMode=document.getElementById("checklist-mode");
const deleteMode=document.getElementById("delete-mode");
checklistMode.classList.add("bg-color");
const deleteAllButton=document.getElementById("delete-all-button");
const completeAllButton=document.getElementById("complete-all-button");
completeAllButton.style.display="inline-block";
deleteAllButton.style.display="none";




document.getElementById("addTask").addEventListener("click",()=>{
    let text=document.querySelector("#input-task").value;
    text=text.trim();
    if(text==="")
    return;
    document.querySelector("#input-task").value="";
    

    const newTask=document.createElement("li");
    newTask.classList.add("borders" , "position", "move2", "display-change" , "width-change3");
    newTask.style.marginTop="15px";
    const checklistSpan=document.createElement("span");
    checklistSpan.classList.add("position","borders3");
    checklistSpan.style.display="inline-block";
    checklistSpan.style.height="25px";
    checklistSpan.style.width="26px";
    checklistSpan.style.left="246px";
    


    const svgElement=document.createElementNS(link, "svg");
    svgElement.setAttribute("xmlns", link);
    svgElement.setAttributeNS(null, "height" , "14");
    svgElement.setAttributeNS(null, "width","14");


    const useElement=document.createElementNS(link, "use");
    useElement.setAttributeNS(null, 'href', "./sprites.svg#check-list-icon");


    svgElement.appendChild(useElement);
    svgElement.style.position="relative";
    svgElement.style.left="7px";
    svgElement.style.top="3px";


    checklistSpan.appendChild(svgElement);
    newTask.appendChild(checklistSpan);
    newTask.append(" ");



    const deleteButton=document.createElement("button");
    deleteButton.style.position="absolute"
    deleteButton.style.height="29px";
    deleteButton.style.left="246px";
    deleteButton.classList.add("borders3");
    deleteButton.setAttribute("type", "button");


    const svgElement2=document.createElementNS(link, "svg");
    svgElement2.setAttribute("xmlns", link);
    svgElement2.setAttributeNS(null, "height" , "14");
    svgElement2.setAttributeNS(null, "width","14");
    

    const useElement2=document.createElementNS(link, "use");
    useElement2.setAttributeNS(null, 'href', "./sprites.svg#list-delete");
    
    
    
    const inputElement=document.createElement("input");
    inputElement.setAttribute("type", "checkbox");
    inputElement.style.position="absolute";
    inputElement.style.left="250px";
    inputElement.style.top="2px";
    inputElement.style.opacity="0";


    const labelElement=document.createElement("label");
    labelElement.append(text);


    newTask.appendChild(labelElement);
    
    if(mode===0)
    {
        deleteButton.style.display="none";
        svgElement2.appendChild(useElement2);
        deleteButton.appendChild(svgElement2);
        newTask.appendChild(deleteButton);
        newTask.appendChild(inputElement);
    }
    else
    {
        checklistSpan.style.visibility="hidden";
        newTask.appendChild(inputElement);
        inputElement.style.display="none";
        svgElement2.appendChild(useElement2);
        deleteButton.appendChild(svgElement2);
        newTask.appendChild(deleteButton);
    }

    inputElement.addEventListener("change",()=>{
    if(inputElement.checked){
    checklistSpan.classList.add("bg-color");
    newTask.classList.add("bg-color","font-bold");
    labelElement.classList.add("linethrough");
    deleteButton.classList.add("bg-color");
    }
    else
    {checklistSpan.classList.remove("bg-color");
    newTask.classList.remove("bg-color","font-bold");
    labelElement.classList.remove("linethrough");
    deleteButton.classList.remove("bg-color");
    }});

    deleteButton.addEventListener("click", ()=>
    {
        deleteButton.classList.add("zindex1","zindex2");
        inputElement.classList.add("zindex2","zindex1");
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
        const temp2=child.getElementsByTagName("input")[0];
        temp2.checked="true";
        const del=child.getElementsByTagName("button")[0];
        del.classList.add("bg-color");
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
    const inp=child.getElementsByTagName("input")[0];
    inp.style.display="inline-block";
    const tempBtn=child.getElementsByTagName("button")[0];
    tempBtn.style.display="none";
    }
    completeAllButton.style.display="inline-block";
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
        const inp=child.getElementsByTagName("input")[0];
        inp.style.display="none";
        const tempBtn=child.getElementsByTagName("button")[0];
        tempBtn.style.display="inline-block";
    }
    completeAllButton.style.display="none";
    deleteAllButton.style.display="inline-block";
})
