/*-----------------------------------------------------------------------------*/
// REVIEW DATA: load submitted data into the list on the submitted page
const loader = document.getElementById("load");
const dataHolder = document.querySelector(".data");
const close=document.querySelector("#close");

const saveData=localStorage.getItem("formData");
const jsonData=JSON.parse(saveData);

if (loader && dataHolder) {
    loader.addEventListener("click", () => {
        dataHolder.innerHTML=""
        dataHolder.classList.add(".datath");
        const tr = document.createElement("tr");
        const th1= document.createElement("th");
        const th2= document.createElement("th");
        th1.innerHTML="<label>ATTRIBUTES</label>"; 
        th2.innerHTML="<label>DATA</label>";
        tr.append(th1);tr.append(th2);
        dataHolder.append(tr);
        for(let json in jsonData){
            const tr = document.createElement("tr");
            const td1= document.createElement("td");
            const td2= document.createElement("td");
            td1.textContent = (`${json}`); td2.textContent=(`${jsonData[json]}`);
            tr.append(td1);tr.append(td2);
            dataHolder.append(tr);
        }
        close.hidden=false
    });
}

close.addEventListener("click",()=>{
    close.hidden=true;
    dataHolder.innerHTML=""

})