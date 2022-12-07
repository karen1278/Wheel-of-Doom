 const entrada = document.querySelector("input")
 const añadir = document.querySelector(".btnadd")
 const ul = document.querySelector("ul")
 let elegido = document.querySelector("figcaption")

 añadir.addEventListener("click", (e) => {
     e.preventDefault();
     const text =entrada.value
     if(text !==""){
         const li = document.createElement("li")
         const p = document.createElement("p")
         p.textContent=text
         li.appendChild(p)
         li.appendChild(addDeleteBtn())
         ul.appendChild(li)
         entrada.value=""
     } 
 });

 const addDeleteBtn = () =>{
     const deleteBtn = document.createElement("button")
     deleteBtn.textContent="x"
     deleteBtn.className = "btnDelete"

     deleteBtn.addEventListener("click", (e)=>{
         const parentBtn = e.target.parentElement
         ul.removeChild(parentBtn);
         const nombres = document.querySelectorAll("li")
             if (nombres.leng === 0){
                 empty.style.display="block"
            }
     })
     return deleteBtn
 }