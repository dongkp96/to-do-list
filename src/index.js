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
    
    createProjectDom(projectName, IDnumber, list);

    element.value = "";
    const createProjectDialog = document.querySelector("#project-creator");
    createProjectDialog.close();

})

const submitItemBtn = document.querySelector("#submit-item");
submitItemBtn.addEventListener("click", ()=>{
    const element = document.querySelector("#task-name");
    alert(element.value)
})

