import "./styles.css";
import {projectModal, itemModal} from "./functions/modal.js";
import {projectList, project, createProjectDom} from "./functions/project.js"
import {todoItem, createToDoDOM} from "./functions/todo.js";

const list = new projectList;
let currentProject; 
/*
Sets list variable to hold global projectsList object which is used to add projects to.
Creates currentProject variable to serve as holder for currently selected projects in order
to access the toDo items inside and functionality 
 */


projectModal();
itemModal();
/*
These functions here adds functionality to the project and dialog modals such as opening 
and closing
 */

const submitProjectBtn = document.querySelector("#submit");
submitProjectBtn.addEventListener("click", (e)=>{
    e.preventDefault();
    const element = document.querySelector("#project-name");
    const projectName = element.value;
    const newProject = new project(projectName);
    currentProject = newProject;
    list.addProject(newProject);
    const IDnumber = list.projects.length;
    createProjectDom(projectName, IDnumber);
    /*
    1.Takes the value of the input bar from the project modal and uses the string to create
    new project object
    2.Adds project to the projectList object called list and uses its length to generate an ID
    that is fed into the createProjectDom function that creates the HTML elements in the 
    projects-container section 
     */ 

    const projectCard = document.querySelector("#project"+ IDnumber);
    projectCard.addEventListener("click", (e)=>{
        /*Goal of this portion is to add eventListener to the project card div */
        if(document.querySelectorAll(".highlighted")){
            const cards = document.querySelectorAll(".highlighted");
            cards.forEach((card)=>{
                card.classList.remove("highlighted");
            })
        }

        e.target.classList.add("highlighted");
        currentProject = newProject;
        /*
        1.The if statement is used to find all elements with the highlighted class and remove
        that class designation
        2.adds the highlighted class to the current element being clicked
        3.Sets currentProject variable to the project object related to the div that has 
        been clicked
        */
        
        document.querySelector("#to-do-items").innerHTML = "";

        let todos = currentProject.toDos;

        if(todos.length > 0 ){
            for(let i = 0; i < todos.length; i ++){
                let title = todos[i].title;
                let description = todos[i].description;
                let priority = todos[i].priority;
                let date = todos[i].dueDate
                let itemID = "item"+i;
                createToDoDOM(title, description, priority, date, itemID);
            }
        }

        /*
        1. Empties the to-do-items part of the screen
        2. Sets todos variable to the list of todo items related to current project
        3. If statement checks if list is empty or not and if not empty then loops through
        it to generate todo items in their section
         */
    })

    const projectDeleteBtn = document.querySelector(".project1")
    projectDeleteBtn.addEventListener("click",()=>{
        list.removeProject(projectName);
    } )

    /*Removes the project from the project list when hitting delete */

    element.value = "";
    const createProjectDialog = document.querySelector("#project-creator");
    createProjectDialog.close();
    /*Closes the project dialog while also setting the name input bar to empty */


})

const submitItemBtn = document.querySelector("#submit-item");
submitItemBtn.addEventListener("click", (e)=>{
    e.preventDefault();
    const title = document.querySelector("#task-name").value;
    const description = document.querySelector("#task-description").value;
    const priority = document.querySelector("#task-priority").value;
    const date = document.querySelector("#task-duedate").value;

    const newToDo = new todoItem(title, description, priority, date);
    if(currentProject ===""){
        alert("No current project selected");
    }else{
        currentProject.addItem(newToDo);
    }

    const itemId = "item" + currentProject.toDos.length ;

    createToDoDOM(title, description, priority, date, itemId);

    const deleteBtn = document.querySelector(".delete." +itemId);
    deleteBtn.addEventListener("click", (e) =>{
        const itemContainer = document.querySelector("#to-do-items")
        const removedId = "#"+ e.target.classList[1];
        const removedItem = document.querySelector(removedId);
        const index = Number(removedId[5])-1;
        currentProject.toDos.splice(index, 1);
        itemContainer.removeChild(removedItem);
    })


    const itemCreatorDialog = document.querySelector("#item-creator");
    itemCreatorDialog.close();

    
})

/*

1.Need to work on how to edit the todo item card and set things to be different likely can 
create another modal that pops up and is empty and is then filled with the properties of the
todo object. Editing then can be done on the input/textarea/date/dropdown/ and then setting 
those properties to those values when clicking the submit button. Can model similarly to the 
submit modal and submitItemBtn eventlistener

2.Sorting by priority could be done by creating 3 arrays and then looping through the 
list of todo objects and adding each todo item to their corresponding arrays labeled to be 
low, moderate, and high priority then cocatenating the arrays together with the concat()
function in arrays

3. Sorting by date is going to be done by using the date object of javascript and will review
what chatGPT explained about it to perform this

4.Other bugs to fix
-how to prevent addition/creation of todo items if there is no project (maybe can check
length of projectList variable list and if it is empty then nothing will be done)

5.Add comments to the code so that you can understand this in the future when you 
revamp it and make it look better

6. Optimize CSS style 

Work on the sorting and all else later

*/
