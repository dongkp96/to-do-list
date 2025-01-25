import "./styles.css";
import {projectModal, itemModal} from "./functions/modal.js";

projectModal();
itemModal();
const submitProjectBtn = document.querySelector("#submit");
submitProjectBtn.addEventListener("click", ()=>{
    const element = document.querySelector("#project-name");
    alert(element.value);
})

const submitItemBtn = document.querySelector("#submit-item");
submitItemBtn.addEventListener("click", ()=>{
    const element = document.querySelector("#task-name");
    alert(element.value)
})