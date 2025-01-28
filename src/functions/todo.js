export class todoItem{
    constructor(title, description, priority, dueDate){
        this.title = title;
        this.description = description;
        this.priority = priority;
        this.dueDate = dueDate;
    }

}


export function createToDoDOM(title, description, priority, date, itemId){
    const container = document.querySelector("#to-do-items");
    const todoCard = document.createElement("div");
    todoCard.setAttribute("class", "item");
    todoCard.setAttribute("id", itemId);

    const itemTitle = document.createElement("h3");
    itemTitle.textContent = title;
    todoCard.appendChild(itemTitle);

    const itemDescription = document.createElement("p");
    itemDescription.textContent = description;
    todoCard.appendChild(itemDescription);

    const itemPriority = document.createElement("p");
    itemPriority.textContent = priority;
    todoCard.appendChild(itemPriority);

    const itemDate = document.createElement("p");
    itemDescription.textContent = date;
    todoCard.appendChild(itemDate);

    const itemBtnHolder = document.createElement("div");
    itemBtnHolder.setAttribute("class", "item-buttons");

    const editBtn = document.createElement("button");
    editBtn.textContent ="Edit";
    editBtn.setAttribute("type", "generic" );
    editBtn.setAttribute("class", "edit");
    itemBtnHolder.appendChild(editBtn);

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.setAttribute("type", "generic");
    deleteBtn.setAttribute("class", "delete");
    itemBtnHolder.appendChild(deleteBtn);

    todoCard.appendChild(itemBtnHolder);

    container.appendChild(todoCard);




    
}