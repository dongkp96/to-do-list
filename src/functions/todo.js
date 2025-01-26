export class todoItem{
    constructor(title, description, priority){
        this.title = title;
        this.description = description;
        this.priority = priority;
        this.dueDate = "1/26/25";
    }

}


export function createToDoDOM(){
    const container = document.querySelector("#to-do-items");
    const todoCard = document.createElement("div");
    todoCard.setAttribute("class", "item");
    
}