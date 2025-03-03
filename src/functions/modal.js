export function projectModal(){
    const createProjectDialog = document.querySelector("#project-creator");
    const addProjectBtn = document.querySelector("#add-project");
    addProjectBtn.addEventListener("click", ()=>{
        createProjectDialog.showModal();
    })

    const closeProjectModal = document.querySelector("#close");
    closeProjectModal.addEventListener("click", ()=>{
        document.querySelector("#project-name").value = "";
        createProjectDialog.close();
    })
}

export function itemModal(){
    const createItemDialog = document.querySelector("#item-creator");
    const showItemFormBtn = document.querySelector("#add-item");
    showItemFormBtn.addEventListener("click", ()=>{
        createItemDialog.showModal();
    }) 

    const closeItemFormBtn = document.querySelector("#close2");
    closeItemFormBtn.addEventListener("click", ()=>{
        createItemDialog.close();
    })
}