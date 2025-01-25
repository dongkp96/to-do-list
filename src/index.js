import "./styles.css";

const createProjectDialog = document.querySelector("#project-creator");
const addProjectBtn = document.querySelector("#add-project");
addProjectBtn.addEventListener("click", ()=>{
    createProjectDialog.showModal();
})

const closeProjectModal = document.querySelector("#close");
closeProjectModal.addEventListener("click", ()=>{
    createProjectDialog.close();
})

const submitProjectBtn = document.querySelector("#submit");
submitProjectBtn.addEventListener("click", ()=>{
    const element = document.querySelector("#project-name");
    alert(element.value);
})