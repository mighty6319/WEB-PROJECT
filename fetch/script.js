const fetching=document.querySelector("#fetch");
const sec=document.querySelector(".output");
fetching.addEventListener("click",async()=>{
    try{
        const response=await fetch("https://jsonplaceholder.typicode.com/users");
        const user=await response.json();
        const p=document.createElement("p");
        p.textContent=JSON.stringify(user);
        sec.append(p);
    }
    catch(err){
        console.log(`ERROR : ${err}`);
    }
});