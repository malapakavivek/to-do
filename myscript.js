console.log("vivek")
const input = document.querySelector("input")
const list = document.querySelector("ul")
const btn = document.querySelector("button")

btn.addEventListener("click", ()=>{
    
    const text = input.value;
    input.value = "";

    const listItem = document.createElement("li")
    const textBox = document.createElement("span")
    const deleteButton = document.createElement("button")

    listItem.appendChild(textBox)
    textBox.textContent = text
    listItem.appendChild(deleteButton)
    deleteButton.textContent = "Finished"
    list.appendChild(listItem);

    deleteButton.addEventListener("click",() =>{
        textBox.style.textDecoration = "line-through"
    })

    input.focus()

})