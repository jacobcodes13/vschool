const list = document.getElementById("list");
const hr = document.getElementById("hr");
const form = document.addItem;

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const userInput = form.title.value;
  form.title.value = "";
  let newLi = document.createElement("li");
  let newDiv = document.createElement("div");
  let editButton = document.createElement("button");
  let clearButton = document.createElement("button");

  newDiv.textContent = userInput;
  editButton.textContent = "edit";
  clearButton.textContent = "X";
  clearButton.style.marginLeft = "4px";

  list.append(newLi);
  list.insertBefore(newLi, hr);
  newLi.append(newDiv);
  newLi.append(editButton);
  newLi.append(clearButton);

  editButton.addEventListener("click", () => {
    let editInput = document.createElement("input");
    let saveButton = document.createElement("button");

    editInput.value = newDiv.textContent;
    saveButton.textContent = "save";
    clearButton.style.display = "none";
    editButton.style.display = "none";
    newDiv.style.display = "none";

    newLi.append(editInput);
    newLi.append(saveButton);

    saveButton.addEventListener("click", () => {
      newDiv.textContent = editInput.value;
      newLi.removeChild(editInput);

      newDiv.style.display = "block";
      editButton.style.display = "inline";

      if (saveButton.parentNode) {
        saveButton.parentNode.removeChild(saveButton);
      }
    });
    //Re-display the clear button
    clearButton.style.display = "inline";
  });

  clearButton.addEventListener("click", () => {
    list.removeChild(newLi);
  });
});
