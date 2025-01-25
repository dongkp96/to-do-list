import "./styles.css";
import {projectModal} from "./functions/modal.js";

projectModal();
const submitProjectBtn = document.querySelector("#submit");
submitProjectBtn.addEventListener("click", ()=>{
    const element = document.querySelector("#project-name");
    alert(element.value);
})