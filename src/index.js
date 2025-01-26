import "./styles.css";
import {projectModal, itemModal} from "./functions/modal.js";
import {projectList, project, createProjectDom} from "./functions/project.js"

const list = new projectList;

projectModal();
itemModal();

const submitProjectBtn = document.querySelector("#submit");
submitProjectBtn.addEventListener("click", (e)=>{
    e.preventDefault();
    const element = document.querySelector("#project-name");
    const projectName = element.value;

    const newProject = new project(projectName);
    list.addProject(newProject);
    const IDnumber = list.projects.length;
    
    createProjectDom(projectName, IDnumber);

    element.value = "";
    const createProjectDialog = document.querySelector("#project-creator");
    createProjectDialog.close();

})

const submitItemBtn = document.querySelector("#submit-item");
submitItemBtn.addEventListener("click", (e)=>{localStorage
    e.preventDefault();
    const title = document.querySelector("#task-name").value;

    const description = document.querySelector("#task-description").value;

    const priority = document.querySelector("#task-priority").value;

    /*const date = document.querySelector("#task-duedate");*/

    
})

/*
Ideas 

1.When you click on a project card (div), it has an event listener that will loop through
project list and then set the current project holder (variable or something) to that project 
object/class then it will loop through the project object's toDoList property and then use
createToDoDOM() function to display them all on the page 
-it will first make that todoitem container HTML empty before doing it, so it seems like it 
refreshes each
-instead of using the focused pseudoClass, chatGPT gave good advice of using a class identifier,
of highlighted so that it can be highlighted like it is selected. You can make all other 
project cards unhighlighted by selecting all those cards probably with querySelectorAll 
then running thrrough them all and then removing the highlighted from their class. You can
then add the highlighted class to the current targeted card. This is also tied into
targeting the current highlighted project card and setting it as the current project to display
stuff. 

2. To add the todo item to the project, you would reference the current project holder variable
and just call its method to add a todo item to it and also assign the add to-do-item button
to create the todoItem object and add it to the DOM and to the project objects todolist

I think currently your thoughts are on the bigger part of how to set the specific project's 
todo list that you want to display and add to. You are able to access the data inside 
the submit to-do-item dialog and probably create the card, but you are trying to figure out
how to add that created todo item object to the correct project's todoList. Also trying to 
figure out how to set the current focused project etc
-Also remember, when you delete a project, all to do items need to go too so likely create
a method to empty the array and then clear the DOM. 

Work on the sorting and all else later

*/
