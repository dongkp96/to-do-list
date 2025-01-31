export class projectList{
    constructor(){
        this.list =[]
    }

    get projects(){
        return this.list;
    }

    addProject(project){
        this.list.push(project);
    }

    removeProject(project){
        for (let i = 0; i< this.list.length; i++){
            if(this.list[i].name === project){
                this.list.splice(i,1);
                break;
            }
        }
    }

    checkForProject(project){
        for (let i = 0; i< this.list.length; i++){
            if(this.list[i].name === project){
                return this.list[i].name;
            }
        }
    }

    retrieveProject(project){
        for (let i = 0; i< this.list.length; i++){
            if(this.list[i].name === project){
                alert(1);
            }
        }
    }


}

export class project{
    constructor(name){
        this.name = name;
        this.todoList = [];
    }

    addItem(todo){
        this.todoList.push(todo);
    }

    get toDos(){
        return this.todoList;
    }

    removeItem(todo){
        for (let i = 0; i< this.todoList.length; i++){
            if (this.todoList[i]=== todo){
                this.todoList.splice(i,1);
            }
        }
    }

}

export function createProjectDom(projectName, IDnumber){
    const projectsContainer = document.querySelector("#projects-container");

    const project = document.createElement("div");
    project.setAttribute("class", "project")
    const projectID = "project" + IDnumber;
    project.setAttribute("id", projectID);
    project.setAttribute("tabindex", 0);

    const title = document.createElement("h3");
    title.textContent = projectName;

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.setAttribute("type", "generic");
    deleteBtn.setAttribute("class", projectID);
    deleteBtn.addEventListener("click", (e) =>{
        document.querySelector("#to-do-items").innerHTML = "";
        const removeID = "#" + e.target.className;
        const removedProject = document.querySelector(removeID);
        projectsContainer.removeChild(removedProject);
    })
    /*
    deleteBtn.addEventListener("mousedown", ()=>{
        document.querySelector("#to-do-items").innerHTML = "";
    })
    deleteBtn.addEventListener("mouseup", (e)=>{
        const removeID = "#" + e.target.className;
        const removedProject = document.querySelector(removeID);
        projectsContainer.removeChild(removedProject);
    })*/

    project.appendChild(title);
    project.appendChild(deleteBtn);
    projectsContainer.appendChild(project);

}


