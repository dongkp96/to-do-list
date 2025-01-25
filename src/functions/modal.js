export function projectModal(){
    const createProjectDialog = document.querySelector("#project-creator");
    const addProjectBtn = document.querySelector("#add-project");
    addProjectBtn.addEventListener("click", ()=>{
        createProjectDialog.showModal();
    })

    const closeProjectModal = document.querySelector("#close");
    closeProjectModal.addEventListener("click", ()=>{
        createProjectDialog.close();
    })
}