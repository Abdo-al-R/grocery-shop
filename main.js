const addBtn = document.getElementById("add-btn")
const addText = document.getElementById("add-text")
const removeAdd = document.getElementById("remove-add")
const remove = document.getElementById("remove")
const add = document.getElementById("add")
const count = document.getElementById("count")




addBtn.onclick = ()=>{
    addBtn.style.backgroundColor = "#e95f62"
    addBtn.style.color = "#fff"
    addText.classList.add("un-visible") 
    removeAdd.classList.remove("un-visible")
    add.onclick = ()=>{
        count.innerText++
    }
    remove.onclick = ()=>{
        if(count.innerText <= 1){
            return
        }
        count.innerText--
    }
}
