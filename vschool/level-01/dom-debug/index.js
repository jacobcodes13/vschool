const colors = ["red", "blue", "green"]
                                            //Changed "onlick" to "click"
document.getElementById("add").addEventListener("click", function(e){
    const subItem = createSubItem(e)
    document.getElementById("list").appendChild(subItem)
})

function createDropDown(){
    const dropDown = document.createElement("select")
    for (let i = 0; i < colors.length; i++){  //Added .length
        const option = document.createElement("option") //Added document.
        option.innerHTML = colors[i]
        option.value = colors[i]
        dropDown.append(option)
    }                       //Changed "onchange" to "change"
    dropDown.addEventListener("change", (e) => e.target.parentElement.style.backgroundColor = e.target.value) 
    return dropDown                                     //Added Element to parentElement
}

function createSubItem(){
    const subItem = document.createElement("div")
    var subItemValue = document.getElementById("input")
    subItem.textContent = subItemValue.value  //Added .value
    const dropDown = createDropDown()
    subItem.appendChild(dropDown)
    subItem.setAttribute("class", "subItem")
    return subItem
}


